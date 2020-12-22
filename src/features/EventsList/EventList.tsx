import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './EventList.styles';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Tooltip from '@material-ui/core/Tooltip';
import StarIcon from '@material-ui/icons/Star';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { IEvent } from '../LandingPage';
import SelectedEvent from '../SelectedEvent/SelectedEvent';

interface IEventListProps {
    artistId: string
    events: IEvent[];
    selectedEvent: IEvent | undefined;
    height: number;
    isMobile: boolean;
    handleEventClick: (eventIndex: number | undefined) => void;
    handleSetFavorite: (artistId: string, eventId: string, isFavorite: boolean) => void;
}

type IEventListCombinedProps = IEventListProps & WithStyles<typeof styles>;

const itemTextComponent = (event: IEvent, props: IEventListCombinedProps) => {
    const dateFull = event.eventDate.split('T');
    const date = dateFull[0].split('-');
    return (
        <ListItemText
            classes={{
                primary: classNames(
                    props.classes.listItemText,
                    props.classes.textPrimary,
                    event.isSelected
                        ? props.classes.listItemTextSelectedColor
                        : props.classes.listItemTextNotSelectedColor
                ),
                secondary: classNames(
                    props.classes.listItemText,
                    event.isSelected
                        ? props.classes.listItemTextSelectedColor
                        : props.classes.listItemTextNotSelectedColor
                )
            }}
            primary={`${date[2]}.${date[1]}.${date[0]}`}
            secondary={`${event.venue.city}, ${event.venue.country}`}
        />
    )
}

const starButton = (event: IEvent, props: IEventListCombinedProps) => {
    return (
        <Tooltip
            title={`${event.isFavorite ? 'Remove from' : 'Add to'} favorites`}
            enterDelay={500}
            enterNextDelay={500}
        >
            <IconButton
                className={props.classes.starIcon}
                edge="end"
                onClick={(e) => {
                    props.handleSetFavorite(props.artistId, event.id, event.isFavorite)
                    e.stopPropagation()
                }}
            >
                <StarIcon
                    className={event.isFavorite
                        ? props.classes.starOn
                        : props.classes.starOff
                    }
                />
            </IconButton>
        </Tooltip>
    )
}
const eventItem = (event: IEvent, eventIndex: number, props: IEventListCombinedProps) => {
    return (
        <ListItem key={event.id}
            className={classNames(props.classes.listItem,
                event.isSelected
                    ? props.classes.listItemSelected
                    : props.classes.listItemNotSelected
            )}
        >
            <Grid container className={props.classes.listItemContainer}>
                <Grid item
                    className={props.classes.listItemContainerMain}
                    onClick={() => props.handleEventClick(eventIndex)}
                >
                    <ListItemAvatar>
                        <Avatar className={props.classes.avatar}>
                            <DateRangeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    {itemTextComponent(event, props)}
                    {starButton(event, props)}
                </Grid>
                <Grid item>
                    {props.isMobile && props.selectedEvent && props.selectedEvent.id === event.id
                        ? <SelectedEvent
                            height={props.height}
                            isMobile={true}
                            event={props.selectedEvent}
                            artistName={props.events[0].artistName}
                        />
                        : undefined}
                </Grid>
            </Grid>
        </ListItem>

    )
}
const EventList: React.FunctionComponent<IEventListCombinedProps> = (props: IEventListCombinedProps) => {
    return (
        <List
            className={props.classes.root}
        >
            {props.events.map((event, i) => eventItem(event, i, props))}
        </List>
    );
}

export default withStyles(styles)(EventList);