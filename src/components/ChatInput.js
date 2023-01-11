import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { db } from "../firebase";
import {
  doc,
  updateDoc,
  serverTimestamp,
  getFirestore,
} from "firebase/firestore";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("channel", channelId);
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Ameni Abdelghani",
      userImage:
        "https://secure.gravatar.com/avatar/13b3353609eadecf58020381d876ebda.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0017-192.png",
    });
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit " onClick={sendMessage}>
          
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
`;
