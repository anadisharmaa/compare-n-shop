import React, {Component} from 'react';
import ReactLoading from "react-loading";
import connect from 'react-redux/es/connect/connect';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  getRandomLoadingProps() {
    const spinners = ['balls', 'bars', 'bubbles', 'cubes', 'cylon', 'spin', 'spinningBubbles', 'spokes'];
    return spinners[Math.floor(Math.random() * spinners.length)];
  }

  render() {
    return (
      <div className={this.props.loadingSpinnerReducer.status ? 'modal display-block' : 'modal display-none mid-screen'}>
        <ReactLoading
          type={this.getRandomLoadingProps()}
          color="#fff"
          height="84px"
          width="84px"
          className="mid-screen"
        />
        {/* <span>Loading....</span>*/}
      </div>
    );
  }
}

export default connect(state => state)(Loading);
