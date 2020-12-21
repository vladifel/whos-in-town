import React, { useEffect, useState } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styles } from './LandingPage.styles';
import SearchComponent from '../helpers/SearchComponent';
import BandCard from './BandCard';
import EventList from './EventList';

interface ILandingPageProps {

}

type ILandingPageCombinedProps = ILandingPageProps & WithStyles<typeof styles>;

const LandingPage: React.FunctionComponent<ILandingPageCombinedProps> = (props: ILandingPageCombinedProps) => {

    return (
        <Grid container className={props.classes.root}>
            <Grid className={props.classes.header}>
                <Grid className={props.classes.headerTop} />
                <Typography
                    className={props.classes.headerText}
                >
                    Who's In Town
                </Typography>
            </Grid>
            <Grid container>
                <SearchComponent />
                <BandCard />
                <EventList />
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(LandingPage);