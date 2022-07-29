import React from 'react';
import InputWallet from './InputWallet';
import styles from './Add.module.css';
import Select from './Select';
import { GlobalContext } from './GlobalContext';

const Add = ({ onSaveUser, handleSubmit }) => {
  const global = React.useContext(GlobalContext);
  const [valor, setValor] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [currency, setCurrency] = React.useState('');
  const [payment, setPayment] = React.useState('Credit card');
  const [tag, setTag] = React.useState('Entertainment');
  const [codigo, setCodigo] = React.useState('USD');
  const [valorConvertido, setValorConvertido] = React.useState('');
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    switch (currency) {
      case 'USD':
        setCodigo('USD');
        break;
      case 'EUR':
        setCodigo('EUR');
        break;
      case 'GBP':
        setCodigo('GBP');
        break;
      case 'ARS':
        setCodigo('ARS');
        break;
      case 'CAD':
        setCodigo('CAD');
        break;
      case 'CLP':
        setCodigo('CLP');
        break;
      case 'JPY':
        setCodigo('JPY');
        break;
      case 'MXN':
        setCodigo('MXN');
        break;
      case 'RUB':
        setCodigo('RUB');
        break;
    }
  }, [currency]);

  React.useEffect(() => {
    fetch(`https://economia.awesomeapi.com.br/last/${codigo}-BRL`)
      .then((r) => r.json())
      .then((body) => {
        setValorConvertido(valor * body[codigo + 'BRL'].bid);
      });
  }, [codigo]);

  function handleSubmit(e) {
    e.preventDefault();
    global.setTotal(global.total + valorConvertido);

    document.getElementById('valor').value = '';
    setValor('');
    setCurrency('');
    document.getElementById('descricao').value = '';

    console.log(total);

    const data = {
      valor,
      desc,
      tag,
      payment,
      currency,
      valorConvertido,
    };
    onSaveUser(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.main}>
        <InputWallet
          required
          label="value"
          name="valor"
          type="number"
          onChange={(e) => setValor(e.target.value)}
        />
        <InputWallet
          label="Description"
          name="descricao"
          type="text"
          onChange={(e) => setDesc(e.target.value)}
        />
        <Select
          label="Currency"
          options={[
            '',
            'USD',
            'EUR',
            'GBP',
            'ARS',
            'CAD',
            'CLP',
            'JPY',
            'MXN',
            'RUB',
          ]}
          name="currency"
          value={currency}
          setValue={setCurrency}
        />
        <Select
          label="Payment method"
          options={['Credit card', 'Debit card', 'Money']}
          name="payment"
          value={payment}
          setValue={setPayment}
        />
        <Select
          label="Tag"
          options={[
            'Entertainment',
            'Food',
            'Health',
            'Transport',
            'Work',
            'Other',
          ]}
          name="currency"
          value={tag}
          setValue={setTag}
        />
        <button className={styles.button}>Add expense</button>
      </form>
    </div>
  );
};

export default Add;
