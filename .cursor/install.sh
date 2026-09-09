#!/usr/bin/env bash
# Idempotent dependency + database bootstrap for the Sanecta full stack.
# Safe to run repeatedly; used as the Cloud Agent `install` step.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "==> Ensuring PostgreSQL 16 is installed"
if ! command -v psql >/dev/null 2>&1; then
  sudo apt-get update -qq
  sudo DEBIAN_FRONTEND=noninteractive apt-get install -y postgresql postgresql-contrib
fi

echo "==> Ensuring the PostgreSQL cluster is running"
sudo pg_ctlcluster 16 main start 2>/dev/null || true
for _ in $(seq 1 30); do
  if sudo -u postgres pg_isready >/dev/null 2>&1; then break; fi
  sleep 1
done

echo "==> Ensuring the 'sanecta' role and database exist"
sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='sanecta'" | grep -q 1 \
  || sudo -u postgres psql -c "CREATE ROLE sanecta LOGIN PASSWORD 'sanecta';"
sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='sanecta'" | grep -q 1 \
  || sudo -u postgres createdb -O sanecta sanecta

echo "==> Warming the backend Maven dependency cache"
cd "$REPO_ROOT/sanecta-backend"
chmod +x mvnw
./mvnw -q -DskipTests dependency:go-offline

echo "==> Installing frontend dependencies"
cd "$REPO_ROOT/sanecta-frontend"
npm install

echo "==> install.sh complete"
