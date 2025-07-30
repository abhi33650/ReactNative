import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Chat from "../tabs/Chat";
import Updates from "../tabs/Updates";
import Call from "../tabs/Call";
import { Ionicons } from '@expo/vector-icons';
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const showSearch = route.name === "Updates" || route.name === "Call";

        return {
          tabBarActiveTintColor: '#25D366',
          headerTintColor: '#25D366',
          headerTitle: "WhatsApp",
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10 }}>
              <Ionicons
                name="qr-code-outline"
                size={24}
                color="black"
                onPress={() => alert("QR Scanner pressed")}
              />
              {showSearch ? (
                <Ionicons
                  name="search-outline"
                  size={24}
                  color="black"
                  onPress={() => alert("Search pressed")}
                />
              ) : (
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color="black"
                  onPress={() => alert("Camera pressed")}
                />
              )}
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color="black"
                onPress={() => alert("Options pressed")}
              />
            </View>
          )
        };
      }}
    >
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Updates" component={Updates} />
      <Tab.Screen name="Call" component={Call} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
