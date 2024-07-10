import { Repository } from 'typeorm';
import { Movie } from '../movies/movie.entity';
import { User } from 'src/users/user.entity';
export declare class FavoritesService {
    private userRepository;
    private movieRepository;
    constructor(userRepository: Repository<User>, movieRepository: Repository<Movie>);
    addToFavorites(userId: number, movieId: number): Promise<User>;
    removeFromFavorites(userId: number, movieId: number): Promise<User>;
}
