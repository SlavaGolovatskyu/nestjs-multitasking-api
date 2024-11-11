import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1731241173837 implements MigrationInterface {
    name = 'Migrations1731241173837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tokens" ("token" character varying NOT NULL, "exp" TIMESTAMP NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "UQ_6a8ca5961656d13c16c04079dd3" UNIQUE ("token"), CONSTRAINT "REL_d417e5d35f2434afc4bd48cb4d" UNIQUE ("userId"), CONSTRAINT "PK_6a8ca5961656d13c16c04079dd3" PRIMARY KEY ("token"))`);
        await queryRunner.query(`ALTER TABLE "tokens" ADD CONSTRAINT "FK_d417e5d35f2434afc4bd48cb4d2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tokens" DROP CONSTRAINT "FK_d417e5d35f2434afc4bd48cb4d2"`);
        await queryRunner.query(`DROP TABLE "tokens"`);
    }

}
