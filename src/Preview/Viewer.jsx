import ViewerText from './ViewerText';
import ViewerHeader from './ViewerHeader';
import styles from './Viewer.module.scss';

export default function Viewer({note}) {
    // const {id, title, body, updated_at} = note;

    const body1 = `It's very easy to make some words **bold** and other words *italic* with
    Markdown. You can even [link to React's website!](https://www.reactjs.org).`;

    return (
        <div className={styles.note}>
            <ViewerHeader note={{}} />
            
            <ViewerText body={body1} />
        </div>
    );
}
