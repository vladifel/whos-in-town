import React, { FC } from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import ArtistCard from "components/ArtistCard/ArtistCard";
import EventList from "components/EventsList/EventList";
import { IArtist, IEvent } from "components/types";

import { styles } from "./ArtistAndEvents.styles";

interface IArtistAndEventsProps {
  width: number;
  height: number;
  isMobile: boolean;
  artist: IArtist;
  selectedEvent: IEvent | undefined;
  events: IEvent[];

  handleEventClick: (eventIndex: number | undefined) => void;
  handleSetFavorite: (artistId: string) => (eventId: string, isFavorite: boolean) => void;
}

type IArtistAndEventsCombinedProps = IArtistAndEventsProps & WithStyles<typeof styles>;

const ArtistAndEvents: FC<IArtistAndEventsCombinedProps> = ({
  height,
  width,
  isMobile,
  artist,
  selectedEvent,
  events,
  handleEventClick,
  handleSetFavorite,
  classes,
}: IArtistAndEventsCombinedProps) => {
  return (
    <Grid
      className={isMobile ? classes.artistContainerMobile : undefined}
      style={{
        height: isMobile ? height - 150 : undefined,
        width: isMobile ? "95%" : "100%",
      }}
    >
      <ArtistCard width={width} isMobile={isMobile} artist={artist} />
      {events.length ? (
        <Grid
          item
          className={isMobile ? undefined : classes.eventsContainer}
          style={{
            height: isMobile ? height - 150 : height - 500,
            width: isMobile ? "100%" : "48%",
          }}
        >
          <EventList
            artistId={artist.id}
            events={events}
            height={height}
            isMobile={isMobile}
            selectedEvent={selectedEvent}
            handleEventClick={handleEventClick}
            handleSetFavorite={handleSetFavorite(artist.id)}
          />
        </Grid>
      ) : (
        <Grid className={classes.notFound}>
          <Typography className={classes.subHeaderText}>
            No upcoming events. Stay tuned...
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default withStyles(styles)(ArtistAndEvents);
