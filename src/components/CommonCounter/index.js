
import React, { Component } from 'react';

import Button from '../Button';


class CommonCounter extends Component {
  state = {
    count: 0,
    eventList: [],
  };

  handleClick = (e, id) => {
    e.persist();

    this.setState(({ count, eventList, }) => ({
      count: count + 1,
      eventList: [
        `${id} ${e.type}`,
        ...eventList,
      ],
    }));
  };

  addEvent = (e, id) => {
    e.persist();

    this.setState(({ eventList }) => ({
      eventList: [
        `${id} ${e.type}`,
        ...eventList,
      ],
    }));
  };

  render() {
    const btnArr = [
      {
        id: 'btn-one',
        type:'primary',
        size: 'large',
      },
      {
        id: 'btn-two',
        type:'secondary',
        size: 'large',
      },
      {
        id: 'btn-three',
        type:'green',
        size: 'large',
      },
    ];

    const btnList = btnArr.map((item) => (
      <Button
        key={item.id}
        type={item.type}
        size={item.size}
        onClick={e => this.handleClick(e, item.id)}
        onMouseDown={e => this.addEvent(e, item.id)}
        onMouseUp={e => this.addEvent(e, item.id)}
      >Add</Button>
    ));

    const eventRows = this.state.eventList.map((item, index) => (
      <div key={index}>{item}</div>
    ));

    return (
      <>
        {btnList}
        <div>
          <div>{this.state.count}</div>
          {eventRows}
        </div>
      </>
    );
  }
}


export default CommonCounter;
