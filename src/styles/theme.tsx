import {
    createMuiTheme
} from '@material-ui/core/styles';

export default createMuiTheme({
    typography: {
        //fontFamily: ['Impact', 'Charcoal', 'sans- serif'],
        //textAlign: 'left',
        //fontSize: '20px'
    },
    palette: {
        primary: {
            main: '#1976D2'
        },
        secondary: {
            main: '#FFC107'
        },
    },
    overrides: {
        MuiIconButton: {
            root: {
                color: '#FFC107',
                padding: '0.3rem',
                "&:active, &:hover, &.Mui-focusVisible": {
                    color: 'rgba(255,133,7,1)',
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiCardContent: {
            root: {
                padding: '1rem',
                "&:last-child": {
                    paddingBottom: '0.5rem',
                    width: 'initial'
                }
            }
        },



        MuiButtonBase: {
            root: {
                minWidth: 0,
                width: '1rem',
            }
        },
        MuiCheckbox: {
            colorSecondary: {
                color: '#FFC107',
                "&:active, &:hover, &.Mui-focusVisible": {
                    color: 'rgba(255,133,7,1)',
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiListItemIcon: {
            root: {
                minWidth: 0,
                width: '1rem'
            }
        },
        MuiTooltip: {
            tooltip: {
                fontSize: '0.8rem',
                color: '#252525',
                backgroundColor: '#ffffff',
                boxShadow: '0px 1px 4px 0 rgba(0, 0, 0, 0.5)'
            }
        },
        MuiTypography: {
            root: {
                cursor: 'default'
            }
        },
    }
});