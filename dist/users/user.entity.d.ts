import { Movie } from 'src/movies/movie.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    favoriteMovies: Movie[];
}
