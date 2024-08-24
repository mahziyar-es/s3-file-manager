import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum FileStatus {
  PENDING = 'pending',
  READY = 'ready',
}

@Entity('files')
export class File {
  static CONSTRAINT_NAMES = {
    NAME_UNIQUE_INDEX: 'files_name_unique_index',
  };

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  @Index(File.CONSTRAINT_NAMES.NAME_UNIQUE_INDEX, { unique: true })
  name: string;

  @Column({ type: 'integer' })
  size: number;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'text' })
  storage_key: string;

  @Column({ type: 'enum', enum: FileStatus, default: FileStatus.PENDING })
  @Index()
  status: FileStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
