import React from 'react';
import Add from './Add';
import Header from './Header';
import Itens from './Itens';
import { GlobalStorage } from './GlobalContext';

const Wallet = () => {
  const [list, setList] = React.useState([]);

  function saveUser(user) {
    let newList = [...list];

    newList.push(user);
    setList(newList);
  }

  return (
    <div>
      <GlobalStorage>
        <Header />
        <Add onSaveUser={saveUser} />
        <Itens list={list} />
      </GlobalStorage>
    </div>
  );
};

export default Wallet;
