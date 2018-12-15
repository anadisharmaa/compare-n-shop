/** ***************************************************
 *  src/components/Footer/index.js
 *
 *  Footer Component
 ** ***************************************************/

import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="page-footer text-center font-small mt-4 wow fadeIn">

        <div className="footer-copyright py-3">
          © 2018 Copyright:
          <a href="javascript:void(0)"> CompareNShop, Inc. All Rights Reserved. </a>
        </div>

      </footer>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(Footer);
