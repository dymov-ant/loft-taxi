import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

const Spinner = () => (
  <Grid style={{ height: '100%' }} container justifyContent="center" alignItems="center">
    <CircularProgress />
  </Grid>
);

export default Spinner;
