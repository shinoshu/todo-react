import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
    },
    item: {
      width: '100%',
    },
    textField: {
      width: '100%',
    },
    button: {
      width: '100%',
    },
    mb1: {
      marginBottom: theme.spacing(1),
    },
    mb2: {
      marginBottom: theme.spacing(2),
    },
    mb4: {
      marginBottom: theme.spacing(4),
    },
  })
);

export default function Login() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid className={classes.item} item>
          <Box display="flex" justifyContent="center" mb={5}>
            <Typography variant="h5">ユーザー登録</Typography>
          </Box>
        </Grid>

        <Grid className={classes.item} item>
          <TextField
            className={clsx(classes.textField, classes.mb4)}
            label="ユーザー名"
            placeholder="username"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid className={classes.item} item>
          <TextField
            className={clsx(classes.textField, classes.mb4)}
            label="パスワード"
            placeholder="********"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid className={classes.item} item>
          <TextField
            className={clsx(classes.textField, classes.mb4)}
            label="メールアドレス"
            placeholder="username@gmail.com"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid className={classes.item} item>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="40px"
            >
              登録
            </Box>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
