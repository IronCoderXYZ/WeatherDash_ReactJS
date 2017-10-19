import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class ForecastList extends Component {
  renderForecast(city) {
    const { name } = city.city;
    const tempLog = city.list.map(forecast => forecast.main.temp)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={tempLog} color='red' />
        </td>
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
