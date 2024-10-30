import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GenAI.css';

function GenAI() {
  const [isChatOpen, setChatOpen] = useState(false);
  const navigate = useNavigate();
  const toggleChat = () => {
    if(isChatOpen){
      navigate(-1)
    }else{
      navigate('/ai-chat');
    }
    
    setChatOpen(!isChatOpen);
    
  };

  return (
    <div className="GenAI">
      <div className="genai-logo" onClick={toggleChat}>
        <img src="./GenAi.png" alt="GenAI Logo" />
      </div>
    </div>
  );
}

export default GenAI;
