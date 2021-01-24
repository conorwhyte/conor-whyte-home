import styles from './ProjectList.module.scss';
import SidebarNote from './Components/SidebarItem/SidebarItem';

const ProjectList = ({ projects }) => (
    <ul className={styles.projectsList}>
        {projects.map((note) => (
            <li key={note.id}>
                <SidebarNote note={note} />
            </li>
        ))}
    </ul>
);

export default ProjectList;