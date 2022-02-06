import { FC } from "react";
import classNames from "classnames";
import { format, parseISO } from "date-fns";
import { WithStyles } from "@material-ui/core/styles";
import { Card, Grid, withStyles } from "@material-ui/core";

import CardText from "components/shared/CardText/CardText";
import { IEvent } from "components/types";

import { styles } from "../SelectedEvent.styles";

interface IVenueCardProps {
  event: IEvent;
}

type IVenueCardCombinedProps = IVenueCardProps & WithStyles<typeof styles>;

const VenueCard: FC<IVenueCardCombinedProps> = ({ event, classes }: IVenueCardCombinedProps) => {
  const {
    eventDate,
    venue: { city, country },
  } = event;
  return (
    <Card className={classes.darkCard}>
      <Grid
        container
        className={classNames(classes.cardContainer, classes.venueCardContentContainer)}
      >
        <CardText
          textLeft={format(parseISO(eventDate), "dd.MM.yyyy")}
          textRight={`${city}, ${country}`}
        />
      </Grid>
    </Card>
  );
};

export default withStyles(styles)(VenueCard);
