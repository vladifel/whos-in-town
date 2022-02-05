import { FC } from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Link, Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LanguageIcon from "@material-ui/icons/Language";

import { IArtist } from "components/types";
import LinkIconButton from "components/shared/LinkIconButton/LinkIconButton";

import { styles } from "./ArtistCard.styles";

interface IArtistCardProps {
  width: number;
  isMobile: boolean;
  artist: IArtist;
}

type IArtistCardCombinedProps = IArtistCardProps & WithStyles<typeof styles>;

const ArtistCard: FC<IArtistCardCombinedProps> = ({
  width,
  isMobile,
  artist,
  classes,
}: IArtistCardCombinedProps) => {
  const { name, url, fbUrl, imgUrl } = artist;
  return (
    <Card className={classes.card}>
      <CardMedia
        style={{ width: isMobile ? width * 0.6 : width * 0.25 }}
        image={imgUrl}
        title={`${name}_img`}
      />
      <CardContent>
        <Grid className={classes.cardContentContainer}>
          <Grid>
            <Link underline="none" href={url} target="_blank">
              <Typography className={classes.headerText} noWrap={false}>
                {name}
              </Typography>
            </Link>
            <Typography className={classes.infoText}>Artist info...</Typography>
          </Grid>
          <Grid container className={classes.cardIconsContainer}>
            <LinkIconButton url={fbUrl} icon={<FacebookIcon className={classes.cardIconColor} />} />
            <LinkIconButton url={url} icon={<LanguageIcon className={classes.cardIconColor} />} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ArtistCard);
