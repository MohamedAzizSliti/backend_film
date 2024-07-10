import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity'; // Ensure you import your Movie entity
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]), // Include your Movie entity here
    // Other modules or dependencies needed by MoviesModule
  ],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
