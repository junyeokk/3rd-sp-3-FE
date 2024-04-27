import useStore from "@/features/channel/model/store";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import DocumentIcon from "@/assets/document.png";

const renderDocumentIcon = () => (
  <img
    src={DocumentIcon}
    alt="Document"
    style={{ width: "24px", height: "24px", marginRight: "10px" }}
  />
);

export const DocumentList: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
  }));

  return (
    <ItemList
      label="문서"
      items={
        currentChannel?.documents.map((doc) => ({
          id: doc.id,
          name: doc.title,
        })) || []
      }
      renderIconBefore={renderDocumentIcon}
    />
  );
};
