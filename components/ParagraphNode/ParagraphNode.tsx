interface Props {
  text: string;
}

function ParagraphNode({ text }: Props) {
  return <p>{text}</p>;
}

export default ParagraphNode;
