import { CancelRounded } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function Tarea(props) {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        backgroundColor: "#383737",
        width: "100%",
        height: 60,
        marginTop: 4,
        borderRadius: 1,
        "&:hover": {
          backgroundColor: "#403f3f",
        },
      }}
    >
      <Grid item xs={11} textAlign='left'>
        <Typography mt={1} variant="h6">
          {" "}
          {props.children}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Button onClick={props.handleBorrarTarea}>
          <CancelRounded sx={{ fontSize: 30}} />
        </Button>
      </Grid>
    </Grid>
  );
}
