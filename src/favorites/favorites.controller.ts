// favorites.controller.ts
import { Controller, Param, Post, Delete, UseGuards } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':userId/add/:movieId')
  async addToFavorites(@Param('userId') userId: number, @Param('movieId') movieId: number) {
    return this.favoritesService.addToFavorites(userId, movieId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':userId/remove/:movieId')
  async removeFromFavorites(@Param('userId') userId: number, @Param('movieId') movieId: number) {
    return this.favoritesService.removeFromFavorites(userId, movieId);
  }
}
