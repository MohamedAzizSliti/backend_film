import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Movie } from 'src/movies/movie.entity'; // Adjust the import path based on your project structure

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Movie, { cascade: true }) // Defines many-to-many relation with Movie entity
  @JoinTable() // Specifies the join table for this relationship
  favoriteMovies: Movie[];
}
