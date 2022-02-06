import { FC } from "react";
import { WithStyles } from "@material-ui/core/styles";
import { Card, Grid, IconButton, Link, Tooltip, Typography, withStyles } from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import { IOffer } from "components/types";

import { styles } from "../SelectedEvent.styles";

interface IOffersCardProps {
  offers: IOffer[];
}

type IOffersCardCombinedProps = IOffersCardProps & WithStyles<typeof styles>;

const OffersCard: FC<IOffersCardCombinedProps> = ({
  offers,
  classes,
}: IOffersCardCombinedProps) => {
  return (
    <Card className={classes.darkCard}>
      <Grid container className={classes.offersCardSingleLine}>
        <Typography className={classes.subHeaderText}>Offers:</Typography>
        {offers.map(({ url }, i) => (
          <Tooltip
            title="Check out this special offer"
            enterDelay={500}
            enterNextDelay={500}
            key={i}
          >
            <IconButton className={classes.offerIcon} disableFocusRipple disableRipple>
              <Link className={classes.offerIcon} href={url} target="_blank">
                <MonetizationOnIcon className={classes.offerIconColor} />
              </Link>
            </IconButton>
          </Tooltip>
        ))}
      </Grid>
    </Card>
  );
};

export default withStyles(styles)(OffersCard);
