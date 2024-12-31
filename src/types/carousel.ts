export interface CarouselImage {
  imageUrl: string;
  alt: string;
}

export type CarouselContent = string | CarouselImage;

export interface CarouselItem {
  content: CarouselContent;
}