import css from './SectionTitleNode.module.scss';

interface Props {
  id: number;
  text: string;
}

function SectionTitleNode({ id, text }: Props) {
  return (
    <h3 className={css.sectionTitle} id={`section-${id}`}>
      {text}
    </h3>
  );
}

export default SectionTitleNode;
