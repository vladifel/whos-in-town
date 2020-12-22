import React, { Fragment, useState } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './LandingPage.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchComponent from './SearchComponent/SearchComponent';
import ArtistCard from './ArtistCard/ArtistCard';
import EventList from './EventsList/EventList';
import SelectedEvent from './SelectedEvent/SelectedEvent';
import FavoritesArea from './FavoritesArea/FavoritesArea';
import { useWindowSize } from '../helpers/useWindowSize';
import { fetchBand, fetchEvents } from '../helpers/fatchData';
import { getArtistFavEvents, getLocalFavEvents, setLocalFavEvents } from '../helpers/localEvents';

interface ILandingPageProps {

}

interface ILandingPageActions {
    artist: IArtist | undefined;
    setArtist: (artist: IArtist | undefined) => void;
    events: IEvent[];
    setEvents: (artist: IEvent[]) => void;
    selectedEvent: IEvent | undefined;
    setSelectedEvent: (selectedEvent: IEvent | undefined) => void;
    handleSearch: (searchText: string) => void;
    handleEventClick: (eventIndex: number | undefined) => void;
    handleSetFavorite: (artistId: string, eventId: string, isFavorite: boolean) => void;
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
    artistName: string;
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

export interface ILocalFavEvents {
    artistId: string,
    artistName: string,
    favEvents: IEvent[]
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

const searchContainer = (landingPageActions: ILandingPageActions, props: ILandingPageCombinedProps) => {
    return (
        <Grid item className={props.classes.searchContainer}>
            {landingPageActions.artist && <SearchComponent
                handleSearch={landingPageActions.handleSearch}
            />}
        </Grid>
    )
}

const artistAndEvents = (isMobile: boolean, height: number, width: number, landingPageActions: ILandingPageActions, props: ILandingPageCombinedProps) => {
    return (
        <Grid
            className={isMobile ? props.classes.artistContainerMobile : undefined}
            style={{
                height: isMobile ? height - 150 : undefined,
                width: isMobile ? '95%' : '100%'
            }}
        >
            <ArtistCard
                width={width}
                isMobile={isMobile}
                artist={landingPageActions.artist!}
            />
            {landingPageActions.events.length
                ? <Grid item
                    className={isMobile
                        ? undefined
                        : props.classes.eventsContainer}
                    style={{
                        height: isMobile ? height - 150 : height - 500,
                        width: isMobile ? '100%' : '48%'
                    }}
                >
                    <EventList
                        artistId={landingPageActions.artist!.id}
                        events={landingPageActions.events}
                        height={height}
                        isMobile={isMobile}
                        selectedEvent={landingPageActions.selectedEvent}
                        handleEventClick={landingPageActions.handleEventClick}
                        handleSetFavorite={landingPageActions.handleSetFavorite}
                    />
                </Grid>
                : <Grid className={props.classes.notFound}>
                    <Typography className={props.classes.subHeaderText}>
                        No upcoming events. Stay tuned...
                        </Typography>
                </Grid>}
        </Grid>
    )
}

const mainContainerDesktop = (landingPageActions: ILandingPageActions, height: number, width: number, props: ILandingPageCombinedProps) => {
    return (
        <Grid container className={props.classes.mainContainer}>
            <Grid container className={props.classes.leftColumn}>
                {searchContainer(landingPageActions, props)}
                {landingPageActions.artist
                    ? artistAndEvents(false, height, width, landingPageActions, props)
                    : undefined}
            </Grid>
            <Grid className={props.classes.rightColumn}>
                {landingPageActions.selectedEvent && landingPageActions.artist
                    ? <SelectedEvent
                        height={height}
                        isMobile={false}
                        event={landingPageActions.selectedEvent}
                        artistName={landingPageActions.artist.name}
                    />
                    : undefined}
            </Grid>
        </Grid>
    )
}

const mainContainerMobile = (landingPageActions: ILandingPageActions, height: number, width: number, props: ILandingPageCombinedProps) => {
    return (
        <Grid className={props.classes.mainContainerMobile}>
            {searchContainer(landingPageActions, props)}
            {landingPageActions.artist
                ? artistAndEvents(true, height, width, landingPageActions, props)
                : undefined}
        </Grid>
    )
}

const LandingPage: React.FunctionComponent<ILandingPageCombinedProps> = (props: ILandingPageCombinedProps) => {
    const [artist, setArtist] = useState<IArtist | undefined>(undefined);
    const [events, setEvents] = useState<IEvent[]>([]);
    const [noArtistFound, setNoArtistFound] = useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] = useState<IEvent | undefined>(undefined);
    const { width, height } = useWindowSize();
    const matchesMobile = useMediaQuery('(max-width:700px)');

