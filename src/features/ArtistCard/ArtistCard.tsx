import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './ArtistCard.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';
import { IArtist } from '../LandingPage';

interface IArtistCardProps {
    width: number;
    isMobile: boolean;
    artist: IArtist;
}

type IArtistCardCombinedProps = IArtistCardProps & WithStyles<typeof styles>;

const linkIcon = (icon: JSX.Element, url: string, props: IArtistCardCombinedProps) => {
    return (
        <Grid className={props.classes.cardIcon}>
            <IconButton
                disableFocusRipple
                disableRipple
            >
                <Link
                    href={url}
                    target="_blank"
                >
                    {icon}
                </Link>
            </IconButton>
        </Grid>
    )
}
const ArtistCard: React.FunctionComponent<IArtistCardCombinedProps> = (props: IArtistCardCombinedProps) => {

    return (
        <Card className={props.classes.card}>
            <CardMedia
                style={{ width: props.isMobile ? props.width * 0.6 : props.width * 0.25 }}
                image={props.artist.imgUrl}
                title={`${props.artist.name}_img`}
            />
            <CardContent>
                <Grid className={props.classes.cardContentContainer}>
                    <Grid>
                        <Link
                            underline='none'
                            href={props.artist.url}
                            target="_blank"
                        >
                            <Typography
                                className={props.classes.headerText}
                                noWrap={false}
                            >
                                {props.artist.name}
                            </Typography>
                        </Link>
                        <Typography className={props.classes.infoText}>
                            Artist info...
                    </Typography>
                    </Grid>
                    <Grid container className={props.classes.cardIconsContainer}>
                        {linkIcon(<FacebookIcon className={props.classes.cardIconColor} />, props.artist.fbUrl, props)}
                        {linkIcon(<LanguageIcon className={props.classes.cardIconColor} />, props.artist.url, props)}
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(ArtistCard);