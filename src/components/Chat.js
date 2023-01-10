import React from "react";
import styled from "styled-components";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore"
import { db } from "../firebase";
import Message from "./Message";
function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  )
  const [roomMessage] = useCollection(
    roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy("timestamp", "asc"))


  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong> #{roomDetails?.data().name}</strong>
              <StarBorderRoundedIcon />
            </h4>
          </HeaderLeft>
          <HeaderRight>
            <p>
              <ErrorOutlineRoundedIcon /> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessage>{roomMessage?.docs.map(
          doc => {
            const { message, timestamp, user, userImage } = doc.data()
            return 
            <Message
              key={doc.id}
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}


            />

          }

        )}</ChatMessage>
        <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />
      </>
    </ChatContainer>
  );
}

export default Chat;
const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 50px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 20px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 10px !important;
    font-size: 20px;
  }
`;
const ChatMessage = styled.div`

`;
