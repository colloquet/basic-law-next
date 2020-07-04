import React from 'react';

import { Question } from '@/types/types';
import AnswerList from '@/components/AnswerList/AnswerList';
import css from './QuestionList.module.scss';

interface Props {
  questions?: Question[];
}

function QuestionList({ questions }: Props) {
  return (
    <>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className={css.container}>
          <p className={css.questionLabel}>
            {qIndex + 1}. {question.text}
          </p>
          <AnswerList answers={question.answers} qIndex={qIndex} />
        </div>
      ))}
    </>
  );
}

QuestionList.defaultProps = {
  size: null,
};

export default React.memo(QuestionList);
