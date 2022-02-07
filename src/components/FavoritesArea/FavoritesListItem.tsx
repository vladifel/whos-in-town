import { FC } from "react";
import { Link, ListItem, ListItemSecondaryAction, withStyles, WithStyles } from "@material-ui/core";
import classNames from "classnames";
import StarIcon from "@material-ui/icons/Star";

import TooltipButton from "components/shared/TooltipButon/TooltipButton";
import { styles } from "./FavoritesArea.styles";
import ItemTextComponent from "components/shared/ItemTextComponent/ItemTextComponent";
import { IEvent } from "components/types";

interface IFavoritesListItemProps {
  key: string;
  artistName: string;
  artistId: string;
  event: IEvent;

  handleSetFavorite: (artistId: string) => (eventId: string, isFavorite: boolean) => void;
}

type IFavoritesListItemCombinedProps = IFavoritesListItemProps & WithStyles<typeof styles>;

const FavoritesListItem: FC<IFavoritesListItemCombinedProps> = ({
  artistName,
  artistId,
  event,
  handleSetFavorite,
  classes,
}: IFavoritesListItemCombinedProps) => {
  const {
    id,
    eventDate,
    venue: { city, country },
    url,
    isFavorite,
  } = event;
  return (
    <ListItem key={id} className={classes.listItem}>
      <Link underline="none" href={url} target="_blank">
        <ItemTextComponent
          eventDate={eventDate}
          city={city}
          country={country}
          artistName={artistName}
          classes={{
            primary: classNames(classes.textPrimary, classes.listItemText),
            secondary: classes.listItemText,
          }}
        />
      </Link>
      <ListItemSecondaryAction>
        <TooltipButton
          tooltipTitle="Remove from favorites"
          onClick={() => handleSetFavorite(artistId)(id, isFavorite)}
        >
          <StarIcon className={classes.starOn} />
        </TooltipButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default withStyles(styles)(FavoritesListItem);
