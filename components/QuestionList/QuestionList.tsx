import React, { useMemo } from 'react';

import questions from '@/assets/questions.json';
import AnswerList from '@/components/AnswerList/AnswerList';
import { shuffle } from '../../utils';
import css from './QuestionList.module.scss';

interface Props {
  size?: number;
}

function QuestionList({ size }: Props) {
  const questionsList = useMemo(() => shuffle(questions).slice(0, size || questions.length), [size]);

  return (
    <>
      {questionsList.map((question, qIndex) => (
        <div key={qIndex} className={css.container}>
          <p className={css.questionLabel}>
            {qIndex + 1}. {question.text}
          </p>
          <AnswerList list={question.answers} qIndex={qIndex} />
        </div>
      ))}
    </>
  );
}

QuestionList.defaultProps = {
  size: null,
};

export default React.memo(QuestionList);
