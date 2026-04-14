import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('eventos')
export class Evento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  date!: Date;

  @Column()
  location!: string;

  @Column({ default: false })
  iscompleted!: boolean;
}
