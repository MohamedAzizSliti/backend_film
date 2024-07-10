import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  runtime: string;

  @Column()
  genre: string;

  @Column()
  director: string;

  @Column()
  language: string;

  @Column()
  country: string;

  @Column()
  plot: string;

  @Column()
  poster: string;

  @Column()
  imdbRating: string;

  @Column()
  imdbVotes: string;

  @Column()
  metascore: string;

  @Column()
  awards: string;
}
