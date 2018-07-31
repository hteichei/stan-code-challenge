import React, { Component } from 'react';
import Streamable from './Streamable';
import './Streamables.css';

class Streamables extends Component {
  state = {
    titles: [],
    loading: true
  };

  componentDidMount() {
    this.setState({
      titles: this.props.streamablesList,
      loading: false
    });
  }

  render() {
    const streamables = this.state.titles
      .map((el, idx) => {
        return (
          <Streamable
            key={idx}
            img={el.images['Poster Art'].url}
            title={el.title}
          />
        );
      })
      .slice(0, 21);
    if (this.state.loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return <div className="streamables">{streamables}</div>;
    }
  }
}

export default Streamables;
