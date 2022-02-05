import { FC } from "react";
import { Grid, Typography, withStyles, WithStyles } from "@material-ui/core";
import classNames from "classnames";
import StarIcon from "@material-ui/icons/Star";

import TooltipButton from "components/shared/TooltipButon/TooltipButton";
import { styles } from "./FavoritesArea.styles";

interface IClosedIconButtonProps {
  drawerOpen: boolean;

  onClick: () => void;
}

type IClosedIconButtonCombinedProps = IClosedIconButtonProps & WithStyles<typeof styles>;

const ClosedIconButton: FC<IClosedIconButtonCombinedProps> = ({
  drawerOpen,
  onClick,
  classes,
}: IClosedIconButtonCombinedProps) => {
  return (
    <Grid className={classes.topClosed}>
      <Grid
        className={classNames(
          classes.buttonContainer,
          drawerOpen ? classes.buttonContainerOpen : classes.buttonContainerClosed
        )}
      >
        <TooltipButton
          tooltipTitle={`${drawerOpen ? "Hide" : "Show"} favorite events`}
          placement="left"
          onClick={onClick}
        >
          <StarIcon
            className={classNames(classes.icon, classes.starOn, drawerOpen && classes.iconOpen)}
          />
        </TooltipButton>
        {drawerOpen && <Typography className={classes.headerText}>Favorite Events</Typography>}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ClosedIconButton);
