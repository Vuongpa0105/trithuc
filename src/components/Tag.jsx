import { CloseOutlined } from "@ant-design/icons/lib/icons";
import { Button } from "antd";

const Tag = ({ content, index, handleDeleteWord }) => {
  const styleTag = {
    borderRadius: "2px",
    textAlign: "center",
    height: "30px",
    background: "#e6fffb",
    width: "initial",
    position: "relative",
  }
  const handleClick = () => {
    handleDeleteWord(index)
  }
  return (
    <div className="tag" style={styleTag}>
      {content}
      <Button 
        style={{
          position: "absolute",
          // top: "1px",
          right: "4px",
          background: "transparent",
          border: "none",
          width: "10px",
          height: "10px",
        }}
        icon={<CloseOutlined />}
        onClick={handleClick}
      >
      </Button>
    </div>
  );
};

export default Tag;
