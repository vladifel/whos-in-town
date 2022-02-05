import { FC } from "react";
import { Grid, IconButton, Link } from "@material-ui/core";

interface ILinkIconButtonProps {
  url: string;
  icon: JSX.Element;
}
const LinkIconButton: FC<ILinkIconButtonProps> = ({ url, icon }: ILinkIconButtonProps) => {
  return (
    <Grid style={{ margin: "0 0.5rem" }}>
      <IconButton disableFocusRipple disableRipple>
        <Link href={url} target="_blank">
          {icon}
        </Link>
      </IconButton>
    </Grid>
  );
};

export default LinkIconButton;
