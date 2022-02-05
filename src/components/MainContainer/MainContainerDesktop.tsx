import { FC } from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import SelectedEvent from "components/SelectedEvent/SelectedEvent";
import SearchComponent from "components/SearchComponent/SearchComponent";
import ArtistAndEvents from "components/ArtistAndEvents/ArtistAndEvents";
import { IArtist, IEvent } from "components/types";

import { styles } from "./MainContainer.styles";

interface IMainContainerDesktopProps {
  width: number;
  height: number;
  artist: IArtist;
  selectedEvent: IEvent | undefined;
  events: IEvent[];

  handleSearch: (search: string) => void;
  handleEventClick: (eventIndex: number | undefined) => void;
  handleSetFavorite: (artistId: string) => (eventId: string, isFavorite: boolean) => void;
}

type IMainContainerDesktopCombinedProps = IMainContainerDesktopProps & WithStyles<typeof styles>;

const MainContainerDesktop: FC<IMainContainerDesktopCombinedProps> = ({
  artist,
  height,
  width,
  selectedEvent,
  events,
  handleSearch,
  handleEventClick,
  handleSetFavorite,
  classes,
}: IMainContainerDesktopCombinedProps) => {
  return (
    <Grid container className={classes.mainContainer}>
      <Grid container className={classes.leftColumn}>
        <Grid item className={classes.searchContainer}>
          <SearchComponent handleSearch={handleSearch} />
        </Grid>
        <ArtistAndEvents
          height={height}
          width={width}
          isMobile={false}
          artist={artist}
          selectedEvent={selectedEvent}
          events={events}
          handleEventClick={handleEventClick}
          handleSetFavorite={handleSetFavorite}
        />
      </Grid>
      <Grid className={classes.rightColumn}>
        {selectedEvent && (
          <SelectedEvent
            height={height}
            isMobile={false}
            event={selectedEvent}
            artistName={artist.name}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(MainContainerDesktop);
