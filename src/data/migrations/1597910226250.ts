import {MigrationInterface, QueryRunner} from "typeorm";

export class generatedAt1597910226250 implements MigrationInterface {
    name = 'generatedAt1597910226250'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "Post" ("id" BIGSERIAL NOT NULL, "createdAt" varchar NOT NULL, "title" varchar NOT NULL, "body" varchar NOT NULL, "authorName" varchar NOT NULL, CONSTRAINT "PK_c4d3b3dcd73db0b0129ea829f9f" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Post"`, undefined);
    }

}
