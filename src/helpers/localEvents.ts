import { ILocalFavEvents, IEvent } from "components/types";

export const getLocalFavEvents = (): ILocalFavEvents[] => {
  const localFavEvents = localStorage.getItem("favEvents");
  let localFavEventsDeserialized: ILocalFavEvents[] = [];
  localFavEvents && (localFavEventsDeserialized = JSON.parse(localFavEvents));
  return localFavEventsDeserialized;
};

export const getArtistFavEvents = (artistId: string): IEvent[] => {
  const currFavEvents = getLocalFavEvents();
  const artistFavEventsIndex = currFavEvents.findIndex(artist => artist.artistId === artistId);
  let artistFavEvents: IEvent[] = [];
  artistFavEventsIndex !== -1 && (artistFavEvents = currFavEvents[artistFavEventsIndex].favEvents);
  return artistFavEvents;
};

export const setLocalFavEvents = (newLocalFavEvents: ILocalFavEvents[]) => {
  const localFavEventsSerialized = JSON.stringify(newLocalFavEvents);
  localStorage.setItem("favEvents", localFavEventsSerialized);
};
