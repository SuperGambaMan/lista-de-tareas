import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('eventos')
export class Evento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: 'text', nullable: true })
  description?: string | null;

  @Column()
  date!: Date;

  @Column({ type: 'text', nullable: true })
  location?: string | null;

  @Column({ default: false })
  iscompleted!: boolean;
}
