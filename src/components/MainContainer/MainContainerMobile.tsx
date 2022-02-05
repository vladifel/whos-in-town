import { FC } from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import SearchComponent from "components/SearchComponent/SearchComponent";
import ArtistAndEvents from "components/ArtistAndEvents/ArtistAndEvents";
import { IArtist, IEvent } from "components/types";

import { styles } from "./MainContainer.styles";

interface IMainContainerMobileProps {
  width: number;
  height: number;
  artist: IArtist;
  selectedEvent: IEvent | undefined;
  events: IEvent[];

  handleSearch: (search: string) => void;
  handleEventClick: (eventIndex: number | undefined) => void;
  handleSetFavorite: (artistId: string) => (eventId: string, isFavorite: boolean) => void;
}

type IMainContainerMobileCombinedProps = IMainContainerMobileProps & WithStyles<typeof styles>;

const MainContainerMobile: FC<IMainContainerMobileCombinedProps> = ({
  artist,
  height,
  width,
  selectedEvent,
  events,
  handleSearch,
  handleEventClick,
  handleSetFavorite,
  classes,
}: IMainContainerMobileCombinedProps) => {
  return (
    <Grid className={classes.mainContainerMobile}>
      <Grid item className={classes.searchContainer}>
        <SearchComponent handleSearch={handleSearch} />
      </Grid>
      <ArtistAndEvents
        height={height}
        width={width}
        isMobile={true}
        artist={artist}
        selectedEvent={selectedEvent}
        events={events}
        handleEventClick={handleEventClick}
        handleSetFavorite={handleSetFavorite}
      />
    </Grid>
  );
};

export default withStyles(styles)(MainContainerMobile);
