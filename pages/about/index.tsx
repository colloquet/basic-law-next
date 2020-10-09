import React from 'react';
import Head from 'next/head';

import PageTitle from '@/components/PageTitle/PageTitle';
import css from './index.module.scss';

function AboutPage() {
  return (
    <div className={css.container}>
      <Head>
        <title>關於香港CRE基本法測試 | 香港CRE基本法測試</title>
      </Head>

      <PageTitle>關於香港CRE基本法測試</PageTitle>
      <hr />

      <p>
        基本法測試是一張設有中英文版本的選擇題形式試卷，目的是測試考生的《基本法》知識。全卷共15題，考生須於20分鐘內完成。基本法測試並無設定及格分數，滿分為100分。
      </p>
      <p>
        我整呢個網站主要係希望可以幫到將要考CRE或想了解基本法更多既人。資料來源都係黎自網絡，我幫大家整理好，有一個簡潔既介面，令大家係電話上都可以睇得舒服。
      </p>
      <p>
        如有任何意見或者發現答案有錯漏，請{' '}
        <a href="mailTo:colloquet@icloud.com">email</a> 我，我會盡快處理。
      </p>
    </div>
  );
}

export default AboutPage;