    const handleSearch = async (searchText: string) => {
        setSelectedEvent(undefined)
        const bandNameUpdated = bandNameUpdate(searchText);
        const dataP = fetchBand(bandNameUpdated);
        const artistData = await dataP.then(res => res);
        if (artistData !== '') {
            setNoArtistFound(false);
            const eventDataP = fetchEvents(bandNameUpdated);
            const artistEventData = await eventDataP.then(res => res);
            const artistFavEvents = getArtistFavEvents(artistData.id);

            const artistObj: IArtist = {
                id: artistData.id,
                name: artistData.name,
                fbUrl: artistData.facebook_page_url,
                url: artistData.url,
                imgUrl: artistData.image_url
            };

            const eventsArr: IEvent[] = [];
            artistEventData.forEach((event: any) => {
                let isFavorite = false;
                artistFavEvents.length && (isFavorite = artistFavEvents.some(favEvent => favEvent.id === event.id))
                eventsArr.push({
                    id: event.id,
                    artistName: artistData.name,
                    description: event.description,
                    eventDate: event.datetime,
                    onSaleDate: event.on_sale_datetime,
                    lineup: event.lineup,
                    offers: event.offers,
                    url: event.url,
                    venue: event.venue,
                    isSelected: false,
                    isFavorite: isFavorite
                });
            })

            setArtist(artistObj);
            setEvents(eventsArr);
        } else {
            setNoArtistFound(true);
            setArtist(undefined);
            setEvents([]);
        }
    }

    const handleEventClick = (eventIndex: number | undefined) => {
        let currEvents = [...events];
        currEvents.map((event, i) =>
            event.isSelected = i === eventIndex ? !event.isSelected : false
        );
        if (eventIndex !== undefined) {
            const sEvent = currEvents[eventIndex];
            setSelectedEvent(sEvent.isSelected ? sEvent : undefined);
        } else {
            setSelectedEvent(undefined);
        }
        setEvents(currEvents);
    }

    const handleSetFavorite = (artistId: string, eventId: string, isFavorite: boolean) => {
        let favEvent: IEvent | undefined = undefined;
        if (artistId === artist?.id) {
            let currEvents = [...events];
            const eventIndex = currEvents.findIndex(event => event.id === eventId);
            favEvent = currEvents[eventIndex];
            favEvent.isFavorite = !isFavorite;
            setEvents(currEvents);
        }
        let currFavEvents = getLocalFavEvents();
        const favArtistIndex = currFavEvents.findIndex(artistFav => artistFav.artistId === artist!.id);
        if (isFavorite) {
            if (currFavEvents[favArtistIndex].favEvents.length === 1) {
                currFavEvents.splice(favArtistIndex, 1);
            } else {
                const favEventIndex = currFavEvents[favArtistIndex].favEvents.findIndex(event => event.id === eventId);
                currFavEvents[favArtistIndex].favEvents.splice(favEventIndex, 1);

            }
        } else if (favEvent) {
            if (favArtistIndex === -1) {
                currFavEvents.push({
                    artistId: artist!.id,
                    artistName: artist!.name,
                    favEvents: [favEvent]
                });
            } else {
                currFavEvents[favArtistIndex].favEvents.push(favEvent);
            }
        }
        setLocalFavEvents(currFavEvents);
    }

    const landingPageActions: ILandingPageActions = {
        artist: artist,
        setArtist: setArtist,
        events: events,
        setEvents: setEvents,
        selectedEvent: selectedEvent,
        setSelectedEvent: setSelectedEvent,
        handleSearch: handleSearch,
        handleEventClick: handleEventClick,
        handleSetFavorite: handleSetFavorite
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
            {!artist
                ? <Grid className={props.classes.onlySearch}>
                    <SearchComponent
                        handleSearch={landingPageActions.handleSearch}
                    />
                    {noArtistFound &&
                        <Grid className={props.classes.notFound}>
                            <Typography className={props.classes.subHeaderText}>
                                No artist by that name. Please try again...
                        </Typography>
                        </Grid>}
                </Grid>
                : matchesMobile
                    ? mainContainerMobile(landingPageActions, height, width, props)
                    : mainContainerDesktop(landingPageActions, height, width, props)
            }
            <Grid className={props.classes.rootRight}>
                <FavoritesArea
                    height={height}
                    handleSetFavorite={handleSetFavorite}
                />
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(LandingPage);