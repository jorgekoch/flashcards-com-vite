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
width: 255px;
height: 60px;
margin-top: 20px;
`

const Logo = styled.img`
height: 60px;
`

const Name = styled.p`
font-family: Righteous;
font-weight: 400;
font-size: 36px;
line-height: 100%;
letter-spacing: -1.2%;
text-align: center;
vertical-align: middle;
color: white;
`   
