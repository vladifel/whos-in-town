import { FC } from "react";
import classNames from "classnames";
import { WithStyles } from "@material-ui/core/styles";
import { Card, CardContent, Link, Typography, withStyles } from "@material-ui/core";

import { IEvent } from "components/types";

import { styles } from "../SelectedEvent.styles";

interface INameCardProps {
  artistName: string;
  event: IEvent;
}

type INameCardCombinedProps = INameCardProps & WithStyles<typeof styles>;

const NameCard: FC<INameCardCombinedProps> = ({
  artistName,
  event,
  classes,
}: INameCardCombinedProps) => {
  const {
    description,
    url,
    venue: { name: venueName },
  } = event;
  return (
    <Card className={classes.darkCard}>
      <CardContent className={classNames(classes.cardContainer, classes.nameCardContentContainer)}>
        <Link className={classes.headerLink} underline="none" href={url} target="_blank">
          <Typography className={classes.headerText}>
            {event.description === "" || description.length > 100 ? artistName : description}
          </Typography>
        </Link>
        <Typography className={classes.secondaryText}>{venueName}</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(NameCard);
