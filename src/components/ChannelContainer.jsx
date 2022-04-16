import { Channel, useChatContext, MessageTeam } from "stream-chat-react";
import { ChannelInner, CreateChannel, EditChannel } from "./";

const ChannelContainer = ({
  isCreating,
  isEditing,
  setIsCreating,
  setIsEditing,
  createType,
}) => {
  const { channel } = useChatContext();
  if (isCreating) {
    return (
      <CreateChannel createType={createType} setIsCreating={setIsCreating} />
    );
  }
  if (isEditing) {
    return <EditChannel setIsEditing={setIsEditing} />;
  }
  const EmptyState = () => {
    <div className="channel-empty__container">
      <p className="channel-empty__first">This is the beggining of yur chat</p>
      <p className="channel-empty__second">Send messages,videos,images....</p>
    </div>;
  };
  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};
export default ChannelContainer;
