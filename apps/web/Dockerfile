FROM node:20-slim AS node-builder

EXPOSE 3000

RUN apt-get update \
  && apt-get install -y git build-essential \
  && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN npm install -g npm node-gyp

WORKDIR /web

COPY . .

RUN yarn
CMD ["yarn", "build"]


FROM node:20-alpine AS node-app

WORKDIR /web

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN apk add --no-cache libc6-compat nasm autoconf automake bash
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=node-builder /web/next.config.js ./
COPY --from=node-builder /web/public ./public
COPY --from=node-builder /web/package.json ./package.json
COPY --from=node-builder /web/.next ./.next
COPY --from=node-builder /web/node_modules ./node_modules
# COPY .env ./

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=node-builder --chown=nextjs:nodejs /web/.next/standalone ./
# COPY --from=node-builder --chown=nextjs:nodejs /web/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000

COPY package.json ./
COPY .babelrc ./
RUN npm install
COPY --from=node-builder /web/dist ./dist

CMD ["yarn", "start"]