export interface IHotel {
  id: number;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: string[];
  weather: {
    [key: string]: string | number;
  };
  profile: {
    [key: string]: string | number;
  };
  stars: number;
}
