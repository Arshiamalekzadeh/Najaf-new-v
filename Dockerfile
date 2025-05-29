FROM node:alpine AS builder

WORKDIR /app
COPY . .

RUN corepack enable pnpm
RUN corepack use pnpm@latest
RUN pnpm install
RUN pnpm run build

FROM nginx:alpine
EXPOSE 8080

COPY --from=builder /app/dist/ /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
