import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const NavBarContainer = styled.div`
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 0;
    margin: 0 0 0 20%;
    position: relative;
    z-index: 2;
    width: 80%;
    height: 50px;
`;


export function NavBar() {

const params = useLocation();

const name = params.pathname.split('/')[1];
const CapitalizeName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <>
            <NavBarContainer>
                <h1>{params.pathname === '/' ? 'Dashboard' : CapitalizeName}</h1>
            </NavBarContainer>
        </>
    )
}
