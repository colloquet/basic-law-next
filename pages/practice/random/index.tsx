import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

import allQuestions from '@/assets/questions.json';
import PageTitle from '@/components/PageTitle/PageTitle';
import QuestionList from '@/components/QuestionList/QuestionList';
import { shuffle } from '../../../utils';
import css from '../index.module.scss';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      questions: shuffle(allQuestions)
        .slice(0, 15)
        .map((question) => ({
          ...question,
          answers: shuffle(question.answers),
        })),
    },
  };
};

function PracticeRandomPage({ questions }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { pathname } = useRouter();

  return (
    <div>
      <Head>
        <title>香港CRE基本法測試練習試題 | 香港CRE基本法測試</title>
      </Head>

      <PageTitle>香港CRE基本法測試練習試題</PageTitle>
      <hr />

      <div className={css.buttonGroup}>
        <Link href="/practice">
          <button className={`${css.button} ${pathname === '/practice' ? css.isActive : ''}`}>
            全部問題
          </button>
        </Link>
        <Link href="/practice/random">
          <button
            className={`${css.button} ${pathname === '/practice/random' ? css.isActive : ''}`}
          >
            隨機15條
          </button>
        </Link>
      </div>

      <QuestionList questions={questions} />
    </div>
  );
}

export default PracticeRandomPage;