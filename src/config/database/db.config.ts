import { registerAs } from "@nestjs/config";

export default registerAs('database.postgresql', () => ({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: process.env.TYPEORM_PORT,
  entities: [
    'dist/**/*.entity.{.js,.ts}'
  ],
  migrations: ['dist/database/migrations'],
}));