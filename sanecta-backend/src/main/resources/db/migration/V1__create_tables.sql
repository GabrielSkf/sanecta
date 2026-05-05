CREATE TABLE tb_users(
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(120) NOT NULL,
  email VARCHAR(120) NOT NULL,
  role TEXT NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_ag_username_created_updated
    ON tb_users (username, created_at, updated_at);
