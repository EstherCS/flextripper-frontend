import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    butt: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const TripLists = (props) => {
    return props.places.map((val, idx) => {
        const classes = useStyles;

        let place = `place-${idx}`,
            startTime = `startTime-${idx}`,
            endTime = `endTime-${idx}`;

        return (
            <div className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item/>
                    <Grid item xs={3}>
                        <TextField
                            id="outlined-textarea"
                            label="Place"
                            placeholder="Place"
                            size="small"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="outlined-textarea"
                            label="StartTime"
                            placeholder="StartTime"
                            size="small"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="outlined-textarea"
                            label="EndTime"
                            placeholder="EndTime"
                            size="small"
                            variant="outlined"

                        />
                    </Grid>
                    <Grid item xs={2}>
                        {idx === 0 ? (
                            <Button size="medium" variant="outlined" color="primary" className={classes.margin}
                                    onClick={() => props.add()}
                            >
                                +
                            </Button>
                        ) : (
                            <Button size="medium" variant="outlined" color="secondary" className={classes.margin}
                                    onClick={() => props.delete(val)}
                            >
                                -
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </div>
        );
    });
};
export default TripLists;
