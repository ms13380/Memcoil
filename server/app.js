
import React, { useState, useEffect } from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '';

import { useDispatch } from 'react-redux';

import posts from '';
import form from "";
import { getposts } from '';
import usestyles from './';
import memcoil from '';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">

        <Typography className={classes.heading} variant="h2" align="center">Memcoil</Typography>

        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              
              <Posts setCurrentId={setCurrentId} />

            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;