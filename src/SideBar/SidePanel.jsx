import { useEffect, useCallback } from 'react'; 
import SearchInput from './Components/SearchInput';
import ProjectList from './Components/ProjectList';
import { useLocation } from '../utils/LocationContext.js';
import { addProjects, } from '../store/actions';
import { getProjectList } from '../store/selectors';
import { listProjects } from '../api/project.service';
import styles from './SidePanel.module.scss';

const SidePanel = () => {
    const [ state, dispatch ] = useLocation();
    const projects = getProjectList(state);

    const addProjectsStore = useCallback((projects) => {
        const addProjectAction = addProjects(projects);
        dispatch(addProjectAction);
    }, [dispatch]);

    useEffect(() => {
        listProjects().then(addProjectsStore);
    }, [addProjectsStore]);

    return (
        <section className={`${styles.col} ${styles.sidebar}`}>
            <section className={styles.sidebarHeader}>
                <strong>My Projects</strong>
            </section>
            <section className={styles.sidebarMenu} role="menubar">
                <SearchInput />
            </section>
            <nav>
                <ProjectList projects={projects} />
            </nav>
        </section>
    );
};
  
export default SidePanel;