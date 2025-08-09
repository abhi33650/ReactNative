import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

import { chatInterface } from "./Interface/Chat";
import { chatData } from "./DummyData/chatData";
const Chat = () => {
  const [showData, setShowData] = useState<chatInterface[]>([]);
  const [isActive , setActive] = useState<string>("");
  const buttons: string[] = ["All", "Unread", "Favrotes", "Group", "+"]
  useEffect(() => {
    setShowData(chatData);
  }, []);
 console.log(isActive , " active data ");
 
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Ask Meta AI or Search"
        style={styles.searchInput}
      />
      <View style={styles.row}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {buttons.map((button) => {
            return (
              <TouchableOpacity style={[styles.button , isActive ===button && {backgroundColor:"#5FF28A"}]}  onPress={()=> setActive(button)}>
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
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
    borderColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    margin: 10,
  },
  button: {
    borderColor: "#999",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    padding: 5,
    borderRadius: 20,
    backgroundColor: "transparent",
    alignItems: "center",
    marginRight: 5,
  },
  buttonText: {
    color: "#666",
    fontWeight: "bold"
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
