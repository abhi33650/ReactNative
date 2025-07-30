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
import { chatInterface } from "../Interface/Chat";
import { chatData } from "../DummyData/chatData";

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

     
<ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: 10 }}
      contentContainerStyle={{ paddingRight: 10 }}
    >
      <View style={styles.buttonRow}>
        <Button onPressIn={()=>alert("this is all button")} style={styles.button}>All</Button>
        <Button onPressIn={()=>alert("this is unread button")} style={styles.button}>Unread</Button>
        <Button onPressIn={()=>alert("this is Favroutes button")} style={styles.button}>Favroutes</Button>
        <Button onPressIn={()=>alert("this is Group button")} style={styles.button}>Group</Button>
        <Button onPressIn={()=>alert("this is add button")} style={styles.button}>+</Button>
       
      </View>
    </ScrollView>


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
  buttonRow: {
    flexDirection: "row",
    gap: 5,
    margin: 10,
    borderColor:"#999",
  },button:{
    borderColor: "#999",
    borderWidth:1,
    backgroundColor:"transparent",
    color:"black",
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
});
