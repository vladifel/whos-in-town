import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    leftColumn: {
      display: "flex",
      flexDirection: "column",
      width: "48%",
      marginRight: "0.5%",
    },
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      margin: "1rem 0.5rem 0",
      justifyContent: "center",
    },
    mainContainerMobile: {
      display: "flex",
      margin: "1rem 0.5rem 0",
      flexDirection: "column",
      width: "95%",
    },
    rightColumn: {
      width: "48%",
      marginLeft: "0.5%",
    },
    searchContainer: {
      marginBottom: "1rem",
    },
  });
