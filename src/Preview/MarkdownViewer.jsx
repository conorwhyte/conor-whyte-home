import marked from 'marked';
import sanitizeHtml from 'sanitize-html';
import styles from './Viewer.module.scss';

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  'img',
  'h1',
  'h2',
  'h3',
]);
const allowedAttributes = Object.assign(
  {},
  sanitizeHtml.defaults.allowedAttributes,
  {
    img: ['alt', 'src'],
  }
);

export default function TextWithMarkdown({text}) {
  return (
    <div
      className={styles.textWithMarkdown}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(marked(text), {
          allowedTags,
          allowedAttributes,
        }),
      }}
    />
  );
}
