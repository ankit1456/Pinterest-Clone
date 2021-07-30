import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TextsmsRoundedIcon from "@material-ui/icons/TextsmsRounded";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FaceIcon from "@material-ui/icons/Face";
import { Avatar } from "@material-ui/core";
import { useState } from "react";

const Header = ({ onSearchSubmit }) => {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    onSearchSubmit(search);
    setSearch("");
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href='/'>Home</a>
      </HomePageButton>
      <FollowingButton>
        <a href='/'>Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <SearchIcon />

          <form>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type='text'
              placeholder='Search'
            />
            <button onClick={onSearch} type='submit'></button>
          </form>
        </SearchBarWrapper>

        <IconsWrapper>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <TextsmsRoundedIcon />
          </IconButton>
          <IconButton>
            <Avatar src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'>
              <FaceIcon />
            </Avatar>
          </IconButton>

          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </IconsWrapper>
      </SearchWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5.6rem;
  padding: 1.2rem 0.4rem 0.4rem 1.6rem;
  color: #000;
`;
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 3.2rem;
    cursor: pointer;
  }
`;
const HomePageButton = styled.div`
  display: flex;
  height: 4.8rem;
  min-width: 12.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 2.4rem;
  cursor: pointer;
  background-color: rgb(17, 17, 17);
  margin-right: 0.3rem;

  a {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
  }
`;
const FollowingButton = styled(HomePageButton)`
  background-color: #fff;
  transition: all.2s ease-in;
  a {
    color: #000;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;
const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5rem;
  border: none;
  height: 4.8rem;
  padding-left: 1rem;
  padding-right: 1rem;

  .MuiSvgIcon-root {
    font-size: 2.1rem;
  }
  form {
    display: flex;
    align-items: center;
    flex: 1;
  }
  form > input {
    border: none;
    background-color: transparent;
    width: 100%;
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }
  form > button {
    display: none;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    font-size: 2.5rem;
  }
`;
