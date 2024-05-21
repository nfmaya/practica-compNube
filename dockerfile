# Install dependencies only when needed
FROM node:21-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install 

# Build the app with cache dependencies
FROM node:21-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build


# Production image, copy all the files and run next
FROM node:21-alpine AS runner

# Set working directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --prod

COPY --from=builder /app/dist ./dist

FROM postgres:16

ENV POSTGRES_PASSWORD password

RUN mkdir -p /var/lib/postgresql/data

WORKDIR /var/lib/postgresql/data

EXPOSE 5432

CMD ["postgres", "-Dd", "/var/lib/postgresql/data", "-c", "listen_addresses='*'", "node","dist/main","yarn","start"]