/** *********************************************
 *  src/components/Factory
 *
 *  Handles all errors returned by the server
 ** *********************************************/

// Built-in Modules
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Custom Modules
import './index.css';
import utilities from '../../utilities';
import storeHouse from '../../storehouse';

class Factory extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <div className="container">
        {(() => {
          if (this.props.factoryReducer.error[this.props.languageReducer.appLanguage].length > 0) {
            return (
              <div className="server-error-div">
                <i className="fa fa-exclamation-circle"></i>
                {this.props.factoryReducer.error[this.props.languageReducer.appLanguage]}
              </div>
            );
          }
        })()}
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

export default connect(state => state, mapDispatchToProps)(Factory);

