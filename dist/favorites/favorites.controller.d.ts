import { FavoritesService } from './favorites.service';
export declare class FavoritesController {
    private favoritesService;
    constructor(favoritesService: FavoritesService);
    addToFavorites(userId: number, movieId: number): Promise<import("../users/user.entity").User>;
    removeFromFavorites(userId: number, movieId: number): Promise<import("../users/user.entity").User>;
}
