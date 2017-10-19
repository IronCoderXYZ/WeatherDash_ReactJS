import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class ForecastList extends Component {
  renderForecast(data) {
    const { name } = data.city;
    const tempLog = data.list.map(forecast => forecast.main.temp)
    const pressureLog = data.list.map(forecast => forecast.main.pressure);
    const humidityLog = data.list.map(forecast => forecast.main.humidity);
    const lonLog = data.city.coord.long;
    const { lat, lon } = data.city.coord;

    return (
      <tr key={name}>
        <td><Map lat={lat} lon={lon} /></td>
        <td><Chart data={tempLog} color='red' units='K' /></td>
        <td><Chart data={pressureLog} color='orange' units='hPa' /></td>
        <td><Chart data={humidityLog} color='blue' units='%' /></td>
      </tr>
    );
  }

  render() {
    const { forecast } = this.props;

    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {forecast.map(this.renderForecast)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({forecast}) {return {forecast}}

export default connect(mapStateToProps)(ForecastList);
