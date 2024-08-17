import * as request from 'supertest';
import { TestApp } from './test-app';
import { CreateFolderDto } from 'src/folders/dto/create-folder.dto';

describe('folders e2e tests', () => {
  const resourceName = 'folders';

  beforeAll(async () => {
    await TestApp.start();
  });

  beforeEach(async () => {
    await TestApp.clearTables();
  });

  it(`/${resourceName} (POST)`, async () => {
    const folderDto: CreateFolderDto = {
      name: 'test-folder-1',
    };

    const response = await request(TestApp.app.getHttpServer())
      .post(`/${resourceName}`)
      .send(folderDto);

    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe(folderDto.name);
  });
});
