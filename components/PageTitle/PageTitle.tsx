import React from 'react';

import styles from './PageTitle.module.scss';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function PageTitle({ children, style, ...props }: Props) {
  return (
    <h2 className={styles.pageTitle} {...props} style={style}>
      {children}
    </h2>
  );
}

export default PageTitle;
