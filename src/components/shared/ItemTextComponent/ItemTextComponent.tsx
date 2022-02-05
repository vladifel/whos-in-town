import { FC } from "react";
import { ListItemText } from "@material-ui/core";
import { format, parseISO } from "date-fns";

interface IItemTextComponentProps {
  eventDate: string;
  city: string;
  country: string;
  classes: any;
  artistName?: string;
}

const ItemTextComponent: FC<IItemTextComponentProps> = ({
  eventDate,
  city,
  country,
  classes,
  artistName,
}: IItemTextComponentProps) => {
  const date = format(parseISO(eventDate), "dd.MM.yyyyy");
  const primaryText = artistName ? `${artistName} - ${date}` : date;
  return <ListItemText classes={classes} primary={primaryText} secondary={`${city}, ${country}`} />;
};

export default ItemTextComponent;
