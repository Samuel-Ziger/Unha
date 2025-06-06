FROM node:18-alpine

WORKDIR /app

# Instalar dependências
COPY package*.json ./

# Configurar npm e instalar dependências
RUN npm config set registry https://registry.npmjs.org/ && \
    npm cache clean --force && \
    npm install --legacy-peer-deps --no-audit --no-fund --prefer-offline

# Copiar arquivos do projeto
COPY . .

# Construir o projeto
RUN npm run build

# Expor a porta
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "preview"] 