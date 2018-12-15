import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';

import storeHouse from '../storehouse';
import utilities from '../utilities';
import {errorCodeMessages} from '../utilities/config';
import Loading from './Loading';
import Factory from './Factory';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.buildSearchKeywords();
    // this.props.buildVisibleData('');
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Loading />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      buildVisibleData: search => storeHouse.ACTIONS.HOME.buildVisibleData(search),
      buildSearchKeywords: () => storeHouse.ACTIONS.HOME.buildSearchKeywords()
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(Layout);

