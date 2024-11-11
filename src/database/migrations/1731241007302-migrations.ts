import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1731241007302 implements MigrationInterface {
    name = 'Migrations1731241007302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "token" ("token" character varying NOT NULL, "exp" TIMESTAMP NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "UQ_d9959ee7e17e2293893444ea371" UNIQUE ("token"), CONSTRAINT "REL_94f168faad896c0786646fa3d4" UNIQUE ("userId"), CONSTRAINT "PK_d9959ee7e17e2293893444ea371" PRIMARY KEY ("token"))`);
        await queryRunner.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_94f168faad896c0786646fa3d4a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_94f168faad896c0786646fa3d4a"`);
        await queryRunner.query(`DROP TABLE "token"`);
    }

}
