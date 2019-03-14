import {IWeather} from './iweather';
import {IProfile} from './iprofile';

export interface IHotel {
  id: number;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: string[];
  weather: IWeather;
  profile: IProfile;
  stars: number;
  isFavorit: boolean;
}
