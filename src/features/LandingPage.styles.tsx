import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
    createStyles({
        header: {
            width: '100%',
            height: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: '#c2185b',
            boxShadow: '0 0.25rem 0.3rem 0 rgba(194,24,91,1)'
        },
        headerText: {
            marginLeft: '2rem',
            fontSize: '2rem',
            fontWeight: 900,
            color: '#ffffff'
        },
        headerTop: {
            width: '100%',
            height: '1rem',
            backgroundColor: '#8c0032'
        },
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
    });