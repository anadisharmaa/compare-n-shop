/** ***************************************************
 *  src/components/ProductDescription/index.js
 *
 *  Product Description Component
 ** ***************************************************/

import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';

import storeHouse from '../../storehouse';

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	productQuantity: 1
    }
  }

  render() {
    return (
	  <main className="mt-5 pt-4">
	    <div className="container dark-grey-text mt-5">

	      <div className="row wow fadeIn">

	        <div className="col-md-6 mb-4">

	          <img src={this.props.homeReducer.selectedProduct.productImage} className="img-fluid" alt="" />

	        </div>

	        <div className="col-md-6 mb-4">

	          <div className="p-4">

	            <p className="lead font-weight-bold">{this.props.homeReducer.selectedProduct.productName}</p>

	            <p>STORE: {this.props.homeReducer.selectedProduct.store}</p>

	            <p className="lead">
	              <span>{this.props.homeReducer.selectedProduct.productPrice}</span>
	            </p>

	            <p className="lead font-weight-bold">Description</p>

	            <p>{this.props.homeReducer.selectedProduct.productDescrition}</p>

	            <form action="javascript:void(0)" className="d-flex justify-content-left">
	              <input
	              	type="number" 
	              	value={this.state.productQuantity} 
	              	onChange={event => {
	              		const value = (event.target.value < 1) ? 1: event.target.value;
	              		this.setState({productQuantity: value});
	              	}}
	              	min="1"
	              	aria-label="Search" 
	              	className="form-control" 
	              	style={{width: '100px'}} 
	              />
	              <button
	              	className="btn btn-primary btn-md my-0 p"
	              	type="submit"
	              	onClick={() => {
	              		const product = this.props.homeReducer.selectedProduct;
	              		product.selectedQuantity = this.state.productQuantity;
	              		this.props.addToCart(product);
	              		this.props.goToHome();
	              	}}
	              >Add to cart
	                <i className="fa fa-shopping-cart ml-1"></i>
	              </button>
	              <button
	              	className="btn btn-primary btn-md my-0 p"
	              	type="submit"
	              	onClick={() => {
	              		this.props.goToHome();
	              	}}
	              >Cancel
	                <i className="fa fa-shopping-cart ml-1"></i>
	              </button>

	            </form>

	          </div>

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
    	goToHome: () => push('/'),
    	addToCart: product => storeHouse.ACTIONS.HOME.addToCart(product)
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(ProductDescription);
