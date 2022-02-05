import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
    createStyles({
        buttonContainer: {
            height: '2.5rem',
            width: 'inherit',
            display: "flex",
            alignItems: 'center',
            zIndex: 10,
            backgroundColor: '#0288D1',
            border: '0.05rem solid rgba(0, 0, 0, 0.3)',
            borderRadius: '3rem 0 0 3rem',
        },
        buttonContainerClosed: {
            width: '3rem',
            display: "flex",
            justifyContent: 'center',
        },
        buttonContainerOpen: {
            width: '14rem',
            display: "flex",
            justifyContent: 'space-around'
        },
        favoritesArea: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'rgba(2, 136, 209,0.9)',
            overflowY: 'auto',
            width: '14.1rem',
            boxShadow: '-0.0625rem -0.0625rem 0.6875rem -0.0625rem rgba(2, 136, 209,0.5)'
        },
        headerText: {
            color: '#ffffff',
            fontWeight: 800
        },
        icon: {
            fontSize: '2rem',
        },
        iconOpen: {
            marginLeft: '0.7rem'
        },
        listItem: {
            width: '95%',
            margin: '0 2.5% 0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: '#03A9F4',
        },
        listItemText: {
            cursor: 'pointer',
            color: '#ffffff',
            display: 'flex',
            flexWrap: 'wrap'
        },
        NoFavorites: {
            padding: '1rem'
        },
        root: {
            height: '100%',
            display: "flex",
            justifyContent: 'flex-end',
            overflow: 'hidden',
        },
        rootClosed: {
            width: '3.1rem',
        },
        rootOpen: {
            width: '14.1rem',
        },
        starIcon: {
            marginRight: '0.2rem',
            padding: '0.5rem'
        },
        starOn: {
            color: '#FFC107'
        },

        textPrimary: {
            fontWeight: 700
        },
        topClosed: {
            width: 'inherit',
            minHeight: '6rem',
            display: "flex",
            alignItems: 'center',
        },
    })