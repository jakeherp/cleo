import axios from 'axios';

interface IArgs {
  id: string;
  isBill: boolean;
  setState: ([]) => void;
  arr: any[];
}

const removeFromArray = (id: string, arr: any[], setState: ([]) => void) => {
  const clearedArr = arr.filter(item => item.id !== id);
  setState(clearedArr);
};

export default ({
  id,
  isBill,
  setState,
  arr,
}: IArgs) => {
  axios.patch(`http://localhost:3002/bills/${id}`, {
    isBill: !isBill,
  });

  removeFromArray(id, arr, setState);
};