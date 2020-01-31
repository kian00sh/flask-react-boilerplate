import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  List,
  ListItem,
  CircularProgress,
  withStyles,
} from '@material-ui/core';

const Home = ({ items, isFetching, fetchItems, classes }) => (
  <div className={classes.container}>
    <Button onClick={fetchItems} variant="outlined" color="primary">
      Get Items
    </Button>
    <List>
      {items.map((item, key) => (
        <ListItem key={key}>❤️ {item}</ListItem>
      ))}
    </List>
    {isFetching && <CircularProgress />}
  </div>
);

Home.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchItems: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.secondary.main,
  },
});

export default withStyles(styles)(Home);
