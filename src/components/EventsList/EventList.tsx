import { FC } from "react";
import { List } from "@material-ui/core";

import EventItem from "./EventItem";
import { IEvent } from "components/types";

interface IEventListProps {
  artistId: string;
  events: IEvent[];
  selectedEvent: IEvent | undefined;
  height: number;
  isMobile: boolean;
  handleEventClick: (eventIndex: number | undefined) => void;
  handleSetFavorite: (eventId: string, isFavorite: boolean) => void;
}

const EventList: FC<IEventListProps> = ({
  events,
  selectedEvent,
  height,
  isMobile,
  handleEventClick,
  handleSetFavorite,
}: IEventListProps) => {
  return (
    <List>
      {events.map((event, i) => {
        const { id, isFavorite } = event;
        return (
          <EventItem
            key={id}
            event={event}
            selectedEvent={selectedEvent}
            height={height}
            hasSelectedEvent={isMobile && selectedEvent != null && selectedEvent.id === id}
            handleEventClick={() => handleEventClick(i)}
            handleSetFavorite={() => handleSetFavorite(id, isFavorite)}
          />
        );
      })}
    </List>
  );
};

export default EventList;
