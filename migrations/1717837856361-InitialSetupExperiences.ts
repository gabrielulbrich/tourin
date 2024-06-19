import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSetupExperiences1717837856361
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table if not exists languages
        (
        id       int auto_increment
            primary key,
        iso_code varchar(50) not null,
        language varchar(50) not null
        ); 
    `);

    await queryRunner.query(`
        create table if not exists products
        (
            id                 int auto_increment
                primary key,
            slug               varchar(255)not null,
            type               enum ('ticket', 'tour', 'transfer') not null,
            title              varchar(255)not null,
            about              longtext    not null,
            city               varchar(50) not null,
            state              varchar(50) not null,
            country            varchar(50) not null,
            location           varchar(50) not null,
            whats_included     longtext collate utf8mb4_bin        not null,
            whats_not_included longtext collate utf8mb4_bin        not null,
            what_to_bring      longtext collate utf8mb4_bin        not null,
            not_suitable_for   longtext collate utf8mb4_bin        not null,
            not_allowed        longtext collate utf8mb4_bin        not null,
            custom_information longtext    not null,
            check (json_valid(\`whats_included\`)),
            check (json_valid(\`whats_not_included\`)),
            check (json_valid(\`what_to_bring\`)),
            check (json_valid(\`not_suitable_for\`)),
            check (json_valid(\`not_allowed\`))
        );
    `);

    await queryRunner.query(`
        create table if not exists images
        (
            id         int auto_increment
                primary key,
            name       varchar(100) not null,
            extension  varchar(100) not null,
            type       varchar(50)  not null,
            product_id int          null,
            constraint FK_96fabbb1202770b8e6a58bf6f1d
                foreign key (product_id) references products (id)
        );
    `);

    await queryRunner.query(`
        create table if not exists keywords
        (
            id         int auto_increment
                primary key,
            keyword    varchar(50) not null,
            product_id int         null,
            constraint FK_430d0c594ce9085828933aa621f
                foreign key (product_id) references products (id)
        );
    `);

    await queryRunner.query(`
        create table if not exists options
        (
            id            int auto_increment
                primary key,
            title         varchar(50)                  not null,
            code          varchar(50)                  not null,
            description   varchar(50)                  not null,
            is_private    tinyint                      not null comment 'This means that only one group or person can participate. There won’t be other customers in the same activity.',
            is_active     tinyint                      not null,
            duration      longtext collate utf8mb4_bin not null,
            cut_off       varchar(50)                  null,
            where_to_meet longtext                     not null,
            product_id    int  null,
            validity      longtext collate utf8mb4_bin null,
            constraint FK_8f509b13eba74e88f50da0d1133
                foreign key (product_id) references products (id),
            check (json_valid(\`duration\`)),
            check (json_valid(\`validity\`))
        );
    `);

    await queryRunner.query(`
        create table if not exists availabilities
        (
            id         int auto_increment
                primary key,
            type       enum ('opening_hours', 'starting_times') not null,
            start_date datetime         not null,
            end_date   datetime         null,
            option_id  int              null,
            product_id int              null,
            constraint REL_02ecab140cb8a3b668b74df243
                unique (option_id),
            constraint FK_02ecab140cb8a3b668b74df2431
                foreign key (option_id) references options (id),
            constraint FK_ae4581c33363dbb013d4f8bfaf4
                foreign key (product_id) references products (id)
        );
    `);

    await queryRunner.query(`
        create table if not exists options_languages_languages
        (
            options_id   int not null,
            languages_id int not null,
            primary key (options_id, languages_id),
            constraint FK_56ba5e37efd09c5da514a09b74c
                foreign key (languages_id) references languages (id),
            constraint FK_a90f69d9096451e3a326e0645c7
                foreign key (options_id) references options (id)
                    on update cascade on delete cascade
        );
    `);

    await queryRunner.query(`
        create index IDX_56ba5e37efd09c5da514a09b74
            on options_languages_languages (languages_id);
    `);

    await queryRunner.query(`
        create index IDX_a90f69d9096451e3a326e0645c
            on options_languages_languages (options_id);
    `);

    await queryRunner.query(`
        create table if not exists pricing
        (
            id                int auto_increment
                primary key,
            code              int   not null,
            ticket_category   enum ('adult', 'child', 'youth', 'senior', 'student') not null,
            commission_rate   int   not null,
            price             int   not null,
            currency_iso      varchar(255)                  not null,
            currency_symbol   varchar(255)                  not null,
            age_from          int   not null,
            age_to            int   not null,
            participants_type enum ('individual', 'group')  not null,
            option_id         int   null,
            constraint FK_f088ab3938d2489f11f5e9f1f55
                foreign key (option_id) references options (id)
        );

    `);

    await queryRunner.query(`
        create table if not exists reviews
        (
            id           int auto_increment
                primary key,
            user         varchar(50)not null,
            message      longtext   not null,
            rating       int        not null,
            is_anonymous tinyint    not null,
            created_at   datetime default CURRENT_TIMESTAMP not null,
            product_id   int        null,
            constraint FK_9482e9567d8dcc2bc615981ef44
                foreign key (product_id) references products (id)
        );
    `);

    await queryRunner.query(`
        create table if not exists schedule
        (
            id              int auto_increment
                primary key,
            weekday         enum ('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'special') not null,
            date            date                   null,
            availability_id int                    null,
            product_id      int                    null,
            constraint FK_1b6578447e28e549246ff433d53
                foreign key (product_id) references products (id),
            constraint FK_57c979270ba9c9a3001d3752851
                foreign key (availability_id) references availabilities (id)
        );
    `);

    await queryRunner.query(`
      create table if not exists time_slots
      (
          id          int auto_increment
              primary key,
          \`from\`      time not null,
          \`to\`        time not null,
          capacity    int  not null,
          vacancies   int  not null,
          schedule_id int  null,
          constraint FK_66220db55f77709c927fcdf39f0
              foreign key (schedule_id) references schedule (id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // NOTHING TO ROLL BACK
  }
}
