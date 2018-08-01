import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Streamables from './Streamables';
import data from './sample.json';
import Home from './Home';

class App extends Component {
  getJson() {
    const streamingData = data.entries
      .filter(el => {
        return el.releaseYear >= 2010;
      })
      .sort((a, b) => {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        else return 0;
      });
    return streamingData;
  }

  getSeriesData(streamingData) {
    const seriesData = this.getJson().filter(el => {
      return el.programType === 'series';
    });
    return seriesData;
  }

  getMovieData(streamingData) {
    const movieData = this.getJson().filter(el => {
      return el.programType === 'movie';
    });
    console.log(movieData);
    return movieData;
  }

  render() {
    console.log(this.getJson());
    return (
      <div className="App">
        <Header type={this.getJson()} />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/series"
              component={props => (
                <Streamables
                  {...props}
                  streamablesList={this.getSeriesData()}
                />
              )}
            />
            <Route
              exact
              path="/movies"
              component={props => (
                <Streamables {...props} streamablesList={this.getMovieData()} />
              )}
            />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
