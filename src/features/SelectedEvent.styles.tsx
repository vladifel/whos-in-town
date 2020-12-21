import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
    createStyles({
        nameCard: {
            display: 'flex',
            height: '20rem',
            width: '100%',
            backgroundColor: '#c2185b',
            boxShadow: '0 0 0.3rem 0.1rem rgba(194,24,91,0.7)',
            marginBottom: '1rem'
        },
        nameCardContentContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        headerText: {
            maxWidth: '90%',
            color: '#ffffff',
            fontSize: '3rem',
            fontWeight: 900
        },
        headerLink: {
            maxWidth: '85%',
        },
        secondaryText: {
            color: '#ffffff',
            fontSize: '1.5rem',
            fontWeight: 700
        },
        ticketsCard: {
            display: 'flex',
            height: '5rem',
            width: '100%',
            backgroundColor: '#c2185b',
            boxShadow: '0 0 0.3rem 0.1rem rgba(194,24,91,0.7)',
            marginBottom: '1rem'
        },
        ticketsCardContentContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 1rem',
            justifyContent: 'space-between'
        },
        venueCard: {
            display: 'flex',
            height: '5rem',
            width: '100%',
            backgroundColor: '#8c0032',
            boxShadow: '0 0 0.3rem 0.1rem rgba(140,0,50,0.7)',
            marginBottom: '1rem'
        },
        venueCardContentContainer: {
            display: 'flex',
            width: '100%',
            margin: '0 1rem',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    });