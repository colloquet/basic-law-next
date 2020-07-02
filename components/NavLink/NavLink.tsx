import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName: string;
  exact?: boolean;
}

function NavLink({ children, href, className, activeClassName, exact, ...props }: Props) {
  const router = useRouter();

  const isActive = useMemo(() => {
    const url = typeof href === 'string' ? href : href.href;
    if (exact) {
      return router.pathname === url;
    }

    return router.pathname.startsWith(url);
  }, [href, router.pathname]);

  return (
    <Link href={href} {...props}>
      <a className={`${className} ${isActive ? activeClassName : ''}`}>{children}</a>
    </Link>
  );
}

export default NavLink;
