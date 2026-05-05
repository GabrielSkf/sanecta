#!/bin/bash

set -e  # stop on error

ENV=${1:-dev}  # default to dev

wait_for_postgres() {
  # Wait until the postgres container reports ready (healthcheck/pg_isready).
  # This avoids Spring Boot failing fast on startup.
  local retries=30
  local i=1
  while [ $i -le $retries ]; do
    if docker compose exec -T postgres pg_isready -U sanecta -d sanecta >/dev/null 2>&1; then
      return 0
    fi
    sleep 1
    i=$((i+1))
  done
  echo "❌ Postgres did not become ready in time"
  return 1
}

docker_usable() {
  command -v docker >/dev/null 2>&1 || return 1
  # In some environments (notably snap-packaged docker without required caps),
  # invoking docker fails with permission/capability errors.
  docker version >/dev/null 2>&1 || return 1
  return 0
}

case $ENV in
  dev)
    echo "🔧 DEV mode"
    # Avoid stale classes under target/ causing Spring component-scan conflicts after refactors.
    ./mvnw -q clean

    # Bring up the dev DB if docker is usable.
    if docker_usable; then
      docker compose up -d postgres
      wait_for_postgres
    else
      echo "ℹ️  docker not usable here; assuming PostgreSQL is already running (or set DB_URL/DB_USERNAME/DB_PASSWORD)"
    fi

    ./mvnw spring-boot:run -Dspring-boot.run.profiles=dev
    ;;
    
  prod)
    echo "🐳 PROD mode"
    docker compose up -d --build
    ;;
    
  stop)
    echo "🛑 Stopping containers"
    docker compose down
    ;;
    
  *)
    echo "❌ Unknown environment: $ENV"
    echo "Usage: ./run.sh [dev|prod|stop]"
    exit 1
    ;;
esac
