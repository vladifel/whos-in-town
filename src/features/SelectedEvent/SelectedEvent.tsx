import React, { Fragment } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './SelectedEvent.styles';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { IEvent, IOffer } from '../LandingPage';

interface ISelectedEventProps {
    artistName: string;
    event: IEvent;
    height: number;
    isMobile: boolean;
}

type ISelectedEventCombinedProps = ISelectedEventProps & WithStyles<typeof styles>;

const nameCard = (props: ISelectedEventCombinedProps) => {
    return (
        <Card className={props.classes.darkCard}>
            <CardContent
                className={classNames(
                    props.classes.cardContainer,
                    props.classes.nameCardContentContainer
                )}
            >
                <Link
                    className={props.classes.headerLink}
                    underline='none'
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

const cardText = (textLeft: string, textRight: string, props: ISelectedEventCombinedProps) => {
    return (
        <Fragment>
            <Typography className={props.classes.secondaryText}>
                {textLeft}
            </Typography>
            <Typography className={props.classes.secondaryText}>
                {textRight}
            </Typography>
        </Fragment>
    )
}

const venueCard = (props: ISelectedEventCombinedProps) => {
    const dateFull = props.event.eventDate.split('T');
    const date = dateFull[0].split('-');
    return (
        <Card className={props.classes.darkCard}>
            <Grid container
                className={classNames(
                    props.classes.cardContainer,
                    props.classes.venueCardContentContainer
                )}
            >
                {cardText(`${date[2]}.${date[1]}.${date[0]}`, `${props.event.venue.city}, ${props.event.venue.country}`, props)}
            </Grid>
        </Card>
    )
}

const ticketsCard = (props: ISelectedEventCombinedProps) => {
    let saleDate: string[] = [];
    let saleTime: string[] = [];
    if (props.event.onSaleDate !== '') {
        const saleDateFull = props.event.onSaleDate.split('T');
        saleDate = saleDateFull[0].split('-');
        saleTime = saleDateFull[1].split(':');
    }
    return (
        <Card className={props.classes.darkCard}>
            <Grid
                className={classNames(
                    props.classes.cardContainer,
                    props.classes.venueCardContentContainer
                )}
            >
                {props.event.onSaleDate !== ''
                    ? cardText('Ticket sale start:', `${saleDate[2]}.${saleDate[1]}.${saleDate[0]} ${saleTime[0]}:${saleTime[1]}`, props)
                    : cardText('Ticket sale date to be announced', '', props)
                }
            </Grid>
        </Card>
    )
}

const lineupCard = (props: ISelectedEventCombinedProps) => {
    return (
        <Card className={props.classes.darkCard}>
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

const offerIcon = (index: number, offer: IOffer, props: ISelectedEventCombinedProps) => {
    return (
        <Tooltip
            title='Check out this special offer'
            enterDelay={500}
            enterNextDelay={500}
            key={index}
        >
            <IconButton
                key={index}
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
        </Tooltip>
    )
}

const offersCard = (props: ISelectedEventCombinedProps) => {
    return (
        <Card className={props.classes.darkCard}>
            <Grid container className={props.classes.offersCardSingleLine}>
                <Typography className={props.classes.subHeaderText}>
                    Offers:
                </Typography>
                {props.event.offers.map((offer, i) => offerIcon(i, offer, props))}
            </Grid>
        </Card>
    )
}

const SelectedEvent: React.FunctionComponent<ISelectedEventCombinedProps> = (props: ISelectedEventCombinedProps) => {
    return (
        <Grid
            style={{ height: props.isMobile ? undefined : props.height - 100 }}
            className={props.classes.root}
        >
            {nameCard(props)}
            {venueCard(props)}
            {ticketsCard(props)}
            {lineupCard(props)}
            {props.event.offers.length ? offersCard(props) : undefined}
        </Grid>
    );
}

export default withStyles(styles)(SelectedEvent);