import css from './ChapterTitleNode.module.scss';

interface Props {
  id: number;
  text: string;
}

function ChapterTitleNode({ id, text }: Props) {
  return (
    <h3 className={css.chapterTitle} id={`chapter-${id}`}>
      {text}
    </h3>
  );
}

export default ChapterTitleNode;
