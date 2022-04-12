import { useEffect, useState } from "react";
import { useChatContext } from "stream-chat-react";
import { SearchIcon } from "../assets";
const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getChannels = async (text) => {
    try {
      // TODO : fetch channels
    } catch (e) {
      setQuery("");
    }
  };
  const onSearch = (e) => {
    setIsLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);
  };
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="channel-search__input__text"
          placeholder="Search"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};
export default ChannelSearch;
