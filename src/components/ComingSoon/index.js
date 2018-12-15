/** ***************************************************
 *  src/components/ComingSoon/index.js
 *
 *  Temporary Component
 ** ***************************************************/

import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';

// Custom Modules
import './comingsoon.css';
import constants from './constants';
import {bindActionCreators} from 'redux';

class ComingSoon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-coming-soon">
        <h1 className="text-coming-soon">{constants[this.props.languageReducer.appLanguage].MESSAGE}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(ComingSoon);
