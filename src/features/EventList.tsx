import React, { useEffect, useState } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styles } from './EventList.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DateRangeIcon from '@material-ui/icons/DateRange';
import StarIcon from '@material-ui/icons/Star';
import List from '@material-ui/core/List';
import { IEvent } from './LandingPage';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

interface IEventListProps {
    events: IEvent[];
    handleEventClick: (eventIndex: number | undefined) => void;
    handleSetFavorite: (eventId: string, isFavorite: boolean) => void;
}

type IEventListCombinedProps = IEventListProps & WithStyles<typeof styles>;

const eventItem = (event: IEvent, eventIndex: number, props: IEventListCombinedProps) => {
    const dateFull = event.eventDate.split('T');
    const date = dateFull[0].split('-');
    return (
        <ListItem key={event.id}
            className={classNames(props.classes.listItem,
                event.isSelected
                    ? props.classes.listItemSelected
                    : props.classes.listItemNotSelected
            )}
            onClick={() => props.handleEventClick(eventIndex)}
        >
            <ListItemAvatar>
                <Avatar className={props.classes.avatar}>
                    <DateRangeIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                classes={{
                    primary: classNames(props.classes.listItemText, props.classes.textPrimary),
                    secondary: props.classes.listItemText
                }}
                primary={`${date[2]}.${date[1]}.${date[0]}`}
                secondary={`${event.venue.city}, ${event.venue.country}`}
            />
            <ListItemSecondaryAction>
                <IconButton
                    className={props.classes.starIcon}
                    edge="end"
                    onClick={() => props.handleSetFavorite(event.id, event.isFavorite)}
                >
                    <StarIcon
                        className={event.isFavorite
                            ? props.classes.starOn
                            : props.classes.starOff
                        }
                    />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>

    )
}
const EventList: React.FunctionComponent<IEventListCombinedProps> = (props: IEventListCombinedProps) => {

    return (
        <ClickAwayListener onClickAway={() => props.handleEventClick(undefined)}>
            <List className={props.classes.root}        >
                {props.events.map((event, i) => eventItem(event, i, props))}
            </List>
        </ClickAwayListener>
    );
}

export default withStyles(styles)(EventList);