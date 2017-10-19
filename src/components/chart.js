import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  const { data } = props;
  return (
    <div>
      <Sparklines height={100} width={180} data={data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}
