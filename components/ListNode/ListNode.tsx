import { TextNode } from '@/types/types';
import css from './ListNode.module.scss';

interface Props {
  node: TextNode;
}

function ListNode({ node }: Props) {
  return (
    <ul className={css.list}>
      {node.children.map((node) => (
        <li key={node.id}>{node.text}</li>
      ))}
    </ul>
  );
}

export default ListNode;
