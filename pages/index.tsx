import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import AddTask from '../components/AddTask';
import TodoTabs from '../components/TodoTabs';
import Task from '../components/Task';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1, 0),
    },
  })
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            TODO
          </Typography>
        </Toolbar>
      </AppBar>

      <TodoTabs />

      <Container className={classes.container} maxWidth="sm">
        <Grid container justify="center">
          <Grid item>
            <AddTask />
            <Task />
            <Task />
            <Task />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
