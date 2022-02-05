import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    artistContainerMobile: {
      position: "fixed",
      overflow: "auto",
      marginTop: "4.5rem",
    },
    eventsContainer: {
      marginTop: "0.5rem",
      position: "fixed",
      overflow: "auto",
    },
    notFound: {
      backgroundColor: "#03A9F4",
      borderRadius: "0.5rem",
      marginTop: "0.5rem",
      padding: "1rem",
    },
    subHeaderText: {
      color: "#ffffff",
      fontSize: "1.5rem",
      fontWeight: 800,
      marginRight: "0.5rem",
    },
  });
