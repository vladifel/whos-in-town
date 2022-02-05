import { FC } from "react";
import classNames from "classnames";
import { WithStyles } from "@material-ui/core/styles";
import { Avatar, Grid, ListItem, ListItemAvatar, withStyles } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import StarIcon from "@material-ui/icons/Star";

import TooltipButton from "components/shared/TooltipButon/TooltipButton";
import SelectedEvent from "components/SelectedEvent/SelectedEvent";
import { IEvent } from "components/types";

import ItemTextComponent from "../shared/ItemTextComponent/ItemTextComponent";
import { styles } from "./EventList.styles";

interface IEventItemProps {
  key: string;
  event: IEvent;
  selectedEvent: IEvent | undefined;
  height: number;
  hasSelectedEvent: boolean;

  handleEventClick: () => void;
  handleSetFavorite: () => void;
}

type IEventItemCombinedProps = IEventItemProps & WithStyles<typeof styles>;

const EventItem: FC<IEventItemCombinedProps> = ({
  event,
  selectedEvent,
  hasSelectedEvent,
  height,
  handleEventClick,
  handleSetFavorite,
  classes,
}: IEventItemCombinedProps) => {
  const {
    artistName,
    isSelected,
    isFavorite,
    eventDate,
    venue: { city, country },
  } = event;
  return (
    <ListItem
      className={classNames(
        classes.listItem,
        isSelected ? classes.listItemSelected : classes.listItemNotSelected
      )}
    >
      <Grid container className={classes.listItemContainer}>
        <Grid item className={classes.listItemContainerMain} onClick={handleEventClick}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <DateRangeIcon />
            </Avatar>
          </ListItemAvatar>
          <ItemTextComponent
            eventDate={eventDate}
            city={city}
            country={country}
            classes={{
              primary: classNames(
                classes.listItemText,
                classes.textPrimary,
                isSelected
                  ? classes.listItemTextSelectedColor
                  : classes.listItemTextNotSelectedColor
              ),
              secondary: classNames(
                classes.listItemText,
                isSelected
                  ? classes.listItemTextSelectedColor
                  : classes.listItemTextNotSelectedColor
              ),
            }}
          />
          <TooltipButton
            tooltipTitle={`${event.isFavorite ? "Remove from" : "Add to"} favorites`}
            onClick={handleSetFavorite}
          >
            <StarIcon className={isFavorite ? classes.starOn : classes.starOff} />
          </TooltipButton>
        </Grid>
        <Grid item>
          {hasSelectedEvent && (
            <SelectedEvent
              height={height}
              isMobile={true}
              event={selectedEvent!}
              artistName={artistName}
            />
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default withStyles(styles)(EventItem);
