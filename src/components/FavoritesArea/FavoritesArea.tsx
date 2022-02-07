import React, { useState } from "react";
import classNames from "classnames";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Typography, List } from "@material-ui/core";

import { getLocalFavEvents } from "helpers/localEvents";

import ClosedIconButton from "./ClosedIconButton";
import FavoritesListItem from "./FavoritesListItem";
import { styles } from "./FavoritesArea.styles";

interface IFavoritesAreaProps {
  height: number;

  handleSetFavorite: (artistId: string) => (eventId: string, isFavorite: boolean) => void;
}

type IFavoritesAreaCombinedProps = IFavoritesAreaProps & WithStyles<typeof styles>;

const FavoritesArea: React.FunctionComponent<IFavoritesAreaCombinedProps> = ({
  height,
  handleSetFavorite,
  classes,
}: IFavoritesAreaCombinedProps) => {
  const dataToShow = getLocalFavEvents();

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawer = () => {
    setDrawerOpen(currentState => !currentState);
  };

  return (
    <Grid
      container
      className={classNames(classes.root, drawerOpen ? classes.rootOpen : classes.rootClosed)}
    >
      <ClosedIconButton drawerOpen={drawerOpen} onClick={handleDrawer} />
      <Grid>
        {drawerOpen && (
          <Grid container style={{ height: height - 97 }} className={classes.favoritesArea}>
            <List>
              {dataToShow.length ? (
                dataToShow.map(artist =>
                  artist.favEvents.map(event => (
                    <FavoritesListItem
                      key={event.id}
                      artistName={artist.artistName}
                      artistId={artist.artistId}
                      event={event}
                      handleSetFavorite={handleSetFavorite}
                    />
                  ))
                )
              ) : (
                <Grid className={classes.listItem}>
                  <Typography className={classNames(classes.headerText, classes.NoFavorites)}>
                    No favorites yet
                  </Typography>
                </Grid>
              )}
            </List>
          </Grid>
        )}
      </Grid>{" "}
    </Grid>
  );
};

export default withStyles(styles)(FavoritesArea);
