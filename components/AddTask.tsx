import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '500px',
    },
    textField: {
      width: '450px',
    },
  })
);

export default function AddTask() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      spacing={1}
      justify="center"
      alignItems="flex-end"
    >
      <Grid item>
        <AddIcon />
      </Grid>
      <Grid item>
        <TextField className={classes.textField} label="タスクを追加する" />
      </Grid>
    </Grid>
  );
}
