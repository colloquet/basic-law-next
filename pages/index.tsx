import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { X, Menu } from 'react-feather';

import basicLawData from '@/assets/basic-law.json';
import useIsMobile from '@/hooks/useIsMobile';
import PageTitle from '@/components/PageTitle/PageTitle';
import ChapterTitleNode from '@/components/ChapterTitleNode/ChapterTitleNode';
import SectionTitleNode from '@/components/SectionTitleNode/SectionTitleNode';
import SubtitleNode from '@/components/SubtitleNode/SubtitleNode';
import ParagraphNode from '@/components/ParagraphNode/ParagraphNode';
import ListNode from '@/components/ListNode/ListNode';
import Sidebar from '@/components/Sidebar/Sidebar';
import css from './index.module.scss';

export interface TextNode {
  id: number;
  type: string;
  text?: string;
  children?: TextNode[];
}

export default function HomePage() {
  const isMobile = useIsMobile();
  const [sidebarVisible, setSidebarVisible] = useState(() => !isMobile);

  useEffect(() => {
    setSidebarVisible(!isMobile);
  }, [isMobile]);

  const handleMenuClick = useCallback(() => {
    setSidebarVisible((prev) => !prev);
  }, []);

  const handleSidebarClick = useCallback(() => {
    if (isMobile) {
      setSidebarVisible(false);
    }
  }, [isMobile]);

  return (
    <div className={css.container}>
      <Head>
        <title>香港CRE基本法全文 | 香港CRE基本法測試</title>
      </Head>

      <PageTitle>香港CRE基本法全文</PageTitle>

      <hr />

      <div className={css.grid}>
        <div className={css.articleContainer}>
          {basicLawData.map((node: TextNode) => {
            switch (node.type) {
              case 'chapter-title':
                return (
                  <ChapterTitleNode
                    key={node.id}
                    id={node.id}
                    text={node.text}
                  />
                );
              case 'section-title':
                return (
                  <SectionTitleNode
                    key={node.id}
                    id={node.id}
                    text={node.text}
                  />
                );
              case 'subtitle':
                return <SubtitleNode key={node.id} text={node.text} />;
              case 'paragraph':
                return <ParagraphNode key={node.id} text={node.text} />;
              case 'list':
                return <ListNode key={node.id} node={node} />;
              case 'separator':
                return <hr key={node.id} />;
              default:
                return null;
            }
          })}
        </div>

        <div
          className={`${css.sidebarContainer} ${
            sidebarVisible ? css.visible : ''
          }`}
        >
          {isMobile && (
            <PageTitle
              style={{ padding: '0.4rem .8rem', marginBottom: '0.5rem' }}
            >
              目錄
            </PageTitle>
          )}
          <Sidebar onClick={handleSidebarClick} />
        </div>
      </div>

      {isMobile && (
        <button
          className={css.menuButton}
          aria-label="目錄"
          onClick={handleMenuClick}
        >
          {sidebarVisible ? <X /> : <Menu />}
        </button>
      )}
    </div>
  );
}
