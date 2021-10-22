import React from "react"
import { Grid, Typography } from "@material-ui/core"

const ErrorMessage = ({message = "Ошибка"}) => {
  return (
    <Grid container justifyContent="center">
      <Typography variant="body2" color="secondary">
        {message}
      </Typography>
    </Grid>
  )
}

export default ErrorMessage
