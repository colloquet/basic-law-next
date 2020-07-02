import Link from 'next/link';
import { Sun, Moon } from 'react-feather';

import useIsMobile from '@/hooks/useIsMobile';
import useDarkMode from '@/hooks/useDarkMode';
import TopAppBar from '@/components/TopAppBar/TopAppBar';
import NavLink from '@/components/NavLink/NavLink';
import css from './Navbar.module.scss';

function Navbar() {
  const isMobile = useIsMobile();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <TopAppBar zIndex={2} disabled={!isMobile}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <Link href="/">
            <a className={`${css.navLink} ${css.isLogo}`}>BasicLaw.hk</a>
          </Link>

          <button className={css.nightModeToggle} onClick={() => toggleDarkMode()} title={darkMode ? '開燈' : '熄燈'}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className={css.navbarRight}>
            <NavLink href="/" className={css.navLink} activeClassName={css.isActive}>
              基本法全文
            </NavLink>
            <NavLink href="/practice" className={css.navLink} activeClassName={css.isActive}>
              CRE基本法測試練習試題
            </NavLink>
            <NavLink href="/about" className={css.navLink} activeClassName={css.isActive}>
              關於
            </NavLink>
          </div>
        </div>
      </div>
    </TopAppBar>
  );
}

export default Navbar;
