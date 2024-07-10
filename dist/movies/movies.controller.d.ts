import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto): Promise<import("./movie.entity").Movie>;
    findAll(): Promise<import("./movie.entity").Movie[]>;
    findOne(id: string): Promise<import("./movie.entity").Movie>;
    update(id: string, updateMovieDto: CreateMovieDto): Promise<import("./movie.entity").Movie>;
    remove(id: string): Promise<void>;
}
