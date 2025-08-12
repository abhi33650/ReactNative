import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ChatStackParamList } from "../Interface/Chat";

type ShowChatRouteProp = RouteProp<ChatStackParamList, "ShowChat">;

const ShowChat = () => {
  const route = useRoute<ShowChatRouteProp>();
  const { person } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: person.profile }} style={styles.avatar} />
      <Text style={styles.name}>{person.name}</Text>
      <Text style={styles.message}>{person.lastMessage}</Text>
      <Text style={styles.time}>{person.time}</Text>
    </View>
  );
};

export default ShowChat;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold" },
  message: { fontSize: 16, color: "#555" },
  time: { fontSize: 14, color: "#888" },
});
