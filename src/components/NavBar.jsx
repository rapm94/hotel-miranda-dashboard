import styled from 'styled-components'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { BiSearchAlt2 } from 'react-icons/bi'
import {
  FaRegHeart,
  FaRegEnvelope,
  FaRegBell,
  FaRegCommentAlt,
} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  min-width: 350px;
  position: fixed;
`

const NavBarIcon = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
`

const HamburgerMenu = styled(HiOutlineMenuAlt2)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`
const StyledSearchContainer = styled.form`
  display: flex;
  align-items: center;
  width: 351px;
  height: 57px;
  background-color: ${(props) => props.theme.secondaryBgColor};
  border: none;
  border-radius: 12px;
  margin: 0px 35px;
`

const StyledSearchBar = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 25px;
  font: normal normal 300 14px/21px Poppins;
  color: ${(props) => props.theme.secondaryFontColor};
  background-color: ${(props) => props.theme.secondaryBgColor};
  border: none;
  &:focus {
    outline: none;
  }
`
const StyledSearchIcon = styled(BiSearchAlt2)`
  font-size: 35px;
  color: ${(props) => props.theme.secondaryFontColor};
  margin-right: 29px;
`

const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  justify-self: flex-start;
  margin-left: ${(props) => (props.toggle ? '300px' : '-15px')};
`
const MenuAndSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  width: 100%;
  justify-self: flex-end;
`
const HeartIcon = styled(FaRegHeart)`
  font-size: 25px;
  color: ${(props) => props.theme.primaryColor};
  margin: 0px 20px;
  cursor: pointer;
`
const EnvelopeIcon = styled(FaRegEnvelope)`
  font-size: 25px;
  color: ${(props) => props.theme.primaryColor};

  cursor: pointer;
  margin: 0px 20px;
`
const BellIcon = styled(FaRegBell)`
  font-size: 25px;
  color: ${(props) => props.theme.primaryColor};
  margin: 0px 20px;
  cursor: pointer;
`
const ChatIcon = styled(FaRegCommentAlt)`
  font-size: 25px;
  color: ${(props) => props.theme.primaryColor};
  margin: 0px 20px;
  cursor: pointer;
`
const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  justify-self: flex-end;
  margin-right: 20px;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`

const PageName = styled.h1`
  font: bold 300 30px Poppins;
  color: ${(props) => props.theme.titleColor};
`
const LanguageSelector = styled.select`
  width: 100px;
  height: 40px;
  font: normal normal 300 14px/21px Poppins;
  color: ${(props) => props.theme.errorColor};
  background-color: transparent;
  border: none;
  border-radius: 12px;
  margin: 0px 20px;
  cursor: pointer;
`
const LanguageOption = styled.option` 
  font: normal normal 300 14px/21px Poppins;
  color: ${(props) => props.theme.errorColor};
  background-color: ${(props) => props.theme.secondaryBgColor};
  border: none;
  border-radius: 12px;
`

const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.secondaryBgColor};
  marign-right: 20px;
`

export function NavBar(props) {
  const params = useLocation()

  const name = params.pathname.split('/')[1]
  const CapitalizeName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <>
      <NavBarContainer>
        <HamburgerMenuContainer toggle={props.toggle}>
          <HamburgerMenu onClick={props.handler} />
        </HamburgerMenuContainer>
        <PageName>
          {params.pathname === '/' ? 'Dashboard' : CapitalizeName}
        </PageName>
        <MenuAndSearchContainer>
          <StyledSearchContainer>
            <StyledSearchBar />
            <StyledSearchIcon />
          </StyledSearchContainer>
          <HeartIcon />
          <EnvelopeIcon />
          <BellIcon />
          <ChatIcon />
          <AvatarContainer>
            <Avatar
              src={`https://avatars.dicebear.com/api/male/${Math.floor(
                Math.random(),
              )}.svg`}
            />
          </AvatarContainer>
          <VerticalLine/>
          <NavBarIcon>
            <LanguageSelector name="lang" id="lang">
              <LanguageOption value="ESP">ES</LanguageOption>
              <LanguageOption value="ENG" defaultChecked>
                EN
              </LanguageOption>
            </LanguageSelector>
          </NavBarIcon>
        </MenuAndSearchContainer>
      </NavBarContainer>
    </>
  )
}
