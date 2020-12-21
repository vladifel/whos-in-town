import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
    createStyles({
        card: {
            display: 'flex',
            height: '20rem',
            width: '35rem'
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column'
        }
    });