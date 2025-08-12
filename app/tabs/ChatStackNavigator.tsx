import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../Chat";
import React from "react";
import ShowChat from "../Screen/ShowChat";
import { ChatStackParamList } from "../Interface/Chat";
const Stack = createNativeStackNavigator<ChatStackParamList>();
export default function ChatStackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="ChatList" component={Chat} options={{ headerShown: false }}/>
             <Stack.Screen name="ShowChat" component={ShowChat} options={{title:"Chat"}}/>
        </Stack.Navigator>
    )
}