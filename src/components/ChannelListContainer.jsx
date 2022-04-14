import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
const cookies = new Cookies();
const ChannelListContainer = () => {
  const logout = () => {
    cookies.remove("token");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("userId");
    cookies.remove("phoneNumber");
    cookies.remove("avatarUrl");
    cookies.remove("hashedPassword");
    window.location.reload();
  };
  return (
    <>
      <SideBar logout={logout} />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="team"
              preview={(previewProps) => (
                <TeamChannelPreview {...previewProps} type="team" />
              )}
            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="messaging"
              preview={(previewProps) => (
                <TeamChannelPreview {...previewProps} type="messaging" />
              )}
            />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Medical Pager</p>
  </div>
);
const SideBar = ({ logout }) => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="hospital" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2" onClick={logout}>
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
);
