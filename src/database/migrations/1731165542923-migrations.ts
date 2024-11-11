import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1731165542923 implements MigrationInterface {
    name = 'Migrations1731165542923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "subscriptionStartDate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "subscriptionEndDate" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "subscriptionEndDate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "subscriptionStartDate"`);
    }

}
