import React, { useEffect, useState } from 'react';
import moment from 'moment';
import handleBill from '../utils/handleBill';
import fetchBills from '../utils/fetchBills';

import { List, Item, Img, Button, Transactions } from '../components/templates/Layout/styles';

import Content from '../components/molecules/Content';
import Loader from '../components/atoms/Loader';

import { ITransaction } from '../interfaces/transactions';
import coin from '../assets/cleo_coin.jpg';

const Bills = () => {
  const [bills, setBills] = useState<ITransaction[]>();

  const { response, error } = fetchBills('http://localhost:3002/bills');

  const filterBills = (res: any[]) => {
    const filteredBills = res.filter(
      (transaction: ITransaction) => transaction.isBill !== true
    );
    setBills(filteredBills);
  };

  useEffect(() => {
    if (response) {
      filterBills(response);
    }
  }, [response]);

  if (error) {
    return (
      <Content>
        There has been an error. Please try again later.
      </Content>
    );
  }

  return (
    <Content>
      {bills ? (
        <List>
          {bills.map(({
            id,
            name,
            transactions,
            isBill,
            iconUrl
          }: ITransaction) =>
            <>
              <Item key={id}>
                <details key={id}>
                  <summary>
                    <Img src={iconUrl || coin} alt={name} />
                    <div>
                      <h3>{name}</h3>
                      <small>({transactions.length} transactions)</small>
                    </div>
                    <Button className="add" onClick={() => handleBill({ id, isBill, setState: setBills, arr: bills })}>Add to bill</Button>
                  </summary>
                  <Transactions>
                    {transactions.map(({ id: transactionId, amount, date }) => (
                      <li key={transactionId}>
                        <p>£{amount}</p>
                        <p>{moment(date, 'YYYY-MM-DD').format('D MMM YYYY')}</p>
                      </li>
                    ))}
                  </Transactions>
                </details>
              </Item>
            </>
          )}
        </List>
      ) : <Loader />}
    </Content>
  );
};

export default Bills;
