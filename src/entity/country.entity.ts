import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Country {
  @PrimaryColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  alt_name: string;

  @Column("text")
  country_code_two: string;

  @Column("text")
  country_code_three: string;

  @Column("text")
  flag_app: string;

  @Column()
  mobile_code: number;

  @Column()
  continent_id: number;

  @Column("text")
  country_flag: string;
}
