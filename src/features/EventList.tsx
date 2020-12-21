import React, { useEffect, useState } from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styles } from './BandCard.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import PublicIcon from '@material-ui/icons/Public';
import StarIcon from '@material-ui/icons/Star';
import List from '@material-ui/core/List';

interface IEventListProps {

}

const eventItem = (event: string) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <PublicIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={event}
            //secondary={secondary ? 'Secondary text' : null}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <StarIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

type IEventListCombinedProps = IEventListProps & WithStyles<typeof styles>;

const EventList: React.FunctionComponent<IEventListCombinedProps> = (props: IEventListCombinedProps) => {
    const events = ['event a', 'event b', 'event c', 'event d', 'event e'];
    return (
        <List>
            {events.map(event =>
                eventItem(event)
            )}
        </List>
    );
}

export default withStyles(styles)(EventList);