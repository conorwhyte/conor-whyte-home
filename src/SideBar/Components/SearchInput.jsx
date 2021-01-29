import { 
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useLocation } from '../../utils/LocationContext';
import { addSearchText } from '../../store/actions';
import debounce from 'lodash.debounce';
import './SearchInput.scss';

const SearchField = () => {
  const [, dispatch] = useLocation();
  const [text, setText] = useState('');

  const onType = (e) => {
    const newText = e.target.value;
    setText(newText)
  };

  const updateQuery = () => {
    dispatch(addSearchText(text));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedQuery = useCallback(debounce(updateQuery, 500), [text]);

  useEffect(() => {
    delayedQuery();

    return delayedQuery.cancel;
  }, [text, delayedQuery]);
  
  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Search"
        value={text}
        onChange={onType}
      />
    </form>
  );
};

export default SearchField;