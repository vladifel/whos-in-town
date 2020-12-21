import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
    createStyles({
        avatar: {
            color: '#c2185b',
            backgroundColor: '#ffffff',
        },
        listItem: {
            cursor: 'pointer',
            marginBottom: '0.3rem',
            borderRadius: '0.5rem',
            "&:active, &:hover, &.Mui-focusVisible": {
                backgroundColor: '#fa5788'
            }
        },
        listItemNotSelected: {
            backgroundColor: '#8c0032',
        },
        listItemSelected: {
            backgroundColor: '#fa5788'
        },
        listItemText: {
            cursor: 'pointer',
            color: '#ffffff',
        },
        textPrimary: {
            fontWeight: 700
        },
        root: {
            width: '48%',
            maxHeight: '60%',
            position: 'fixed',
            overflow: 'auto'
        },
        starIcon: {
            marginRight: '0.2rem'
        },
        starOff: {
            color: '#ffffff',
        },
        starOn: {
            color: '#fce303'
        },
    });