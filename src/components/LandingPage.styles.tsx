import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    header: {
      width: "100%",
      height: "5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#03A9F4",
      boxShadow: "0 0.25rem 0.3rem 0 rgba(3, 169, 244,1)",
    },
    headerText: {
      margin: "0.5rem 0 0 1rem",
      fontSize: "2rem",
      fontWeight: 900,
      color: "#ffffff",
    },
    headerTop: {
      width: "100%",
      height: "1rem",
      backgroundColor: "#0288D1",
    },
    notFound: {
      backgroundColor: "#03A9F4",
      borderRadius: "0.5rem",
      marginTop: "0.5rem",
      padding: "1rem",
    },
    onlySearch: {
      width: "60%",
      margin: "2rem 0",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "hidden",
      width: "100%",
      height: "100%",
    },
    rootRight: {
      position: "absolute",
      top: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    subHeaderText: {
      color: "#ffffff",
      fontSize: "1.5rem",
      fontWeight: 800,
      marginRight: "0.5rem",
    },
  });
