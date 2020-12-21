import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
    createStyles({
        card: {
            display: 'flex',
            height: '20rem',
            width: '100%',
            backgroundColor: '#c2185b',
            boxShadow: '0 0 0.3rem 0.1rem rgba(194,24,91,0.7)'
        },
        cardContentContainer: {
            height: '100%',
            display: 'flex',
            flexGrow: 2,
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        cardIcon: {
            margin: '0 0.5rem',
        },
        cardIconColor: {
            color: '#ffffff',
        },
        cardIconsContainer: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        cardImage: {
            height: '20rem',
            width: '20rem'
        },
        headerText: {
            color: '#ffffff',
            fontSize: '3rem',
            fontWeight: 900
        },
        infoText: {
            color: '#ffffff',
            fontSize: '1rem',
        }
    });