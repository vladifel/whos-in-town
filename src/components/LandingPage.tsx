import React, { FC, useState } from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

import { useWindowSize } from "helpers/useWindowSize";
import { fetchData } from "helpers/fetchData";
import { getArtistFavEvents, getLocalFavEvents, setLocalFavEvents } from "helpers/localEvents";
import { bandNameUpdate } from "helpers/bandNameUpdate";

import bg from "../assets/fest.jpg";
import SearchComponent from "./SearchComponent/SearchComponent";
import FavoritesArea from "./FavoritesArea/FavoritesArea";
import MainContainerMobile from "./MainContainer/MainContainerMobile";
import MainContainerDesktop from "./MainContainer/MainContainerDesktop";
import { IArtist, IEvent } from "./types";
import { createEventList, createArtistObj } from "./helpers";
import { styles } from "./LandingPage.styles";

type ILandingPageCombinedProps = WithStyles<typeof styles>;

const LandingPage: FC<ILandingPageCombinedProps> = ({ classes }: ILandingPageCombinedProps) => {
  const { width, height } = useWindowSize();
  const matchesMobile = useMediaQuery("(max-width:700px)");

  const [artist, setArtist] = useState<IArtist | undefined>(undefined);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [noArtistFound, setNoArtistFound] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | undefined>(undefined);
  const [searching, setSearching] = useState(false);

  const handleSearch = async (searchText: string) => {
    setSearching(true);
    setSelectedEvent(undefined);
    const bandNameUpdated = bandNameUpdate(searchText);
    const artistData: any = await fetchData(
      `https://rest.bandsintown.com/artists/${bandNameUpdated}?app_id=123`
    );

    if (artistData !== "") {
      setNoArtistFound(false);
      const artistEventData = await fetchData(
        `https://rest.bandsintown.com/artists/${bandNameUpdated}/events?app_id=123&date=upcoming`
      );
      const artistFavEvents = getArtistFavEvents(artistData.id);

      const artistObj = createArtistObj(artistData);

      const eventsArr = createEventList(artistData.name, artistEventData, artistFavEvents);

      setArtist(artistObj);
      setEvents(eventsArr);
    } else {
      setNoArtistFound(true);
      setArtist(undefined);
      setEvents([]);
    }
    setSearching(false);
  };

  const handleEventClick = (eventIndex: number | undefined) => {
    let currEvents = [...events];
    currEvents.map((event, i) => (event.isSelected = i === eventIndex ? !event.isSelected : false));
    if (eventIndex !== undefined) {
      const sEvent = currEvents[eventIndex];
      setSelectedEvent(sEvent.isSelected ? sEvent : undefined);
    } else {
      setSelectedEvent(undefined);
    }
    setEvents(currEvents);
  };

  const handleSetFavorite = (artistId: string) => (eventId: string, isFavorite: boolean) => {
    let favEvent: IEvent | undefined = undefined;
    if (artistId === artist?.id) {
      let currEvents = [...events];
      const eventIndex = currEvents.findIndex(event => event.id === eventId);
      favEvent = currEvents[eventIndex];
      favEvent.isFavorite = !isFavorite;
      setEvents(currEvents);
    }
    let currFavEvents = getLocalFavEvents();
    const favArtistIndex = currFavEvents.findIndex(artistFav => artistFav.artistId === artist!.id);
    if (isFavorite) {
      if (currFavEvents[favArtistIndex].favEvents.length === 1) {
        currFavEvents.splice(favArtistIndex, 1);
      } else {
        const favEventIndex = currFavEvents[favArtistIndex].favEvents.findIndex(
          (event: IEvent) => event.id === eventId
        );
        currFavEvents[favArtistIndex].favEvents.splice(favEventIndex, 1);
      }
    } else if (favEvent) {
      if (favArtistIndex === -1) {
        currFavEvents.push({
          artistId: artist!.id,
          artistName: artist!.name,
          favEvents: [favEvent],
        });
      } else {
        currFavEvents[favArtistIndex].favEvents.push(favEvent);
      }
    }
    setLocalFavEvents(currFavEvents);
  };

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.header}>
        <Grid className={classes.headerTop} />
        <Typography className={classes.headerText}>Who's In Town</Typography>
      </Grid>
      {!artist ? (
        <Grid className={classes.onlySearch}>
          <SearchComponent handleSearch={handleSearch} searching={searching} />
          {noArtistFound && (
            <Grid className={classes.notFound}>
              <Typography className={classes.subHeaderText}>
                No artist by that name. Please try again...
              </Typography>
            </Grid>
          )}
        </Grid>
      ) : matchesMobile ? (
        <MainContainerMobile
          height={height}
          width={width}
          artist={artist}
          events={events}
          selectedEvent={selectedEvent}
          searching={searching}
          handleSearch={handleSearch}
          handleEventClick={handleEventClick}
          handleSetFavorite={handleSetFavorite}
        />
      ) : (
        <MainContainerDesktop
          height={height}
          width={width}
          artist={artist}
          events={events}
          selectedEvent={selectedEvent}
          searching={searching}
          handleSearch={handleSearch}
          handleEventClick={handleEventClick}
          handleSetFavorite={handleSetFavorite}
        />
      )}
      <Grid className={classes.rootRight}>
        <FavoritesArea height={height} handleSetFavorite={handleSetFavorite} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LandingPage);
