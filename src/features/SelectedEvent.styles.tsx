import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
    createStyles({
        lineupCard: {
            display: 'flex',
            width: '100%',
            backgroundColor: '#8c0032',
            boxShadow: '0 0 0.3rem 0.1rem rgba(140,0,50,0.7)',
            marginBottom: '1rem'
        },
        lineupCardSingleLine: {
            margin: '1rem',
            display: 'flex',
            alignItems: 'center'
        },
        lineupCardMultiline: {
            display: 'flex',
            flexDirection: 'column',
            margin: '1rem',
        },
        subHeaderText: {
            color: '#ffffff',
            fontSize: '1.5rem',
            fontWeight: 800,
            marginRight: '0.5rem'
        },
        lineupCardContentContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '0 1rem',
        },
        nameCard: {
            display: 'flex',
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
        offersCard: {
            display: 'flex',
            width: '100%',
            backgroundColor: '#c2185b',
            boxShadow: '0 0 0.3rem 0.1rem rgba(194,24,91,0.7)',
            marginBottom: '0.8rem 1rem'
        },
        offersCardSingleLine: {
            margin: '1rem',
            display: 'flex',
            alignItems: 'center',
        },
        offerIcon: {
            margin: '0.2rem 0.5rem 0',
            cursor: 'pointer',
        },
        offerIconColor: {
            color: '#ffffff',
            fontSize: '2rem'
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
            width: '100%',
            backgroundColor: '#c2185b',
            boxShadow: '0 0 0.3rem 0.1rem rgba(194,24,91,0.7)',
            marginBottom: '1rem'
        },
        ticketsCardContentContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '1rem',
            justifyContent: 'space-between'
        },
        venueCard: {
            display: 'flex',
            width: '100%',
            backgroundColor: '#8c0032',
            boxShadow: '0 0 0.3rem 0.1rem rgba(140,0,50,0.7)',
            marginBottom: '1rem'
        },
        venueCardContentContainer: {
            display: 'flex',
            width: '100%',
            margin: '1rem',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    });