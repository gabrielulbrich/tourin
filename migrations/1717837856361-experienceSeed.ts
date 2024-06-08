import { MigrationInterface, QueryRunner } from 'typeorm';

export class ExperienceSeed1717837856361 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO experiences.availabilities (\`type\`,start_date,end_date,option_id,product_id) VALUES ('opening_hours','2024-01-02 00:00:00',NULL,1,1); 
      INSERT INTO experiences.keywords (keyword,product_id) VALUES ('Culture',1), ('Nature',1), ('Ecoturism',1); 
      INSERT INTO experiences.options (title,code,description,is_private,is_active,duration,cut_off,where_to_meet,product_id,validity) VALUES ('Title','Code','Description',0,0,'{"unit":"minutes","value":30}','0','000',1,NULL), ('a','123','dadwa',0,1,'1',NULL,'adawda',1,NULL); 
      INSERT INTO experiences.pricing (code,ticket_category,commission_rate,price,currency_iso,currency_symbol,age_from,age_to,participants_type,option_id) VALUES (1,'adult',30,900,'BRL','R$',30,90,'individual',1), (2,'youth',30,200,'BRL','R$',10,29,'individual',1); 
      INSERT INTO experiences.products (slug,\`type\`,title,about,city,state,country,location,whats_included,whats_not_included,what_to_bring,not_suitable_for,not_allowed,custom_information) VALUES ('stone-and-nature-vila-velha-and-buraco-do-padre-parana','tour','','Embark on a dual adventure in Parana, exploring Vila Velha''s ancient rock wonders and the enchanting Buraco do Padre. Immerse in geological marvels and natural beauty on this captivating expedition.','Ponta Grossa','Parana','Brasil','xxx','["Hotel pickup and drop-off", "Entry tickets to Vila Velha''s and Buraco do Padre''s Parks", "Tour Guide"]','["Food and drinks"]','["Passport or ID card", "Comfortable shoes", "Sunscreen", "Insect repellent"]','["People with low level of fitness"]','["Alcool"]','Nothing'); 
      INSERT INTO experiences.schedule (weekday,\`date\`,availability_id,product_id) VALUES ('monday',NULL,2,1); 
      INSERT INTO experiences.time_slots (\`from\`,\`to\`,capacity,vacancies,schedule_id) VALUES ('09:00:00','10:00:00',20,18,6);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
