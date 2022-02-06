import { FC } from "react";
import classNames from "classnames";
import { format, parseJSON } from "date-fns";
import { WithStyles } from "@material-ui/core/styles";
import { Card, Grid, withStyles } from "@material-ui/core";

import CardText from "components/shared/CardText/CardText";

import { styles } from "../SelectedEvent.styles";

interface ITicketsCardProps {
  onSaleDate: string;
}

type ITicketsCardCombinedProps = ITicketsCardProps & WithStyles<typeof styles>;

const TicketsCard: FC<ITicketsCardCombinedProps> = ({
  onSaleDate,
  classes,
}: ITicketsCardCombinedProps) => {
  return (
    <Card className={classes.darkCard}>
      <Grid className={classNames(classes.cardContainer, classes.venueCardContentContainer)}>
        <CardText
          textLeft={onSaleDate === "" ? "Ticket sale date to be announced" : "Ticket sale start:"}
          textRight={onSaleDate === "" ? "" : format(parseJSON(onSaleDate), "dd.MM.yyyy HH:mm")}
        />
      </Grid>
    </Card>
  );
};

export default withStyles(styles)(TicketsCard);
