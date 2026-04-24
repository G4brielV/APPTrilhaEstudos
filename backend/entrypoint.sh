#!/bin/sh
set -e

echo "⏳ Waiting for the database to be ready..."
# Simple wait loop — keeps trying to connect via Prisma
MAX_RETRIES=30
RETRY_COUNT=0

until npx prisma db execute --stdin <<< "SELECT 1" > /dev/null 2>&1; do
  RETRY_COUNT=$((RETRY_COUNT + 1))
  if [ $RETRY_COUNT -ge $MAX_RETRIES ]; then
    echo "❌ Database did not become ready in time. Exiting."
    exit 1
  fi
  echo "⏳ Database not ready yet... retrying ($RETRY_COUNT/$MAX_RETRIES)"
  sleep 2
done

echo "✅ Database is ready!"

echo "🔄 Running Prisma migrations..."
npx prisma migrate deploy

echo "🌱 Running database seed..."
npx ts-node prisma/seed.ts

echo "🚀 Starting the backend..."
exec node dist/main
