import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    overrides: {
        MuiIconButton: {
            root: {
                padding: '0.3rem',
                "&:active, &:hover, &.Mui-focusVisible": {
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiCardContent: {
            root: {
                display: 'flex',
                flexGrow: 2,
                padding: '1rem',
                "&:last-child": {
                    paddingBottom: '0.5rem',
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