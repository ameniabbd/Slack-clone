import React from "react";
import styled from "styled-components";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Button } from "@mui/material";
import { auth } from "../firebase";

function Header() {
  return (
    <HeaderContainer>
      {/** Header left */}
      <HeaderLeft>
        <AccessTimeIcon
          sx={{ fontSize: 22 }}
          style={{ Opacity: 0.8, cursor: "pointer" }}
        />
      </HeaderLeft>

      {/** Header search  */}
      <HeaderSearch>
        <input placeholder="Search"></input>
        <TuneOutlinedIcon
          sx={{ fontSize: 22, color: "#fff", paddingRight: 1 }}
        />
        <SearchOutlinedIcon sx={{ fontSize: 22, paddingRight: 2 }} />
      </HeaderSearch>

      {/** Header right */}
      <HeaderRight>
        <HelpOutlineOutlinedIcon
          sx={{ fontSize: 22 }}
          style={{ Opacity: 0.8, cursor: "pointer" }}
        />
        <AccountCircleRoundedIcon
          sx={{ fontSize: 22 }}
          style={{ Opacity: 0.8, cursor: "pointer" }}
        />

        <LogoutIcon
          onClick={()=>auth.signOut()}
          sx={{ fontSize: 22 }}
          style={{ Opacity: 0.8, cursor: "pointer" }}
        />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 100px;
  > .MuiSvgIcon-root {
    margin-left: 100%;
    margin-right: 20%;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #5d3d5e;
  text-align: center;
  display: flex;
  color: gray;
  border: 0px gray solid;
  padding: 0px;
  margin-right: 30%;
  > input {
    background-color: #5d3d5e;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
    border-radius: 6px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: 20;
    margin-right: 10px;
  }
`;
