import React from 'react';
import { GlobalContext } from './GlobalContext';

const Total = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div>
      <p>Total: {global.total}</p>
    </div>
  );
};

export default Total;
