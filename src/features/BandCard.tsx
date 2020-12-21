import React, { useEffect, useState } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styles } from './BandCard.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

interface IBandCardProps {

}

type IBandCardCombinedProps = IBandCardProps & WithStyles<typeof styles>;

const BandCard: React.FunctionComponent<IBandCardCombinedProps> = (props: IBandCardCombinedProps) => {

    return (
        <Card className={props.classes.card}>
            <CardMedia
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
            <CardContent className={props.classes.cardContent}>
                <Typography component="h5" variant="h5">
                    Live From Space
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
          </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(BandCard);