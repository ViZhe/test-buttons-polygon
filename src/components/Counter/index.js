
import React, { Component } from 'react';

import Button from '../Button';


class Counter extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    return (
      <div className='counter'>
        <div className='counter__number'>{this.state.count}</div>
        <Button onClick={this.handleClick} {...this.props}>{this.props.children}</Button>
      </div>
    )
  };
}


export default Counter;
