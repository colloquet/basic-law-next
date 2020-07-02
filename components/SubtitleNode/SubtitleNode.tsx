import css from './SubtitleNode.module.scss';

interface Props {
  text: string;
}

function SubtitleNode({ text }: Props) {
  return <strong className={css.subtitle}>{text}</strong>;
}

export default SubtitleNode;
