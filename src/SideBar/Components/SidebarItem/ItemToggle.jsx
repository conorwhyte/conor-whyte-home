import { useRef, useEffect } from 'react';
import { useLocation } from '../../../utils/LocationContext.js';
import { getSelectedId } from '../../../store/selectors';
import { addSelectedId } from '../../../store/actions.js';

export default function ItemToggle({id, title, isExpanded, setIsExpanded}) {
  const [state, dispatch] = useLocation();
  const isActive = id === getSelectedId(state);
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
          dispatch(addSelectedId(id));
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
