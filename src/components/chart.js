import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  const { data, color, units } = props;
  return (
    <div>
      <Sparklines height={100} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(data)} {units}</div>
    </div>
  );
}
