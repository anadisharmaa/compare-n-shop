/** ***************************************************
 *  src/components/Header/index.js
 *
 *  Header Component
 ** ***************************************************/

import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {Link} from 'react-router-dom';

// Custom Modules
// import './comingsoon.css';
// import constants from './constants';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div className="container">

          <Link to="/" className="navbar-brand waves-effect" href="javascript:void(0)">
            <strong className="blue-text">Compare-N-Shop</strong>
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item" onClick={() => {
                this.props.goToCheckout();
              }}>
                <a className="nav-link waves-effect">
                  <span className="badge red z-depth-1 mr-1"> {this.props.homeReducer.cart.length} </span>
                  <i className="fa fa-shopping-cart"></i>
                  <span className="clearfix d-none d-sm-inline-block"> Cart </span>
                </a>
              </li>
            </ul>

          </div>

        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      goToCheckout: () => push('/checkout')
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(Header);
