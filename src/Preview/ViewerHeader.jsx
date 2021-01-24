import { format } from 'date-fns';
import styles from './Viewer.module.scss';

export default function NoteHeader({project}) {
    const { name, updatedAt } = project;
    const updatedDate = new Date(updatedAt);

    return (
        <div className={styles.noteHeader}>
            <h1 className={styles.noteTitle}>{name}</h1>
            <div className={styles.noteMenu} role="menubar">
            <small className={styles.noteUpdatedAt} role="status">
                Last updated on {format(updatedDate, "d MMM yyyy 'at' h:mm bb")}
            </small>
            {/* <EditButton noteId={id}>Edit</EditButton> */}
            </div>
        </div>
    );
}
