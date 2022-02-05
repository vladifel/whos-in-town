import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    card: {
      display: "flex",
      height: "20rem",
      width: "100%",
      backgroundColor: "#0288D1",
      boxShadow: "0 0 0.3rem 0.1rem rgba(2, 136, 209,0.7)",
    },
    cardContentContainer: {
      height: "100%",
      display: "flex",
      flexGrow: 2,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cardIconColor: {
      cursor: "pointer",
      color: "#ffffff",
    },
    cardIconsContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
    headerText: {
      color: "#ffffff",
      fontSize: "3rem",
      fontWeight: 900,
      cursor: "pointer",
    },
    infoText: {
      color: "#ffffff",
      fontSize: "1rem",
    },
  });
