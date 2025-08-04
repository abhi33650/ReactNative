import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button } from "@react-navigation/elements";
import { chatInterface } from "./Interface/Chat";
import { chatData } from "./DummyData/chatData";

const Chat = () => {
  const [showData, setShowData] = useState<chatInterface[]>([]);

  useEffect(() => {
    setShowData(chatData);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      
      <TextInput 
        placeholder="Ask Meta AI or Search"
        style={styles.searchInput}
      />

     <View style={{display:"flex",flexDirection:"row",gap:5,margin:10,borderColor:"#999", }}>
      <Button onPress={()=>alert("this is all button")} style={styles.button}><Text style={styles.buttonText}>All</Text></Button>
      <Button onPress={()=>alert("this is unread button")} style={styles.button}><Text style={styles.buttonText}>Unread</Text></Button>
      <Button onPress={()=>alert("this is Favroutes button")} style={styles.button}><Text style={styles.buttonText}>Favroutes</Text></Button>
      <Button onPress={()=>alert("this is Group button")} style={styles.button}><Text style={styles.buttonText}>Group</Text></Button>
      <Button onPress={()=>alert("this is add button")} style={styles.button}><Text style={styles.buttonText}>+</Text></Button>
      </View>



      <FlatList
        data={showData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem}>
            <Image source={{ uri: item.profile }} style={styles.avatar} />
            <View style={styles.chatInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message} numberOfLines={1}>
                {item.lastMessage}
              </Text>
            </View>
            <Text style={styles.time} numberOfLines={1}>
                {item.time}
              </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  searchInput: {
    margin: 10,
    backgroundColor: "#eee",
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },
 button:{
    borderColor: "#999",
    borderWidth:1,
    backgroundColor:"transparent",
  },
  buttonText:{
    color:"#25D366",
  },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  message: {
    color: "#555",
    marginTop: 2,
    fontSize: 14,
  },
  time: {
    color: "#555",
    fontSize: 14,
  },
});
