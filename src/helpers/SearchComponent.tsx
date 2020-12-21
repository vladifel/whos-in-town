import React, { useEffect, useRef } from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = () =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
    });

interface ISearchComponentProps {

}

type ISearchComponentCombinedProps = ISearchComponentProps & WithStyles<typeof styles>;

const SearchComponent: React.FunctionComponent<ISearchComponentCombinedProps> = (props: ISearchComponentCombinedProps) => {

    return (
        <Grid container>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
    );
}

export default withStyles(styles)(SearchComponent);