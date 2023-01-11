import React from "react";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
import { auth } from "./firebase";
import Spinner from "react-spinkit"


function App() {
  const [user, loading] = useAuthState(auth);

if(loading){
  return(
    <AppLoading>
      <AppLoadingContents>
<img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"/>
<Spinner name='double-bounce' />
      </AppLoadingContents>
    </AppLoading>
  )
}


  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  {/** Chat */}
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading=styled.div`


`;
const AppLoadingContents =styled.div`
display: flex;
height: 100px;
text-align: center;
padding-bottom: 100px;
flex-direction: column;
justify-content: center;
align-items: center;
>img {
  height: 100px;
  padding: 20px;
}
`;