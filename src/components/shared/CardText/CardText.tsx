import { FC, Fragment } from "react";
import { createStyles, Typography, WithStyles, withStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    secondaryText: {
      color: "#ffffff",
      fontSize: "1.5rem",
      fontWeight: 700,
    },
  });

interface ICardTextProps {
  textLeft: string;
  textRight: string;
}

type ICardTextCombinedProps = ICardTextProps & WithStyles<typeof styles>;

const CardText: FC<ICardTextCombinedProps> = ({
  textLeft,
  textRight,
  classes,
}: ICardTextCombinedProps) => {
  return (
    <Fragment>
      <Typography className={classes.secondaryText}>{textLeft}</Typography>
      <Typography className={classes.secondaryText}>{textRight}</Typography>
    </Fragment>
  );
};

export default withStyles(styles)(CardText);
