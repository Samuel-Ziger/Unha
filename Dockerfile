FROM node:18-alpine

WORKDIR /app

# Instalar dependências
COPY package*.json ./
RUN npm cache clean --force && \
    npm install --legacy-peer-deps --prefer-offline --no-audit --no-fund --no-optional

# Copiar arquivos do projeto
COPY . .

# Construir o projeto
RUN npm run build

# Expor a porta
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "preview"] 