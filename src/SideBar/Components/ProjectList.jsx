import styles from './ProjectList.module.scss';
import SidebarItem from './SidebarItem/SidebarItem';

const ProjectList = ({ projects }) => (
    <ul className={styles.projectsList}>
        {projects.map((project) => (
            <li key={project.id}>
                <SidebarItem project={project} />
            </li>
        ))}
    </ul>
);

export default ProjectList;