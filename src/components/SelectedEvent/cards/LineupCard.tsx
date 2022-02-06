import { FC } from "react";
import { WithStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography, withStyles } from "@material-ui/core";

import { styles } from "../SelectedEvent.styles";

interface ILineupCardProps {
  lineup: string[];
}

type ILineupCardCombinedProps = ILineupCardProps & WithStyles<typeof styles>;

const LineupCard: FC<ILineupCardCombinedProps> = ({
  lineup,
  classes,
}: ILineupCardCombinedProps) => {
  return (
    <Card className={classes.darkCard}>
      {lineup.length === 1 ? (
        <Grid container className={classes.lineupCardSingleLine}>
          <Typography className={classes.subHeaderText}>Lineup:</Typography>
          <Typography className={classes.secondaryText}>{` ${lineup}`}</Typography>
        </Grid>
      ) : (
        <Grid container className={classes.lineupCardMultiline}>
          <Typography className={classes.subHeaderText}>Lineup:</Typography>
          <Typography className={classes.secondaryText}>
            {lineup.map((name, i) => (i !== lineup.length - 1 ? `${name}, ` : name))}
          </Typography>
        </Grid>
      )}
    </Card>
  );
};

export default withStyles(styles)(LineupCard);
