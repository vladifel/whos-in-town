import React, { Fragment, useState } from 'react';
import { WithStyles, withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

const styles = () =>
    createStyles({
        clearIcon: {
            marginRight: '0.5rem'
        },
        icon: {
            color: '#03A9F4',
            fontSize: '2rem',
            "&:active, &:hover, &.Mui-focusVisible": {
                color: '#B3E5FC',
                backgroundColor: 'transparent',
            }
        },
        root: {
            boxShadow: '0 0 0.3rem 0.1rem rgba(3, 169, 244,0.7)'
        }
    });

const useOutlinedInputStyles = makeStyles(() => ({
    root: {
        "&:hover $notchedOutline": {
            borderColor: "#03A9F4"
        },
        "&$focused $notchedOutline": {
            borderColor: "#03A9F4"
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
        if (e.key === 'Enter') {
            props.handleSearch(text);
            setText('');
        }
    }

    const handleIconClick = () => {
        props.handleSearch(text);
        setText('');
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
                                onClick={handleIconClick}
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