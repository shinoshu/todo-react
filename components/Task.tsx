import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: '50px',
      width: '500px',
      padding: theme.spacing(1),
    },
  })
);

export default function Task() {
  const classes = useStyles();
  const [done, setDone] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const handleClickDone = () => {
    setDone(!done);
  };

  const handleClickFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Box my={1}>
      <Card className={classes.card}>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Box component="span" mr={1} onClick={handleClickDone}>
              {done ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </Box>
          </Grid>

          <Grid item>
            <Typography color="textSecondary">食器を洗う</Typography>
          </Grid>

          <Box component="span" mr="auto" />

          <Grid item>
            <Box component="span" onClick={handleClickFavorite}>
              {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
