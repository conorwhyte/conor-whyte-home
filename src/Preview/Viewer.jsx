import { useEffect, useState } from 'react';
import ViewerText from './ViewerText';
import ViewerHeader from './ViewerHeader';
import ProjectEditor from '../Editor/ProjectEditor';
import styles from './Viewer.module.scss';
import { getProject } from '../api/project.service';
import { useLocation } from '../utils/LocationContext.js';
import { 
    getIsEditing, 
    getSelectedId 
} from '../store/selectors';

export default function Viewer() {
    const [ state ] = useLocation(); 
    const [ project, setProject ] = useState();
    const selectedId = getSelectedId(state);
    const isEditing = getIsEditing(state);

    useEffect(() => {
        if (selectedId) {
            getProject(selectedId).then(setProject);
        }
    }, [selectedId]);

    if (isEditing) {
        return (
            <ProjectEditor 
                initialTitle="Untitled" 
                initialBody="" 
            />
        );
    }
    
    return project ? (
        <section className={styles.noteViewer}>
            <div className={styles.note}>
                <ViewerHeader project={project} />
                
                <ViewerText body={project.body} />
            </div>
        </section>
    ) : null;
}
