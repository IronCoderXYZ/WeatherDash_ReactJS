import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render() {
    return <div ref='map' />;
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Map);
