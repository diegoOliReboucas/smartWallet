import React from 'react';
import styles from './Itens.module.css';
import NovoItem from './NovoItem';
import { GlobalContext } from './GlobalContext';

const Itens = ({ list }) => {
  const global = React.useContext(GlobalContext);
  React.useEffect(() => {}, [list.length]);

  function handleClick(e) {
    let espec = e.target.parentNode.parentNode;
    let valorEspec = espec.children[5].innerText;
    global.setTotal(global.total - +valorEspec.replace(',', '.'));
    espec.remove();
  }

  return (
    <div id="main" className={styles.main}>
      <table id="thead" className={styles.table}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Tag</th>
            <th>Payment method</th>
            <th>Value</th>
            <th>Currency</th>
            <th>Converted Value</th>
            <th>Conversion Currency</th>
            <th>Delete</th>
          </tr>
          {list.map((user, index) => (
            <NovoItem
              key={index}
              Description={user.desc}
              Tag={user.tag}
              Payment={user.payment}
              Currency={user.currency}
              Value={user.valor}
              Converted={user.valorConvertido.toFixed(2).replace('.', ',')}
              onClick={handleClick}
            />
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Itens;
