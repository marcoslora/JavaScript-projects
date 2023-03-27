import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Villain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  villainName: string;
}
