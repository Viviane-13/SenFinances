import logoImg from '../../assets/logo.svg';
import {Container, Content} from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="SenFinances" />
      </Content>
    </Container>
  );
}

export default Header;
