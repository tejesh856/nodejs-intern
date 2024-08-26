import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Airport {
  @PrimaryColumn({ type: "int", width: 4 })
  id: number;

  @Column({ type: "varchar", length: 7 })
  icao_code: string;

  @Column({ type: "varchar", length: 3 })
  iata_code: string;

  @Column({ type: "varchar", length: 72 })
  name: string;

  @Column({ type: "varchar", length: 14 })
  type: string;

  @Column({ type: "int", width: 5 })
  city_id: number;

  @Column({ type: "int", width: 3 })
  country_id: number;

  @Column({ type: "int", width: 1 })
  continent_id: number;

  @Column({ type: "varchar", length: 128, nullable: true })
  website_url: string;

  @Column({ type: "varchar", length: 18 })
  created_at: string;

  @Column({ type: "varchar", length: 18 })
  updated_at: string;

  @Column({ type: "decimal", precision: 12, scale: 9 })
  latitude_deg: number;

  @Column({ type: "decimal", precision: 12, scale: 9 })
  longitude_deg: number;

  @Column({ type: "varchar", length: 5, nullable: true })
  elevation_ft: string;

  @Column({ type: "varchar", length: 128, nullable: true })
  wikipedia_link: string;
}
