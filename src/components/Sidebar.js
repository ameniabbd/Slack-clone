import React from "react";
import styled from "styled-components";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import SidebarOptions from "./SidebarOptions";
import {db} from "../firebase"
import {
  Add,
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  ExpandMore,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import {useCollection} from "react-firebase-hooks/firestore"

function Sidebar() {
  const [channels,loading,error]=useCollection(db.collection('rooms'))
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>
            React Js
            <EditRoundedIcon
              sx={{ fontSize: 20 }}
              style={{
                Opacity: 0.5,
                cursor: "pointer",
                color: "black",
                backgroundColor: "white",
                borderRadius: 17,
                padding: 2,
                marginLeft: 100,
              }}
            />
          </h2>
          <h3>
            <FiberManualRecordRoundedIcon />
            Ameni Abdelghani
          </h3>
        </SidebarInfo>
      </SidebarHeader>
      <SidebarOptions Icon={InsertComment} title="Threads" />
      <SidebarOptions Icon={Inbox} title="Mentions & reactions" />
      <SidebarOptions Icon={Drafts} title="Saved items" />
      <SidebarOptions Icon={BookmarkBorder} title="channel browser" />
      <SidebarOptions Icon={PeopleAlt} title="People & user groups" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <SidebarOptions Icon={FileCopy} title="File browser" />
      <SidebarOptions Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOptions Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOptions Icon={Add} addChannelOption title="Add Channel" />
      {channels?.docs.map(doc=>(
         <SidebarOptions key={doc.id}  id={doc.id}  title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  max-width: 250px;
  margin-top: 42px;
  border-top: 1px #49274b solid;

  > hr {
    margin-top: 8px;
    margin-bottom: 8px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  border-bottom: 1px #49274b solid;
  display: flex;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 5px;
  }
  > h3 {
    flex: 1;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 3px;
    margin-right: 2px;
    padding-top: 2px;
    margin: 0px 5px;
    color: green;
  }
`;
