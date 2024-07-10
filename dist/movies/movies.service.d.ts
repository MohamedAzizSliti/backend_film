import { Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
export declare class MoviesService {
    private moviesRepository;
    constructor(moviesRepository: Repository<Movie>);
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    findAll(): Promise<Movie[]>;
    findOne(id: number): Promise<Movie>;
    update(id: number, updateMovieDto: CreateMovieDto): Promise<Movie>;
    remove(id: number): Promise<void>;
}
