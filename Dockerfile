FROM node:14-alpine
COPY . .
CMD ["node", "api.js"]