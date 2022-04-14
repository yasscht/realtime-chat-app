import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer, Auth } from "./components";
import "./App.css";
const API_KEY = "y2bazebtxmnw";
const cookies = new Cookies();
const client = StreamChat.getInstance(API_KEY);

const authToken = cookies.get("token");
if (authToken) {
  client.connectUser(
    {
      token: cookies.get("token"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      id: cookies.get("userId"),
      phoneNumber: cookies.get("phoneNumber"),
      image: cookies.get("avatarUrl"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    authToken
  );
}
function App() {
  if (!authToken) return <Auth />;
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
