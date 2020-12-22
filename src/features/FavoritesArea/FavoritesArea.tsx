import React, { useState } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './FavoritesArea.styles';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import StarIcon from '@material-ui/icons/Star';
import { getLocalFavEvents } from '../../helpers/localEvents';
import { IEvent } from '../LandingPage';

interface IDrawerActions {
    drawerOpen: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
}

interface IFavoritesAreaProps {
    height: number;
    handleSetFavorite: (artistId: string, eventId: string, isFavorite: boolean) => void;
}

type IFavoritesAreaCombinedProps = IFavoritesAreaProps & WithStyles<typeof styles>;

const drawerStarButton = (drawerActions: IDrawerActions, props: IFavoritesAreaCombinedProps) => {
    return (
        <Tooltip
            title={`${drawerActions.drawerOpen ? 'Hide' : 'Show'} favorite events`}
            placement='left'
            enterDelay={500}
            enterNextDelay={500}
        >
            <IconButton
                onClick={drawerActions.drawerOpen
                    ? drawerActions.handleDrawerClose
                    : drawerActions.handleDrawerOpen
                }
            >
                <StarIcon
                    className={classNames(
                        props.classes.icon,
                        props.classes.starOn,
                        drawerActions.drawerOpen && props.classes.iconOpen)
                    }
                />
            </IconButton>
        </Tooltip>
    )
}
const closedIconButton = (drawerActions: IDrawerActions, props: IFavoritesAreaCombinedProps) => {
    return (
        <Grid className={props.classes.topClosed}>
            <Grid className={classNames(
                props.classes.buttonContainer,
                drawerActions.drawerOpen
                    ? props.classes.buttonContainerOpen
                    : props.classes.buttonContainerClosed
            )}>
                {drawerStarButton(drawerActions, props)}
                {drawerActions.drawerOpen
                    ? <Typography
                        className={props.classes.headerText}
                    >
                        Favorite Events
                        </Typography>
                    : undefined}
            </Grid>
        </Grid>
    )
}

const itemText = (artistName: string, event: IEvent, props: IFavoritesAreaCombinedProps) => {
    const dateFull = event.eventDate.split('T');
    const date = dateFull[0].split('-');
    return (
        <Link
            underline='none'
            href={event.url}
            target="_blank"
        >
            <ListItemText
                classes={{
                    primary: classNames(
                        props.classes.textPrimary,
                        props.classes.listItemText
                    ),
                    secondary: classNames(
                        props.classes.listItemText
                    )
                }}
                primary={`${artistName} - ${date[2]}.${date[1]}.${date[0]}`}
                secondary={`${event.venue.city}, ${event.venue.country}`}
            />
        </Link>
    )
}

const starIconButton = (artistId: string, event: IEvent, props: IFavoritesAreaCombinedProps) => {
    return (
        <ListItemSecondaryAction>
            <Tooltip
                title='Remove from favorites'
                enterDelay={500}
                enterNextDelay={500}
            >
                <IconButton
                    className={props.classes.starIcon}
                    edge="end"
                    onClick={() => props.handleSetFavorite(artistId, event.id, event.isFavorite)}
                >
                    <StarIcon className={props.classes.starOn} />
                </IconButton>
            </Tooltip>
        </ListItemSecondaryAction>
    )
}

const favoriteListItem = (artistName: string, artistId: string, event: IEvent, props: IFavoritesAreaCombinedProps) => {
    return (
        <ListItem key={event.id}
            className={props.classes.listItem}
        >
            {itemText(artistName, event, props)}
            {starIconButton(artistId, event, props)}
        </ListItem>
    )
}

const FavoritesAreaComponent = (drawerActions: IDrawerActions, props: IFavoritesAreaCombinedProps) => {
    const dataToShow = getLocalFavEvents();
    return (
        <Grid>
            {drawerActions.drawerOpen ?
                <Grid container
                    style={{ height: props.height - 97 }}
                    className={props.classes.favoritesArea}
                >
                    <List>
                        {dataToShow.length
                            ?
                            dataToShow.map(artist => artist.favEvents.map(event => favoriteListItem(artist.artistName, artist.artistId, event, props)))
                            : <Grid className={props.classes.listItem}>
                                <Typography className={classNames(props.classes.headerText, props.classes.NoFavorites)}>
                                    No favorites yet
                        </Typography>
                            </Grid>
                        }
                    </List>
                </Grid>
                : undefined}
        </Grid>

    )
}

const FavoritesArea: React.FunctionComponent<IFavoritesAreaCombinedProps> = (props: IFavoritesAreaCombinedProps) => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    }

    const handleDrawerClosed = () => {
        setDrawerOpen(false);
    }

    const drawerActions: IDrawerActions = {
        drawerOpen: drawerOpen,
        handleDrawerOpen: handleDrawerOpen,
        handleDrawerClose: handleDrawerClosed,
    }

    return (
        <Grid container className={classNames(
            props.classes.root,
            drawerActions.drawerOpen
                ? props.classes.rootOpen
                : props.classes.rootClosed
        )}>
            {closedIconButton(drawerActions, props)}
            {FavoritesAreaComponent(drawerActions, props)}
        </Grid>
    );
}

export default withStyles(styles)(FavoritesArea);