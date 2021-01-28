import { useLocation } from '../utils/LocationContext';
import { openEditor } from '../store/actions';
import styles from './EditButton.module.scss';

export default function EditButton({ noteId, text }) {
  const [, dispatch] = useLocation();
  const isDraft = noteId == null;
  
  return (
    <button
      className={[
        styles.editButton,
        isDraft ? styles.editButtonSolid : styles.editButtonOutline,
      ].join(' ')}
      onClick={() => {
        dispatch(openEditor());
      }}
      role="menuitem"
    >
        {text}
    </button>
  );
}
