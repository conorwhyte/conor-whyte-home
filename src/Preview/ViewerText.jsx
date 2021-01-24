import MarkdownViewer from './MarkdownViewer';
import styles from './Viewer.module.scss';

export default function ViewerText({body}) {
  return (
    <div className={styles.projectPreview}>
      <MarkdownViewer text={body} />
    </div>
  );
}
