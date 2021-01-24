import { useEffect, useState } from 'react';
import ViewerText from './ViewerText';
import ViewerHeader from './ViewerHeader';
import ProjectEditor from '../Editor/ProjectEditor';
import styles from './Viewer.module.scss';
import { getProject } from '../api/project.service';
import { useLocation } from '../utils/LocationContext.js';
import { getSelectedId } from '../store/selectors';

export default function Viewer() {
    const [ state ] = useLocation(); 
    const [ project, setProject ] = useState();
    const selectedId = getSelectedId(state);

    useEffect(() => {
        if (selectedId) {
            getProject(selectedId).then(setProject);
        }
    }, [selectedId])
    
    const body1 = `It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to React's website!](https://www.reactjs.org).
    \n\nYou can write all kinds of [amazing](https://en.wikipedia.org/wiki/The_Amazing) notes in this app! These note live on the server in the "notes" folder. 
    ![This app is powered by React](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/800px-React_Native_Logo.png)`;

    return project ? (
        <section className={styles.noteViewer}>
            <div className={styles.note}>
                <ViewerHeader project={project} />
                
                <ViewerText body={body1} />
            </div>
        </section>
    ) : <ProjectEditor noteId={null} initialTitle="Untitled" initialBody="" />;
}
