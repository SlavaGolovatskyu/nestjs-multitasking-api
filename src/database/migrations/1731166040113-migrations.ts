import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1731166040113 implements MigrationInterface {
    name = 'Migrations1731166040113'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`CREATE INDEX "IDX_283ea82ca72e799655a957055f" ON "users" ("verified") `);
        await queryRunner.query(`CREATE INDEX "IDX_c53b8dca4127f2215d264f2beb" ON "users" ("hasSubscription") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_c53b8dca4127f2215d264f2beb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_283ea82ca72e799655a957055f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
    }

}
