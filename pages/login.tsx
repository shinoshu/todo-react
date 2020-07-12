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
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
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
      <Box
        className={classes.container}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box mb={5}>
          <Typography variant="h5">ログイン</Typography>
        </Box>

        <Box width="100%">
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
        </Box>

        <Box width="100%">
          <TextField
            className={clsx(classes.textField, classes.mb1)}
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
        </Box>

        <Box display="flex" justifyContent="flex-end" width="100%" mb={4}>
          <Typography>
            <Link>パスワードをお忘れの方</Link>
          </Typography>
        </Box>

        <Box width="100%" mb={2.5}>
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
              ログイン
            </Box>
          </Button>
        </Box>

        <Button color="primary">ユーザー登録</Button>
      </Box>
    </Container>
  );
}
