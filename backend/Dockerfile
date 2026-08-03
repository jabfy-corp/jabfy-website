FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

FROM node:22-alpine

ENV NODE_ENV=production

WORKDIR /app

RUN addgroup --system --gid 10001 jabfy \
    && adduser --system --uid 10001 --ingroup jabfy jabfy

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist

USER jabfy

EXPOSE 3001

CMD ["node", "dist/server.js"]

