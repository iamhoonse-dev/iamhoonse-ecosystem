# ---------------------------------------------------------------------------
# Base image
# ---------------------------------------------------------------------------
FROM node:22-alpine AS base

# enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

# ---------------------------------------------------------------------------
# Builder
# ---------------------------------------------------------------------------
FROM base AS builder

# libc6-compat
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# enable turbo
RUN pnpm add -g turbo

# Copy the source code and prune the workspace
COPY . .
RUN turbo prune portfolio --docker

# ---------------------------------------------------------------------------
# Installer
# ---------------------------------------------------------------------------
FROM base AS installer

# libc6-compat
RUN apk update
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Add lockfile and package.json's of isolated subworkspace
COPY --from=builder /app/out/json/ .

# Copy the pruned workspace
COPY --from=builder /app/out/full/ .

# First install the dependencies (as they change less often)
RUN pnpm install --frozen-lockfile

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

# Build the project
RUN pnpm turbo build

# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------
FROM base AS runner

# Set working directory
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/portfolio/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/portfolio/.next/static ./apps/portfolio/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/portfolio/public ./apps/portfolio/public

# start server
CMD node apps/portfolio/server.js
