import React from 'react';
import {
  App,
  Conversation,
  MessageBody,
  Receiver,
  Sender,
  MessageText,
  MessageTime,
  ReplyBox,
} from './ClinicalChats.style'; // Adjust the path to match your project structure
import chatData from './chat_api.json';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';

const ChatUI = () => {
  return (
    <App id="app">
      <Conversation id="conversation">
        {chatData.map((chat) => (
          <MessageBody key={chat.id}>
            {chat.sender === 'receiver' ? (
              <Receiver>
                <MessageText>{chat.message}</MessageText>
                <MessageTime>{chat.time}</MessageTime>
              </Receiver>
            ) : (
              <Sender>
                <MessageText>{chat.message}</MessageText>
                <MessageTime>{chat.time}</MessageTime>
              </Sender>
            )}
          </MessageBody>
        ))}

        <ReplyBox>
          <BaseRow>
            <BaseCol>
              <BaseInput />
            </BaseCol>
            <BaseCol></BaseCol>
          </BaseRow>
        </ReplyBox>
      </Conversation>
    </App>
  );
};

export default ChatUI;
