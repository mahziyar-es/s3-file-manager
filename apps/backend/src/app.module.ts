import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoldersModule } from './folders/folders.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ErrorsInterceptor } from './common/interceptors/errors.interceptor';
import { FilesModules } from './files/files.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      autoLoadEntities: true,
    }),
    FoldersModule,
    FilesModules,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
})
export class AppModule {}
