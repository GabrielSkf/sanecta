# Sanectax

## Requirements

- Docker and Docker Compose
- JDK 21 if you want to run Maven directly on your machine

The current project is configured with `java.version=21` in `pom.xml`, so local Maven commands require a JDK 21 installation, not just a JRE.

Check your Java installation:

```bash
java -version
javac -version
```

## Local Development

The app defaults to the `dev` profile.

Start only Postgres:

```bash
docker compose up -d postgres
```

Run tests locally:

```bash
./mvnw test
```

Start the application locally with Maven:

```bash
./mvnw spring-boot:run
```

Useful local URLs:

- API docs: `http://localhost:8080/swagger-ui.html`
- OpenAPI JSON: `http://localhost:8080/v3/api-docs`

Stop the local database:

```bash
docker compose down
```

## Run The Full Stack In Docker

If you do not want to install JDK 21 locally, you can run the full application with Docker:

```bash
docker compose up -d --build
```

See logs:

```bash
docker compose logs -f app
```

## Deploy On A Server

Use the `prod` profile in production. In this profile, Swagger UI and `/v3/api-docs` are disabled.

On the server:

1. Install Docker and Docker Compose.
2. Copy the project to the server.
3. Set a real JWT secret.
4. Activate the `prod` profile.
5. Start the stack.

Example:

```bash
export JWT_SECRET='replace-with-a-strong-secret'
export SPRING_PROFILES_ACTIVE=prod
docker compose up -d --build
```

After deployment:

- App: `http://YOUR_SERVER_IP:8080`
- Swagger: `http://YOUR_SERVER_IP:8080/swagger-ui.html`

To update the server after new changes:

```bash
docker compose down
docker compose up -d --build
```
