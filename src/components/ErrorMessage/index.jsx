import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

const ErrorMessage = ({ message = 'Ошибка' }) => (
  <Grid container justifyContent="center">
    <Typography variant="body2" color="secondary">
      {message}
    </Typography>
  </Grid>
);

ErrorMessage.defaultProps = {
  message: 'Ошибка',
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
