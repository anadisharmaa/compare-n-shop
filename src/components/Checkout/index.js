/** ***************************************************
 *  src/components/Checkout/index.js
 *
 *  Checkout Component
 ** ***************************************************/

import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
const phoneFormatter = require('phone-formatter');

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    };
  }

  render() {
    return (
      <main className="mt-5 pt-4">
        <div className="container wow fadeIn">

          <h2 className="my-5 h2 text-center"></h2>

          <div className="row">

            <div className="col-md-8 mb-4">
              <div className="card">

                <div className="card-body">Checkout</div>

                  <ul className="list-group mb-3 z-depth-1">
                    {this.props.homeReducer.visibleStore.map((vs, ind) => {
                      return (
                        <li className="list-group-item d-flex justify-content-between lh-condensed" key={ind}>
                          <div>
                            <h6 className="my-0">{vs.storeName}</h6>
                            <small className="text-muted">{vs.address.street}</small>
                            <br />
                            <small className="text-muted">{vs.address.city}</small>
                            <br />
                            <small className="text-muted">{vs.address.state}, {vs.address.zip}</small>
                            <br />
                            <small className="text-muted">Timings: {vs.hours[`${this.state.days[new Date().getDay()]}_open`]} - {vs.hours[`${this.state.days[new Date().getDay()]}_close`]}</small>
                            <br />
                            {(() => {
                              if (vs.phone !== undefined && vs.phone !== null) {
                                return (<small className="text-muted">Phone: {phoneFormatter.format(vs.phone.toString(), '(NNN) NNN-NNNN')}</small>);
                              }
                            })()}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

              </div>

            </div>

            <div className="col-md-4 mb-4">

              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">{this.props.homeReducer.cart.length}</span>
              </h4>

              <ul className="list-group mb-3 z-depth-1">
                {this.props.homeReducer.cart.map((ci, ind) => {
                  return (
                    <li className="list-group-item d-flex justify-content-between lh-condensed" key={ind}>
                      <div>
                        <h6 className="my-0">{ci.productName}</h6>
                        <small className="text-muted">{ci.store}</small>
                        <br />
                        <small className="text-muted">Quantity: {ci.selectedQuantity}</small>
                      </div>
                      <span className="text-muted">{ci.currency}{ci.productPrice}</span>
                    </li>
                  );
                })}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${this.props.homeReducer.cartTotalCost}</strong>
                </li>
              </ul>

              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-secondary btn-md waves-effect m-0" type="button">Redeem</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(Checkout);
