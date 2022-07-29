import React from 'react';

const NovoItem = ({
  Description,
  Tag,
  Payment,
  Value,
  Currency,
  Converted,
  onClick,
}) => {
  return (
    <tr>
      <td>{Description}</td>
      <td>{Tag}</td>
      <td>{Payment}</td>
      <td>{Value}</td>
      <td>{Currency}</td>
      <td>{Converted}</td>
      <td>BRL</td>
      <td>
        {' '}
        <button onClick={onClick}>Delete</button>{' '}
      </td>
    </tr>
  );
};

export default NovoItem;
