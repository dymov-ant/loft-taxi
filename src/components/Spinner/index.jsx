import React from "react"
import { CircularProgress, Grid } from "@material-ui/core"

const Spinner = () => {
  return (
    <Grid container justifyContent="center">
      <CircularProgress/>
    </Grid>
  )
}

export default Spinner
