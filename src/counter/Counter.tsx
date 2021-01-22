import { Button, Stack, Tag } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decCount, incCount, incCountDeleyed, selectCount } from './counterSlice'

// HOOKS
// export function Counter() {
//   // const count = 5;
//   const [count, setCount] = useState(0);
//   return (
//     <Stack direction="row">
//       <Tag>{count}</Tag>
//       <Button colorScheme="red" onClick={() => setCount(count - 1)}>-1</Button>
//       <Button colorScheme="green" onClick={() => setCount(count + 1)}>+1</Button>
//     </Stack>
//   );
// }

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Stack direction="row">
      <Tag>{count}</Tag>
      <Button colorScheme="red" onClick={() => dispatch(decCount(1))}>-1</Button>
      <Button colorScheme="green" onClick={() => dispatch(incCount(1))}>+1</Button>
      <Button colorScheme="green" onClick={() => dispatch(incCountDeleyed(1))}>+1</Button>
    </Stack>
  );
}
