import React, { Fragment, useEffect, useState } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styles } from './SelectedEvent.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FacebookIcon from '@material-ui/icons/Facebook';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { IEvent } from './LandingPage';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

interface ISelectedEventProps {
    artistName: string;
    event: IEvent;
}

type ISelectedEventCombinedProps = ISelectedEventProps & WithStyles<typeof styles>;

const nameCard = (props: ISelectedEventCombinedProps) => {
    return (
        <Card className={props.classes.nameCard}>
            <CardContent
                className={props.classes.nameCardContentContainer}
            >
                <Link
                    className={props.classes.headerLink}
                    href={props.event.url}
                    target="_blank"
                >
                    <Typography
                        className={props.classes.headerText}
                    >
                        {props.event.description === '' || props.event.description.length > 100
                            ? props.artistName
                            : props.event.description}
                    </Typography>
                </Link>
                <Typography className={props.classes.secondaryText}>
                    {props.event.venue.name}
                </Typography>
            </CardContent>
        </Card>
    )
}

const ticketsCard = (props: ISelectedEventCombinedProps) => {
    const dateFull = props.event.eventDate.split('T');
    const date = dateFull[0].split('-');
    return (
        <Card className={props.classes.venueCard}>
            <Grid className={props.classes.venueCardContentContainer}>
                <Typography className={props.classes.secondaryText}>
                    {`${date[2]}.${date[1]}.${date[0]}`}
                </Typography>
                <Typography className={props.classes.secondaryText}>
                    {`${props.event.venue.city}, ${props.event.venue.country}`}
                </Typography>
            </Grid>
        </Card>
    )
}

const venueCard = (props: ISelectedEventCombinedProps) => {
    let saleDate: string[] = [];
    let saleTime: string[] = [];
    if (props.event.onSaleDate !== '') {
        const saleDateFull = props.event.onSaleDate.split('T');
        saleDate = saleDateFull[0].split('-');
        saleTime = saleDateFull[1].split(':');
    }
    return (
        <Card className={props.classes.ticketsCard}>
            <Grid className={props.classes.ticketsCardContentContainer}>
                <Typography className={props.classes.secondaryText}>
                    {props.event.onSaleDate !== ''
                        ? `Tickets go on sale on: ${saleDate[2]}.${saleDate[1]}.${saleDate[0]} ${saleTime[0]}:${saleTime[1]}`
                        : 'Ticket sale date to be announced'
                    }
                </Typography>
            </Grid>
        </Card>
    )
}

const lineupCard = (props: ISelectedEventCombinedProps) => {
    return (
        <Card className={props.classes.lineupCard}>
            {props.event.lineup.length === 1
                ? <Grid container className={props.classes.lineupCardSingleLine}>
                    <Typography className={props.classes.subHeaderText}>
                        Lineup:
                    </Typography>
                    <Typography className={props.classes.secondaryText}>
                        {` ${props.event.lineup}`}
                    </Typography>
                </Grid>
                : <Grid container className={props.classes.lineupCardMultiline}>
                    <Typography className={props.classes.subHeaderText}>
                        Lineup:
                    </Typography>
                    <Typography className={props.classes.secondaryText}>
                        {props.event.lineup.map((name, i) =>
                            i !== props.event.lineup.length - 1
                                ? `${name}, `
                                : name
                        )}
                    </Typography>
                </Grid>
            }
        </Card>
    )
}

const offersCard = (props: ISelectedEventCombinedProps) => {
    return (
        <Card className={props.classes.offersCard}>
            <Grid container className={props.classes.offersCardSingleLine}>
                <Typography className={props.classes.subHeaderText}>
                    Offers:
                </Typography>
                {props.event.offers.map((offer, i) =>
                    <IconButton
                        key={i}
                        className={props.classes.offerIcon}
                        disableFocusRipple
                        disableRipple
                    >
                        <Link
                            className={props.classes.offerIcon}
                            href={offer.url}
                            target="_blank"
                        >
                            <MonetizationOnIcon className={props.classes.offerIconColor} />
                        </Link>
                    </IconButton>
                )}
            </Grid>
        </Card>
    )
}

const SelectedEvent: React.FunctionComponent<ISelectedEventCombinedProps> = (props: ISelectedEventCombinedProps) => {
    return (
        <Fragment>
            {nameCard(props)}
            {ticketsCard(props)}
            {venueCard(props)}
            {lineupCard(props)}
            {props.event.offers.length ? offersCard(props) : undefined}
        </Fragment>
    );
}

export default withStyles(styles)(SelectedEvent);