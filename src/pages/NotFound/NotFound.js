import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Typography } from '@material-ui/core';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 5,
    };
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 });
      }
    }, 1000);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
        <Typography variant="h3" align="center">
          This page was not found!
        </Typography>
        <Typography variant="h6" align="center">
          You will not be redirected to the <Link to="/">home page</Link> in{' '}
          {seconds}...
        </Typography>
        {seconds === 0 && <Redirect to="/" />}
      </div>
    );
  }
}

export default NotFound;
