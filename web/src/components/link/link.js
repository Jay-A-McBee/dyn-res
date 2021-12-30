import * as S from './styles';
import Link from 'next/link';

const NextLink = ({ children, href, passHref, ...rest }) => (
  <Link href={href} passHref={passHref} {...rest}>
    <S.Link>{children}</S.Link>
  </Link>
);

NextLink.defaultProps = {
  passHref: true,
};

export default NextLink;
