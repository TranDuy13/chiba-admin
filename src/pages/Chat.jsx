import "../components/product.scss";
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from "react-redux";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { messageAI, reset } from "../components/features/chatbot/chatbotSlice";
import { useEffect, useState } from "react";

function Chat(prpos) {
  const { open } = prpos;
  const { messagesChat } = useSelector((state) => state.ai);
  const dispatch = useDispatch();
  useEffect(() => {
    if (messagesChat != "") {
      setA((a) => [...a, messagesChat[0]]);
      setA((a) => [...a, messagesChat[1]]);
    }

    dispatch(reset());
  }, [dispatch, reset, messagesChat]);
  const [formData, setFormData] = useState();
  const [a, setA] = useState([
    {
      data: "Chào bạn! Chiba's bot có thể giúp gì được cho ban",
      direction: "incoming",
    },
  ]);
  const onChange = (e) => {
    setFormData(e);
  };

  const handleSend = (message) => {
    const sendMessage = {
      text: message,
      direction: "incoming",
    };
    dispatch(messageAI(sendMessage));
  };

  return (
    <>
      <div className="bg-gray-09 py-[50px]">
        <div
          style={{
            position: "fixed",
            width: "432px",
            height: "500px",
            marginTop: "100px",
            marginLeft: "300px",
            zIndex: "9999",
            right: "8px",
            bottom: "65px",
          }}
        >
          <div className="flex w-full bg-white p-[5px] pl-[20px] text-[#ee4d2d] text-lg font-[600] justify-between border-b-[1.5px]">
            Chat 
            <button onClick={open}><CloseIcon sx={{color:'gray', fontSize:'20px', padding:'0'}}/></button>
          </div>
          <MainContainer>
            <ChatContainer>
              <MessageList>
                {a.map((item) => (
                  <Message
                    className=""
                    model={{
                      message: item.data,
                      sentTime: "just now",
                      sender: "Joe",
                      direction: item.direction,
                    }}
                  />
                ))}
              </MessageList>
              <MessageInput
                onChange={onChange}
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </>
  );
}
export default Chat;
