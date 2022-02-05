import { IArtist, IEvent } from "./types";

export const createArtistObj = (artistData: any): IArtist => {
  return {
    id: artistData.id,
    name: artistData.name,
    fbUrl: artistData.facebook_page_url,
    url: artistData.url,
    imgUrl: artistData.image_url,
  };
};

export const createEventList = (
  artistName: string,
  artistEventData: any[],
  artistFavEvents: IEvent[]
) => {
  const eventsArr: IEvent[] = [];
  artistEventData.forEach((event: any) => {
    let isFavorite = false;
    artistFavEvents.length &&
      (isFavorite = artistFavEvents.some(favEvent => favEvent.id === event.id));
    eventsArr.push({
      id: event.id,
      artistName: artistName,
      description: event.description,
      eventDate: event.datetime,
      onSaleDate: event.on_sale_datetime,
      lineup: event.lineup,
      offers: event.offers,
      url: event.url,
      venue: event.venue,
      isSelected: false,
      isFavorite: isFavorite,
    });
  });
  return eventsArr;
};
