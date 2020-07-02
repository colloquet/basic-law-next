import React from 'react';
import { BookOpen, List, HelpCircle } from 'react-feather';

import css from './BottomBar.module.scss';
import NavLink from '@/components/NavLink/NavLink';

function BottomBar() {
  return (
    <div className={css.container}>
      <NavLink href="/" exact className={css.navItem} activeClassName={css.active}>
        <BookOpen size="24" />
        <span>全文</span>
      </NavLink>
      <NavLink href="/practice" className={css.navItem} activeClassName={css.active}>
        <List size="24" />
        <span>試題</span>
      </NavLink>
      <NavLink href="/about" className={css.navItem} activeClassName={css.active}>
        <HelpCircle size="24" />
        <span>關於</span>
      </NavLink>
    </div>
  );
}

export default BottomBar;
