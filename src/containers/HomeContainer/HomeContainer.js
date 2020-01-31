import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchItems } from '../../actions/itemAction';
import Home from '../../components/Home';

const HomeContainer = ({ data, fetchItems }) => (
  <Home fetchItems={fetchItems} {...data} />
);
HomeContainer.propTypes = {
  data: PropTypes.object,
  fetchItems: PropTypes.func.isRequired,
};

HomeContainer.defaultProps = {
  data: {
    items: [],
    isFetching: false,
  },
};

const mapStateToProps = state => ({
  data: state.items,
});

export default connect(mapStateToProps, { fetchItems })(HomeContainer);
