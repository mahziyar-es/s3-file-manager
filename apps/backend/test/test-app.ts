import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { DataSource } from 'typeorm';

export class TestApp {
  static app: INestApplication;
  static db: DataSource;

  static async start() {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    TestApp.app = moduleFixture.createNestApplication();

    TestApp.db = TestApp.app.get(DataSource);

    await TestApp.app.init();
  }

  static async clearTables() {
    const entities = TestApp.db.entityMetadatas;

    for (const entity of entities) {
      const repository = TestApp.db.getRepository(entity.name);
      await repository.delete({});
    }
  }
}
