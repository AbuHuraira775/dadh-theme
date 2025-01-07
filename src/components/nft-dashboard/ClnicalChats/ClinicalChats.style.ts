import styled from 'styled-components';


export const Conversation = styled.div`
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export const MessageBody = styled.div`
  margin: 0 !important;
  padding: 0 !important;
  width: auto;
  height: auto;
`;

export const App = styled.div`
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #333;
`;

export const Receiver = styled.div`
  width: auto !important;
  padding: 4px 10px 7px !important;
  border-radius: 10px 10px 10px 0;
  background: #ffffff;
  font-size: 12px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  word-wrap: break-word;
  display: inline-block;
  margin-top: 10px;  

`;

export const Sender = styled.div`
  float: right;
  width: auto !important;
  background: #dcf8c6;
  border-radius: 10px 10px 0 10px;
  padding: 4px 10px 7px !important;
  font-size: 12px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  display: inline-block;
  word-wrap: break-word;
  margin-top: 10px;  
`;

export const MessageText = styled.div`
  margin: 0 !important;
  padding: 5px !important;
  word-wrap: break-word;
  font-weight: 200;
  font-size: 14px;
  padding-bottom: 0 !important;
`;

export const MessageTime = styled.span`
  margin: 0 !important;
  margin-left: 50px !important;
  font-size: 12px;
  text-align: right;
  color: #9a9a9a;
`;

export const ClinicalChats = styled.div`
  position: relative;
  overflow: hidden;
  top: 19px;
  height: calc(100% - 38px);
  margin: auto !important;
  padding: 0 !important;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  background: #25284B;
`;

export const ReplyBox = styled.div`
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;