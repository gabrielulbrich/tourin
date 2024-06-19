import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateImageTable1718788973254 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`alter table images add url varchar(500) null;`);

    await queryRunner.query(
      `alter table images add description varchar(255) null;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`alter table images drop column url;`);

    await queryRunner.query(`alter table images drop column description;`);
  }
}
