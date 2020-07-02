import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName: string;
}

function NavLink({ children, href, className, activeClassName, ...props }: Props) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} {...props}>
      <a className={`${className} ${isActive ? activeClassName : ''}`}>{children}</a>
    </Link>
  );
}

export default NavLink;
