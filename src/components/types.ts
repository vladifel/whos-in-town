export interface IArtist {
  id: string;
  name: string;
  fbUrl: string;
  url: string;
  imgUrl: string;
}

export interface IEvent {
  id: string;
  artistName: string;
  description: string;
  eventDate: string;
  onSaleDate: string;
  lineup: string[];
  offers: IOffer[];
  url: string;
  venue: IVenue;
  isSelected: boolean;
  isFavorite: boolean;
}

export interface IVenue {
  city: string;
  country: string;
  location: string;
  name: string;
  region: string;
  latitude: string;
  longitude: string;
}

export interface IOffer {
  status: string;
  type: string;
  url: string;
}

export interface ILocalFavEvents {
  artistId: string;
  artistName: string;
  favEvents: IEvent[];
}
