import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class City {
  @PrimaryColumn({ type: "int", width: 5 })
  id: number;

  @Column({ type: "varchar", length: 27 })
  name: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  alt_name: string;

  @Column({ type: "int", width: 2 })
  country_id: number;

  @Column({ type: "varchar", length: 4 })
  is_active: string;

  @Column({ type: "varchar", length: 18 })
  created_at: string;

  @Column({ type: "varchar", length: 18 })
  updated_at: string;

  @Column({ type: "decimal", precision: 10, scale: 8 })
  lat: number;

  @Column({ type: "decimal", precision: 10, scale: 8 })
  long: number;
}
