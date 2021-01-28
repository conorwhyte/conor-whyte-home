import { useLocation } from '../../utils/LocationContext';
import { addSelectedId, closeEditor } from '../../store/actions';
import styles from './ProjectList.module.scss';
import SidebarItem from './SidebarItem/SidebarItem';

const ProjectList = ({ projects }) => {
    const [, dispatch] = useLocation();

    const onItemClick = (project) => {
        const { id } = project;

        dispatch(addSelectedId(id));
        dispatch(closeEditor());
    };

    return (
        <ul className={styles.projectsList}>
            {projects.map((project) => (
                <li key={project.id} 
                    onClick={() => onItemClick(project)}
                >
                    <SidebarItem project={project} />
                </li>
            ))}
        </ul>
    );
}

export default ProjectList;