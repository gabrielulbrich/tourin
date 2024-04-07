import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.ENVIRONMENT === 'development',
  entities: [__dirname + '/../../**/entities/*.entity.{js,ts}'],
  migrationsRun: process.env.DATABASE_MIGRATION === 'true',
  migrationsTableName: 'migrations',
  migrations: [process.env.DATABASE_MIGRATION_FILES ?? 'dist/migrations/*.js'],
  logging: process.env.DATABASE_MIGRATION === 'true',
  logger: 'advanced-console',
  namingStrategy: new SnakeNamingStrategy(),
};

export const typeOrmConfig: TypeOrmModuleOptions = config;
export const typeOrmConfigMigration = new DataSource(config);
