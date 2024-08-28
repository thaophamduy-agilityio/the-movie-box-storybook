export interface MovieInfoData {
  id?: number;
  publicYear?: number;
  imgSrc?: string;
  title: string;
  genres: string[];
  rating: number;
  duration?: string;
  isHeroMovie: boolean;
  reviews: number;
}
