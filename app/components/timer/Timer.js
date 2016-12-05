import React, { PropTypes, Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

const propTypes = {
  initialSecond: PropTypes.number
};
const defaultProps = {
  initialSecond: 0
};


class Timer extends Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleClickStop = this.handleClickStop.bind(this);
    this.handleClicReset = this.handleClicReset.bind(this);

    this.state = {
      // onClick: () => {},
      seconds: 0
    };
  }

  // componentDidMount() {
  //   this.timer = setInterval(this.tick, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  handleClickStart() {
    this.timer = setInterval(this.tick, 1000);
  }

  handleClicReset() {
    this.setState({ seconds: 0 });
  }

  // handleClicReset() {
  //   this.setState({ seconds: this.props.initialSecond });
  // }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  handleClickStop() {
    clearInterval(this.timer);
  }


  render() {
    return (
      <div className='contact-info'>
        <div className='contact-name'>Уже прошло {this.state.seconds} секунд</div>
        <Button onClick={this.handleClickStart}>Start</Button>
        <Button onClick={this.handleClickStop}>Stop</Button>
        <Button onClick={this.handleClicReset}>Reset</Button>
      </div>
    );
  }
}
Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;

export default Timer;
