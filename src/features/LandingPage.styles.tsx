import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
    createStyles({
        eventsContainer: {
            maxHeight: '58%',
            marginTop: '0.5rem'
        },
        header: {
            width: '100%',
            height: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#c2185b',
            boxShadow: '0 0.25rem 0.3rem 0 rgba(194,24,91,1)'
        },
        headerText: {
            margin: '0.5rem 0 0 1rem',
            fontSize: '2rem',
            fontWeight: 900,
            color: '#ffffff'
        },
        headerTop: {
            width: '100%',
            height: '1rem',
            backgroundColor: '#8c0032'
        },
        leftColumn: {
            display: 'flex',
            flexDirection: 'column',
            width: '48%',
            marginRight: '0.5%'
        },
        mainContainer: {
            display: 'flex',
            flexDirection: 'row',
            margin: '1rem 0.5rem 0',
            justifyContent: 'center'
        },
        rightColumn: {
            width: '48%',
            marginLeft: '0.5%'
        },
        root: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden',
            width: '100%',
            height: '100%'
        },
        searchContainer: {
            marginBottom: '1rem'
        }
    });