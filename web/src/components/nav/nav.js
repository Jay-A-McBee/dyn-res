import * as S from './styles';
import { NextLink } from '../link';

const Nav = () => {
  return (
    <S.Nav>
      <p>J. Austin McBee</p>
      <S.LinksContainer>
        <NextLink href="/about">About</NextLink>
        <NextLink href="/projects">Projects</NextLink>
        <NextLink href="/resume">Resume</NextLink>
      </S.LinksContainer>
    </S.Nav>
  );
};

export default Nav;
