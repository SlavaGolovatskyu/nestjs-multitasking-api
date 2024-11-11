import { DataSource } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Token } from "src/auth/entities/token.entity";

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1414',
  database: 'alias_arena',
  entities: [
    User,
    Token,
  ],
  migrations: [
    'dist/database/migrations/*.js',
  ],
  migrationsTableName: "alias_arena_migrations",
});

export default dataSource;