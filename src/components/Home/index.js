/** ***************************************************
 *  src/components/Home/index.js
 *
 *  Home Component
 ** ***************************************************/

import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';

// Custom Modules
import './index.css';
import storeHouse from '../../storehouse';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.props.buildVisibleData('');
  }

  render() {
    return (
      <div>
        <div id="carousel-example-1z" className="carousel slide carousel-fade pt-4" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
            <li data-target="#carousel-example-1z" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">

            <div className="carousel-item active">
              <div className="view carousel-item-1">
                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
                  <div className="text-center white-text mx-5 wow fadeIn">
                    <h1 className="mb-4">
                      <strong>Compare N Shop</strong>
                    </h1>

                    <p>
                      <strong>Check prices across different stores before shopping</strong>
                    </p>

                  </div>

                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="view carousel-item-2">

                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
                  <div className="text-center white-text mx-5 wow fadeIn">
                    <h1 className="mb-4">
                      <strong>Compare N Shop</strong>
                    </h1>

                    <p>
                      <strong>Check prices across different stores before shopping</strong>
                    </p>
                  </div>

                </div>

              </div>
            </div>

            <div className="carousel-item">
              <div className="view carousel-item-3">

                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
                  <div className="text-center white-text mx-5 wow fadeIn">
                    <h1 className="mb-4">
                      <strong>Compare N Shop</strong>
                    </h1>

                    <p>
                      <strong>Check prices across different stores before shopping</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <main>
          <div className="container">

            <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">

              <span className="navbar-brand">Categories:</span>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="basicExampleNav">

                <ul className="navbar-nav mr-auto">
                  {this.props.homeReducer.categories.map((c, i) => {
                    return (
                      <li
                        className={(this.props.homeReducer.selectedCategory === c) ? 'nav-item active' : 'nav-item'}
                        key={i}
                        onClick={() => {
                          this.props.updateSelectedCategory(c);
                        }}
                      >
                        <a className="nav-link" href="javascript:void(0)">{c}
                          {(() => {
                            if (this.props.homeReducer.selectedCategory === c) {
                              return (<span className="sr-only">(current)</span>);
                            }
                          })()}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <form className="form-inline">
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Type Atleast 4 letters.."
                      aria-label="Search"
                      value={this.state.value}
                      onChange={event => {
                        this.setState({search: event.target.value});
                        this.props.buildVisibleData(event.target.value);
                      }} 
                    />
                  </div>
                </form>
              </div>

            </nav>

            <section className="text-center mb-4">

            {this.props.homeReducer.visibleProducts[this.props.homeReducer.selectedCategory].map((p, index) => {
              if ((index*4) < this.props.homeReducer[this.props.homeReducer.selectedCategory].length) {
                return (
                    <div className="row wow fadeIn" key={index}>
                      {this.props.homeReducer.visibleProducts[this.props.homeReducer.selectedCategory].map((p, i) => {
                          if (i >= (index*4) && i < ((index+1)*4)) {
                            return (
                              <div
                                className="col-lg-3 col-md-6 mb-4"
                                key={(index+1+i)} 
                                onClick={() => {
                                  this.props.setSelectedProduct(p);
                                  this.props.goToProduct();
                                }}
                              >
                                <div className="card h-500">

                                  <div className="view overlay">
                                    <img src={p.productImage} className="card-img-top " alt="" />
                                    <a>
                                      <div className="mask rgba-white-slight"></div>
                                    </a>
                                  </div>

                                  <div className="card-body text-center">
                                    <a href="javascript:void(0)" className="grey-text">
                                      <h5>{p.productBrand}</h5>
                                    </a>

                                    <h5>
                                      <strong>
                                        <a href="javascript:void(0)" className="dark-grey-text">{p.productName}</a>
                                      </strong>
                                    </h5>

                                    <h5>
                                        <a href="javascript:void(0)" className="dark-grey-text">({p.store})</a>
                                    </h5>

                                    <h4 className="font-weight-bold blue-text">
                                      <strong>{p.currency}{p.productPrice}</strong>
                                    </h4>

                                  </div>

                                </div>

                              </div>
                            );
                          }
                      })}

                    </div>
                );
              }
            })}
            </section>

          </div>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      buildVisibleData: search => storeHouse.ACTIONS.HOME.buildVisibleData(search),
      updateSelectedCategory: category => storeHouse.ACTIONS.HOME.setSelectedCategory(category),
      setSelectedProduct: product => storeHouse.ACTIONS.HOME.setSelectedProduct(product),
      goToProduct: () => push('/product')
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(Home);
