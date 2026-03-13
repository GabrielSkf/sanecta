# Frontend - Projeto

Este repositório contém o frontend do projeto desenvolvido em **Next.js**.

## Pré-requisitos

* Node.js (>= 18)
* npm ou yarn
* Docker e Docker Compose

---

## Instalação e Execução

1. **Instalar dependências do frontend**

   Entre na pasta do frontend e instale as dependências:

   ```bash
   cd sanecta-frontend
   npm install
   ```

2. **Subir o ambiente com Docker Compose**

   Volte para a raiz do projeto e execute o Docker Compose no modo de desenvolvimento:

   ```bash
   cd ..
   docker compose -f docker-compose.dev.yml up --build
   ```
---

## Observações

* Este README considera que o frontend está na pasta `sanecta-frontend`.
* Qualquer alteração no Docker File deve ser refletida no `sanecta-frontend/Dockerfile.dev`.
* Qualquer alteração no Docker Compose deve ser refletida no `docker-compose.dev.yml`.
* Mantenha o Node.js atualizado para evitar incompatibilidade
