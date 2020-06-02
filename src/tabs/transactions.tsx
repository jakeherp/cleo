import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Content from '../components/molecules/Content';
import Loader from '../components/atoms/Loader';
import { ITransaction } from '../interfaces/transactions';

const Transactions = () => {
  const [bills, setBills] = useState<ITransaction[]>([]);

  console.log(bills);

  useEffect(() => {
    const fetchBills = async () => {
      const { data } = await axios.get('http://localhost:3002/bills');
      const filteredBills = data.filter((transaction: ITransaction) => transaction.isBill === false);
      setBills(filteredBills);
    };
    fetchBills();
  }, []);
  return (
    <Content>
      {bills.length ? (
        bills.map(({ id, name, transactions, iconUrl }: ITransaction) => (
          <li key={id}>
            {name}
            {iconUrl && <img src={iconUrl} alt={name} />}
          </li>
        ))
      ) : <Loader />}
    </Content>
  );
};

export default Transactions;
