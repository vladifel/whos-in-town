import React, { Fragment, useEffect, useRef, useState } from 'react';
import { WithStyles, withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
const styles = () =>
    createStyles({
        clearIcon: {
            marginRight: '0.5rem'
        },
        icon: {
            color: '#c2185b',
            fontSize: '2rem',
            "&:active, &:hover, &.Mui-focusVisible": {
                color: '#fa5788',
                backgroundColor: 'transparent',
            }
        },
        root: {
            boxShadow: '0 0 0.3rem 0.1rem rgba(194,24,91,0.7)'
        }
    });

const useOutlinedInputStyles = makeStyles(() => ({
    root: {
        "&:hover $notchedOutline": {
            borderColor: "#c2185b"
        },
        "&$focused $notchedOutline": {
            borderColor: "#c2185b"
        }
    },
    focused: {},
    notchedOutline: {}
}));
interface ISearchComponentProps {
    handleSearch: (searchText: string) => void;
}

type ISearchComponentCombinedProps = ISearchComponentProps & WithStyles<typeof styles>;

const SearchComponent: React.FunctionComponent<ISearchComponentCombinedProps> = (props: ISearchComponentCombinedProps) => {
    const outlinedInputClasses = useOutlinedInputStyles();
    const [text, setText] = useState<string>('');
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && props.handleSearch(text)
    }
    return (
        <FormControl
            fullWidth variant="outlined">
            <OutlinedInput
                className={props.classes.root}
                placeholder='Search for artists'
                value={text}
                onChange={(e => setText(e.target.value))}
                onKeyDown={handleKeyPress}
                classes={outlinedInputClasses}
                endAdornment={
                    <Fragment>
                        {text !== ''
                            ? <InputAdornment position="end">
                                <IconButton
                                    className={props.classes.clearIcon}
                                    onClick={() => setText('')}
                                >
                                    <ClearIcon className={props.classes.icon} />
                                </IconButton>
                            </InputAdornment>
                            : undefined}
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => props.handleSearch(text)}
                            >
                                <SearchIcon className={props.classes.icon} />
                            </IconButton>
                        </InputAdornment>
                    </Fragment>
                }
            />
        </FormControl>
    );
}

export default withStyles(styles)(SearchComponent);