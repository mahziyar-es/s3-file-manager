import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('folders')
export class Folder {
  static CONSTRAINT_NAMES = {
    NAME_UNIQUE_INDEX: 'folders_name_unique_index',
  };

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  @Index(Folder.CONSTRAINT_NAMES.NAME_UNIQUE_INDEX, { unique: true })
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
