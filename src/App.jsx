import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer } from "./components";
import "./App.css";
const API_KEY = "y2bazebtxmnw";
const client = StreamChat.getInstance(API_KEY);
function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="theme light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
