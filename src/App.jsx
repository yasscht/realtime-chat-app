import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChanellListContainer from "./components/ChanellListContainer";
import ChanellContainer from "./components/ChanellContainer";
const API_KEY = "y2bazebtxmnw";
const client = StreamChat.getInstance(API_KEY);
function App() {
  return (
    <div className="app_wrapper">
      <Chat client={client} theme="theme light">
        <ChanellListContainer />
        <ChanellContainer />
      </Chat>
    </div>
  );
}

export default App;
