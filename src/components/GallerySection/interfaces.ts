export interface ISection {
  id: string;
  title: string;
  caption: string;
  images?: Array<{ id: string, url: string }>;
  aboutImage?: { url: string };
  videoUrl?: string;
  credit?: string | null;
}