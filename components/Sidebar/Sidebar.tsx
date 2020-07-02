import React, { useRef, useEffect, useMemo } from 'react';

import basicLawData from '@/assets/basic-law.json';
import useWindowSize from '@/hooks/useWindowSize';
import css from './Sidebar.module.scss';

const nodeListToArray = (nodeList) => {
  const array = [];
  for (var i = 0, ref = (array.length = nodeList.length); i < ref; i++) {
    array[i] = nodeList[i];
  }
  return array;
};

const titleList = basicLawData
  .filter(
    (node) => node.type === 'chapter-title' || node.type === 'section-title',
  )
  .map((node) => ({
    id: `${node.type === 'chapter-title' ? 'chapter' : 'section'}-${node.id}`,
    isSection: node.type === 'section-title',
    anchor: `#${node.type === 'chapter-title' ? 'chapter' : 'section'}-${
      node.id
    }`,
    label: node.text,
  }));

function Sidebar({
  onClick,
}: {
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const container = useRef(null);
  const { width } = useWindowSize();

  useEffect(() => {
    const titleNodes = titleList.map((title) =>
      typeof document === 'undefined' ? [] : document.getElementById(title.id),
    );

    const offsetTopById = nodeListToArray(titleNodes).reduce(
      (all, chapter) => ({
        ...all,
        [chapter.id]: chapter.offsetTop,
      }),
      {},
    );

    const scrollHandler = () => {
      const scrollPosition =
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop);
      const ids = Object.keys(offsetTopById);

      let last = titleList[0].id;
      for (let index = 0; index < ids.length; index += 1) {
        const key = ids[index];
        if (offsetTopById[key] <= Math.ceil(scrollPosition)) {
          last = key;
        }
      }

      const link = document.querySelector(`[href="#${last}"]`);
      const activeLink = document.querySelector('[data-is-active]');
      if (activeLink) {
        activeLink.removeAttribute('data-is-active');
      }
      if (link) {
        link.setAttribute('data-is-active', 'true');
      }
    };

    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [width]);

  return (
    <div ref={container} className={css.container} data-list>
      <ul className={css.list}>
        {titleList.map((title) => (
          <li
            key={title.anchor}
            className={`${css.listItem} ${
              title.isSection ? css.isSection : ''
            }`}
          >
            <a href={title.anchor} onClick={onClick}>
              {title.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
