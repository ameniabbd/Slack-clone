import React from 'react';
import styled from 'styled-components';

function Message({message,timestamp,user,userImage}) {
  return (
    <MessageContainer>
        <img src={userImage}/>
        <MessageInfo>
            <h4>{user}
            <span>{new Date (timestamp?.toData().toUTCString())}</span>
            </h4>

        </MessageInfo>
      
    </MessageContainer>
  );
}

export default Message;
const MessageContainer=styled.div``;
const MessageInfo=styled.div``