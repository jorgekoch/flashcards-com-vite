import styled from 'styled-components';
import logo from '../images/logo.png';

export default function Topo() {
    return (
        <Head>
            <Logo src={logo} alt="Logo" />
            <Name>ZapRecall</Name>
        </Head>
    );
}

const Head = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 255;
height: 60;
`

const Logo = styled.img`
height: 60px;
`

const Name = styled.p`
font-size: 24px;
font-weight: bold;
`   
