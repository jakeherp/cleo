import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Content from '../components/molecules/Content';
import Loader from '../components/atoms/Loader';
import { ITransaction } from '../interfaces/transactions';

const Bills = () => {
  const [bills, setBills] = useState<ITransaction[]>([]);

  // console.log(bills);

  useEffect(() => {
    const fetchBills = async () => {
      const { data } = await axios.get('http://localhost:3002/bills');
      const filteredBills = data.filter((transaction: ITransaction) => transaction.isBill === true);
      setBills(filteredBills);
    };
    fetchBills();
  }, []);

  return (
    <Content>
      {bills.length ? (
        bills.map(({ name, transactions, iconUrl }: ITransaction) =>
          transactions.map((transaction) => (
            <li key={transaction.id}>
              {iconUrl && <Img src={iconUrl} alt={name} />}
              <h3>{name}</h3>
              £{transaction.amount}
              <p>{transaction.date}</p>
            </li>
          ))
        )
      ) : <Loader />}
    </Content>
  );
};

const Img = styled.img`
  width: 3rem;
`;

export default Bills;
