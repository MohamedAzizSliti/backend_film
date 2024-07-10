import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../movies/movie.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async addToFavorites(userId: number, movieId: number): Promise<User> {
    const user = await this.userRepository.findOne(userId);
    
    const movie = await this.movieRepository.findOne({ where: { id: movieId } });
  
    if (!user || !movie) {
      throw new NotFoundException('User or Movie not found');
    }
  
    await this.userRepository.createQueryBuilder()
      .relation(User, 'favoriteMovies')
      .of(user)
      .add(movie);
  
    return user;
  }
  

  async removeFromFavorites(userId: number, movieId: number): Promise<User> {
    const user = await this.userRepository.findOne(userId, { relations: ['favoriteMovies'] });
    const movie = await this.movieRepository.findOne({ where: { id: movieId } });

    if (!user || !movie) {
      throw new NotFoundException('User or Movie not found');
    }

    user.favoriteMovies = user.favoriteMovies.filter(fav => fav.id !== movie.id);
    await this.userRepository.save(user);

    return user;
  }
}
