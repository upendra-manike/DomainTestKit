FROM mcr.microsoft.com/playwright:v1.52.0-jammy

WORKDIR /tests
COPY . .

RUN npm ci

CMD ["npx", "playwright", "test"]
