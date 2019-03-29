
import React, { Component } from 'react';

import Button from './components/Button';
import Counter from './components/Counter';
import CommonCounter from './components/CommonCounter';


class App extends Component {
  render() {
    return (
      <>
        <div className="row">
          <Button
            type='primary'
            size='medium'
          >Button</Button>
          <Button
            type='primary'
            size='large'
          >Button</Button>
          <Button
            type='primary'
            size='mlarge'
          >Button</Button>
          <Button
            type='primary'
            size='xlarge'
          >Button</Button>
          <Button
            type='primary'
            size='large'
            disabled={true}
          >Button</Button>
        </div>
        <div className="row">
          <Button
            type='secondary'
            size='medium'
          >Button</Button>
          <Button
            type='secondary'
            size='large'
          >Button</Button>
          <Button
            type='secondary'
            size='mlarge'
          >Button</Button>
          <Button
            type='secondary'
            size='xlarge'
          >Button</Button>
          <Button
            type='secondary'
            size='large'
            disabled={true}
          >Button</Button>
        </div>
        <div className="row">
          <Button
            type='green'
            size='medium'
          >Button</Button>
          <Button
            type='green'
            size='large'
          >Button</Button>
          <Button
            type='green'
            size='mlarge'
          >Button</Button>
          <Button
            type='green'
            size='xlarge'
          >Button</Button>
          <Button
            type='green'
            size='large'
            disabled={true}
          >Button</Button>
        </div>
        <div className="row">
          <Button
            type='green'
            size='large'
            icon='plus'
          >Создать заказ</Button>
        </div>
        <div className="row">
          <Counter
            type='primary'
            size='large'
          >Add</Counter>
          <Counter
            type='secondary'
            size='large'
          >Add</Counter>
          <Counter
            type='green'
            size='large'
          >Add</Counter>
        </div>
        <div className="row">
          <CommonCounter />
        </div>
      </>
    );
  }
}


export default App;
