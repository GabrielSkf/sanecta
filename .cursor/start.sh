#!/usr/bin/env bash
# Per-boot reconciliation: bring up PostgreSQL and make sure the app
# database/role exist before the backend and frontend terminals launch.
set -euo pipefail

echo "==> Starting the PostgreSQL cluster"
sudo pg_ctlcluster 16 main start 2>/dev/null || true

echo "==> Waiting for PostgreSQL to accept connections"
for _ in $(seq 1 30); do
  if sudo -u postgres pg_isready >/dev/null 2>&1; then break; fi
  sleep 1
done

echo "==> Ensuring the 'sanecta' role and database exist"
sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='sanecta'" | grep -q 1 \
  || sudo -u postgres psql -c "CREATE ROLE sanecta LOGIN PASSWORD 'sanecta';"
sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='sanecta'" | grep -q 1 \
  || sudo -u postgres createdb -O sanecta sanecta

echo "==> start.sh complete"
