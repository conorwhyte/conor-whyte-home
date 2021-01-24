import { useState } from 'react';
import { useLocation } from '../../utils/LocationContext.js';
import './SearchInput.scss';

const SearchField = () => {
  const [text, setText] = useState('');
  const [, setLocation] = useLocation();
  
  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Search"
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
          setLocation((loc) => ({
            ...loc,
            searchText: newText,
          }));
        }}
      />
    </form>
  );
};

export default SearchField;