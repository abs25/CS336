import React from 'react';
import styles from '../css/style.css';
import ScoreSearch from './ScoreSearch';
import ScoreFilter from './ScoreFilter';
import ScoreList from './ScoreList';
import ScoreListLength from './ScoreListLength';

import $ from 'jquery';

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadScoresFromServer();
    setInterval(this.loadScoresFromServer, 2000); // TODO: Extract hard coded constant
  },
  loadScoresFromServer: function(){
    $.ajax({
      url: "/scores/", // TODO: Extract hard coded URL
      dataType: 'json',
      cache: false,
      data: {searchFilter: this.state.searchFilter},
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("/scores/", status, err.toString());
      }.bind(this)
    });
  },
  handleSearchSubmit: function(searchFilter) {
    this.setState({searchFilter: searchFilter});
    this.loadScoresFromServer();
  },
  render: function() {
    return (
      <div className={styles.scoreBox}>
        <h2>ScoreBox</h2>
        <ScoreSearch onSearchFilterSubmit={this.handleSearchSubmit}/>
        <ScoreFilter />
        <ScoreList data={this.state.data}/>
        <ScoreListLength />
      </div>
    );
  }
});