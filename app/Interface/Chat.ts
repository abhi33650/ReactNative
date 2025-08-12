export interface chatInterface{
    name:string,
    lastMessage : string,
    profile : string,
    time : string
}
export type ChatStackParamList = {
    ChatList: undefined; 
    ShowChat: { person: chatInterface }; 
  };