import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import { Wrap } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const handleChange = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <Wrap>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" id={filterId} onChange={handleChange}></input>
    </Wrap>
  );
};
