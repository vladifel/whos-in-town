import React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { IEvent } from "components/types";

import NameCard from "./cards/NameCard";
import VenueCard from "./cards/VenueCard";
import TicketsCard from "./cards/TicketsCard";
import LineupCard from "./cards/LineupCard";
import OffersCard from "./cards/OffersCard";
import { styles } from "./SelectedEvent.styles";

interface ISelectedEventProps {
  artistName: string;
  event: IEvent;
  height: number;
  isMobile: boolean;
}

type ISelectedEventCombinedProps = ISelectedEventProps & WithStyles<typeof styles>;

const SelectedEvent: React.FunctionComponent<ISelectedEventCombinedProps> = ({
  height,
  artistName,
  event,
  isMobile,
  classes,
}: ISelectedEventCombinedProps) => {
  const { onSaleDate, lineup, offers } = event;
  return (
    <Grid style={{ height: isMobile ? undefined : height - 100 }} className={classes.root}>
      <NameCard artistName={artistName} event={event} />
      <VenueCard event={event} />
      <TicketsCard onSaleDate={onSaleDate} />
      <LineupCard lineup={lineup} />
      {offers.length > 0 && <OffersCard offers={offers} />}
    </Grid>
  );
};

export default withStyles(styles)(SelectedEvent);
