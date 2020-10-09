import React from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = (props) => {
    return ( 
    <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Infected</Typography>
                    <Typography variant='h5'>Data</Typography>
                    <Typography color='textSecondary'>Date</Typography>
                    <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>recoveries</Typography>
                    <Typography variant='h5'>Data</Typography>
                    <Typography color='textSecondary'>Date</Typography>
                    <Typography variant='body2'>Number recoveries from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                    <Typography variant='h5'>Data</Typography>
                    <Typography color='textSecondary'>Date</Typography>
                    <Typography variant='body2'>Number of deaths by of COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div> );
}
 
export default Cards;