import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
    createStyles({
        cardContainer: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        darkCard: {
            display: 'flex',
            width: '100%',
            backgroundColor: '#0288D1',
            boxShadow: '0 0 0.3rem 0.1rem rgba(2, 136, 209,0.7)',
            marginBottom: '1rem',
        },
        headerText: {
            maxWidth: '90%',
            color: '#ffffff',
            fontSize: '3rem',
            fontWeight: 900,
            cursor: 'pointer',
        },
        headerLink: {
            maxWidth: '85%',
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
        nameCardContentContainer: {
            flexDirection: 'column',
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
        root: {
            overflow: 'auto'
        },
        secondaryText: {
            color: '#ffffff',
            fontSize: '1.5rem',
            fontWeight: 700
        },
        subHeaderText: {
            color: '#ffffff',
            fontSize: '1.5rem',
            fontWeight: 800,
            marginRight: '0.5rem'
        },
        venueCardContentContainer: {
            width: '100%',
            margin: '1rem',
            flexDirection: 'row',
            alignItems: 'center',
        },
    });