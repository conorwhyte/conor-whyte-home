// import { format } from 'date-fns';
import styles from './Viewer.module.scss';

export default function NoteHeader({note}) {
    const {title, updated_at} = note;
    // const updatedAt = new Date(updated_at);

    return (
        <div className={styles.noteHeader}>
            <h1 className={styles.noteTitle}>{title}</h1>
            <div className={styles.noteMenu} role="menubar">
            {/* <small className={styles.noteUpdatedAt} role="status">
                Last updated on {format(updatedAt, "d MMM yyyy 'at' h:mm bb")}
            </small> */}
            {/* <EditButton noteId={id}>Edit</EditButton> */}
            </div>
        </div>
    );
}
