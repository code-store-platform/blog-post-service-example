import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Post")
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  public id: string;

  @Column("character varying", { name: "createdAt" })
  public createdAt: string;

  @Column("character varying", { name: "title" })
  public title: string;

  @Column("character varying", { name: "body" })
  public body: string;

  @Column("character varying", { name: "authorName" })
  public authorName: string;
}
