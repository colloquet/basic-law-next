import React, { useMemo } from 'react';
import { Check, X } from 'react-feather';

import { shuffle } from '../../utils';
import css from './AnswerList.module.scss';

interface Props {
  qIndex: number;
  list: Array<{
    text: string;
    correct: boolean;
  }>;
}

function AnswerList({ qIndex, list }: Props) {
  const answers = useMemo(() => shuffle(list), [list]);

  return (
    <ul className={css.list}>
      {answers.map((answer, aIndex) => {
        const id = `question-${qIndex}-answer-${aIndex}`;
        return (
          <li key={id} className={css.listItem}>
            <input type="radio" id={id} className={css.radio} name={`question-${qIndex}`} data-correct={answer.correct} />
            <label htmlFor={id} className={css.label}>
              {answer.text}
            </label>
            {answer.correct ? <Check size={16} /> : <X size={16} />}
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(AnswerList);
