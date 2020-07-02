// @flow
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

import PageTitle from '@/components/PageTitle/PageTitle';
import QuestionList from '@/components/QuestionList/QuestionList';
import css from './index.module.scss';

function PracticePage() {
  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title>香港CRE基本法測試練習試題 | 香港CRE基本法測試</title>
      </Head>

      <PageTitle>香港CRE基本法測試練習試題</PageTitle>
      <hr />

      <div className={css.buttonGroup}>
        <Link href="/practice">
          <button className={`${css.button} ${query.type !== 'random' ? css.isActive : ''}`}>全部問題</button>
        </Link>
        <Link href="/practice?type=random" shallow>
          <button className={`${css.button} ${query.type === 'random' ? css.isActive : ''}`}>隨機15條</button>
        </Link>
      </div>

      {query.type === 'random' ? <QuestionList size={15} /> : <QuestionList />}
    </div>
  );
}

export default PracticePage;
