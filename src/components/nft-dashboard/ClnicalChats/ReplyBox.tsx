import React from 'react';
import { ReplyContainer, ReplyEmojis, ReplyMain, ReplyRecording, ReplySend } from './ClinicalChats.style'; 

const ReplyBox: React.FC = () => {
  return (
    <ReplyContainer>
      <ReplyMain>
        <textarea rows={1} placeholder="Type your message..." />
      </ReplyMain>
      <ReplySend>
        <button>Send</button>
      </ReplySend>
    </ReplyContainer>
  );
};

export default ReplyBox;
