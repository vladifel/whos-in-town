import React, { useEffect, useState } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styles } from './LandingPage.styles';
import SearchComponent from '../helpers/SearchComponent';
import ArtistCard from './ArtistCard';
import EventList from './EventList';
import axios from 'axios';
import SelectedEvent from './SelectedEvent';

interface ILandingPageProps {

}

export interface IArtist {
    id: string;
    name: string;
    fbUrl: string;
    url: string;
    imgUrl: string
}

export interface IEvent {
    id: string;
    description: string;
    eventDate: string;
    onSaleDate: string;
    lineup: string[];
    offers: IOffer[];
    url: string;
    venue: IVenue;
    isSelected: boolean;
    isFavorite: boolean;
}

export interface IVenue {
    city: string;
    country: string;
    location: string;
    name: string;
    region: string;
    latitude: string;
    longitude: string;
}

export interface IOffer {
    status: string;
    type: string;
    url: string;
}

type ILandingPageCombinedProps = ILandingPageProps & WithStyles<typeof styles>;

const bandNameUpdate = (bandName: string): string => {
    // replacing special characters as per API description
    let bandArr = bandName.split('');
    const slashIndex = bandArr.findIndex(char => char === '/');
    slashIndex !== -1 && (bandArr[slashIndex] = '%252F');
    const qmIndex = bandArr.findIndex(char => char === '?');
    qmIndex !== -1 && (bandArr[qmIndex] = '%253F');
    const starIndex = bandArr.findIndex(char => char === '*');
    starIndex !== -1 && (bandArr[starIndex] = '%252A');
    const quoteIndex = bandArr.findIndex(char => char === '"');
    quoteIndex !== -1 && (bandArr[quoteIndex] = '%27C');
    const bandNameUpdated = bandArr.join('');
    return bandNameUpdated;
}

const fetchBand = async (bandName: string) => {
    const options: any = {
        method: 'GET',
        url: `https://rest.bandsintown.com/artists/${bandName}?app_id=123`
    };

    return await axios.request(options)
        .then(response => response.data)
        .catch(error => console.error(error));
}

const fetchEvents = async (bandName: string) => {
    const options: any = {
        method: 'GET',
        url: `https://rest.bandsintown.com/artists/${bandName}/events?app_id=123&date=upcoming`
    };

    return await axios.request(options)
        .then(response => response.data)
        .catch(error => console.error(error));
}

const LandingPage: React.FunctionComponent<ILandingPageCombinedProps> = (props: ILandingPageCombinedProps) => {
    const [artist, setArtist] = useState<IArtist | undefined>(undefined);
    const [events, setEvents] = useState<IEvent[]>([]);
    const [favEvents, setFavEvents] = useState<IEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<IEvent | undefined>(undefined);

    const handleSearch = async (searchText: string) => {
        setSelectedEvent(undefined)
        const bandNameUpdated = bandNameUpdate(searchText);
        const dataP = fetchBand(bandNameUpdated);
        const eventDataP = fetchEvents(bandNameUpdated);
        const artistData = await dataP.then(res => res);
        const artistEventData = await eventDataP.then(res => res);

        const artistObj: IArtist = {
            id: artistData.id,
            name: artistData.name,
            fbUrl: artistData.facebook_page_url,
            url: artistData.url,
            imgUrl: artistData.image_url

        };

        const eventsArr: IEvent[] = [];
        artistEventData.forEach((event: any) => {
            eventsArr.push({
                id: event.id,
                description: event.description,
                eventDate: event.datetime,
                onSaleDate: event.on_sale_datetime,
                lineup: event.lineup,
                offers: event.offers,
                url: event.url,
                venue: event.venue,
                isSelected: false,
                isFavorite: false
            });
        })

        setArtist(artistObj);
        setEvents(eventsArr);
        console.log(artistData)
        console.log(artistEventData)
    }

    const handleEventClick = (eventIndex: number | undefined) => {
        let currEvents = [...events];
        currEvents.map((event, i) =>
            event.isSelected = i === eventIndex ? !event.isSelected : false
        );
        if (eventIndex !== undefined) {
            const sEvent = currEvents[eventIndex];
            setSelectedEvent(sEvent.isSelected ? sEvent : undefined);
            console.log(sEvent)
        } else {
            setSelectedEvent(undefined);
        }
        setEvents(currEvents);
    }

    const handleSetFavorite = (eventId: string, isFavorite: boolean) => {
        let currFavEvents = [...favEvents];
        let currEvents = [...events];
        const eventIndex = currEvents.findIndex(event => event.id === eventId);
        const favEvent = currEvents[eventIndex];
        favEvent.isFavorite = !isFavorite;
        setEvents(currEvents);

        if (isFavorite) {
            const favEventIndex = currFavEvents.findIndex(event => event.id === eventId);
            currFavEvents.splice(favEventIndex, 1);
        } else {
            currFavEvents.push(favEvent);
        }
        setFavEvents(currFavEvents);
        console.log(currFavEvents);
    }

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
            <Grid container className={props.classes.mainContainer}>
                <Grid container
                    className={props.classes.leftColumn}
                >
                    <Grid item className={props.classes.searchContainer}>
                        <SearchComponent
                            handleSearch={handleSearch}
                        />
                    </Grid>
                    <Grid item>
                        {artist
                            ? <ArtistCard
                                artist={artist}
                            />
                            : undefined}
                    </Grid>
                    <Grid item className={props.classes.eventsContainer}>
                        <EventList
                            events={events}
                            handleEventClick={handleEventClick}
                            handleSetFavorite={handleSetFavorite}
                        />
                    </Grid>
                </Grid>
                <Grid className={props.classes.rightColumn}>
                    {selectedEvent
                        ?
                        <SelectedEvent
                            event={selectedEvent}
                            artistName={artist!.name}
                        />
                        : undefined}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(LandingPage);