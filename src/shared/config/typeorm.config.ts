import * as dotenv from 'dotenv'; // @see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource, DataSourceOptions } from "typeorm";

export const config: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    entities: [__dirname + '/../../**/*.entity.{js,ts}'],
    migrationsRun: process.env.DATABASE_MIGRATION === 'true',
    migrationsTableName: 'migrations',
    migrations: [process.env.DATABASE_MIGRATION_FILES ?? 'dist/migrations/*.js'],
    logging: process.env.DATABASE_MIGRATION === 'true',
    logger: 'advanced-console',
};

export const typeOrmConfig: TypeOrmModuleOptions = config;
export const typeOrmConfigMigration = new DataSource(config);

export default { typeOrmConfig, typeOrmConfigMigration };

