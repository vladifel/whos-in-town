import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    avatar: {
      color: "#03A9F4",
      backgroundColor: "#ffffff",
    },
    listItem: {
      cursor: "pointer",
      marginBottom: "0.3rem",
      borderRadius: "0.5rem",
      "&:active, &:hover, &.Mui-focusVisible": {
        backgroundColor: "#03A9F4",
      },
    },
    listItemContainer: {
      display: "flex",
      flexDirection: "column",
    },
    listItemContainerMain: {
      display: "flex",
      flexDirection: "row",
    },
    listItemNotSelected: {
      backgroundColor: "#B3E5FC",
    },
    listItemSelected: {
      backgroundColor: "#03A9F4",
    },
    listItemText: {
      cursor: "pointer",
    },
    listItemTextNotSelectedColor: {
      color: "#212121",
    },
    listItemTextSelectedColor: {
      color: "#ffffff",
    },
    starOff: {
      color: "#ffffff",
    },
    starOn: {
      color: "#FFC107",
    },
    textPrimary: {
      fontWeight: 700,
    },
  });
