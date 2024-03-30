import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitTables1711753372229 implements MigrationInterface {
  name = 'InitTables1711753372229';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`pricing_categories_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` int NOT NULL, \`title\` varchar(50) NOT NULL, \`price\` int NOT NULL, \`currency\` varchar(255) NOT NULL, \`isAutonomous\` tinyint NOT NULL, \`minAge\` int NOT NULL, \`maxAge\` int NOT NULL, \`maxParticipants\` int NOT NULL, \`participantsType\` varchar(50) NOT NULL, \`pricingId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`categories_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`images_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`extension\` varchar(100) NOT NULL, \`type\` varchar(50) NOT NULL, \`experienceId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`languages_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isoCode\` varchar(50) NOT NULL, \`language\` varchar(50) NOT NULL, \`experienceId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`experiences_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(36) NOT NULL, \`about\` longtext NOT NULL, \`startTime\` varchar(10) NOT NULL, \`endTime\` varchar(10) NOT NULL, \`ticketType\` varchar(36) NOT NULL, \`city\` varchar(50) NOT NULL, \`state\` varchar(50) NOT NULL, \`country\` varchar(50) NOT NULL, \`whatsIncluded\` varchar(5) NOT NULL, \`whatToBring\` varchar(5) NOT NULL, \`whereToMeet\` varchar(5) NOT NULL, \`categoryId\` int NULL, UNIQUE INDEX \`REL_3851e8753fb50fed5c92ad746e\` (\`categoryId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`availabilities_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`vacancies\` int NOT NULL, \`experienceId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`pricing_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL, \`availabilitiesId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`reviews_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user\` varchar(50) NOT NULL, \`review\` longtext NOT NULL, \`rate\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`pricing_categories_entity\` ADD CONSTRAINT \`FK_6bbb58ea8a2f89116d0856958aa\` FOREIGN KEY (\`pricingId\`) REFERENCES \`pricing_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`images_entity\` ADD CONSTRAINT \`FK_a3cf70c1ee0184dde8233895558\` FOREIGN KEY (\`experienceId\`) REFERENCES \`experiences_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`languages_entity\` ADD CONSTRAINT \`FK_a41213af60981e40f0580ae64d7\` FOREIGN KEY (\`experienceId\`) REFERENCES \`experiences_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`experiences_entity\` ADD CONSTRAINT \`FK_3851e8753fb50fed5c92ad746e9\` FOREIGN KEY (\`categoryId\`) REFERENCES \`categories_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`availabilities_entity\` ADD CONSTRAINT \`FK_407dfb0598df1c1be399a16af54\` FOREIGN KEY (\`experienceId\`) REFERENCES \`experiences_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`pricing_entity\` ADD CONSTRAINT \`FK_c37468cd9a79188e41aabdb8c6a\` FOREIGN KEY (\`availabilitiesId\`) REFERENCES \`availabilities_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`pricing_entity\` DROP FOREIGN KEY \`FK_c37468cd9a79188e41aabdb8c6a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`availabilities_entity\` DROP FOREIGN KEY \`FK_407dfb0598df1c1be399a16af54\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`experiences_entity\` DROP FOREIGN KEY \`FK_3851e8753fb50fed5c92ad746e9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`languages_entity\` DROP FOREIGN KEY \`FK_a41213af60981e40f0580ae64d7\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`images_entity\` DROP FOREIGN KEY \`FK_a3cf70c1ee0184dde8233895558\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`pricing_categories_entity\` DROP FOREIGN KEY \`FK_6bbb58ea8a2f89116d0856958aa\``,
    );
    await queryRunner.query(`DROP TABLE \`reviews_entity\``);
    await queryRunner.query(`DROP TABLE \`pricing_entity\``);
    await queryRunner.query(`DROP TABLE \`availabilities_entity\``);
    await queryRunner.query(
      `DROP INDEX \`REL_3851e8753fb50fed5c92ad746e\` ON \`experiences_entity\``,
    );
    await queryRunner.query(`DROP TABLE \`experiences_entity\``);
    await queryRunner.query(`DROP TABLE \`languages_entity\``);
    await queryRunner.query(`DROP TABLE \`images_entity\``);
    await queryRunner.query(`DROP TABLE \`categories_entity\``);
    await queryRunner.query(`DROP TABLE \`pricing_categories_entity\``);
  }
}
