import { useRef, useEffect } from 'react';
import { useLocation } from '../../../utils/LocationContext.js';

export default function ItemToggle({id, title, isExpanded, setIsExpanded}) {
  const [location, setLocation] = useLocation();
  const isActive = id === location.selectedId;
  const prevTitleRef = useRef(title);
  
  useEffect(() => {
    if (title !== prevTitleRef.current) {
      prevTitleRef.current = title;
    }
  }, [title]);

  return (
    <>
      <button
        className="sidebar-note-open"
        style={{
          backgroundColor: isActive
            ? 'var(--tertiary-blue)'
            : '',
          border: isActive
            ? '1px solid var(--primary-border)'
            : '1px solid transparent',
        }}
        onClick={() => {
            // setLocation((loc) => ({
            //   selectedId: id,
            //   isEditing: false,
            //   searchText: loc.searchText,
            // }));
        }}>
      </button>
      <button
        className="sidebar-note-toggle-expand"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}>
        {isExpanded ? (
          <img
            src="chevron-down.svg"
            width="10px"
            height="10px"
            alt="Collapse"
          />
        ) : (
          <img src="chevron-up.svg" width="10px" height="10px" alt="Expand" />
        )}
      </button>
    </>
  );
}
