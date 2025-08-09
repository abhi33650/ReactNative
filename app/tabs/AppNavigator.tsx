import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Chat from '../Chat';
import Updates from '../Updates';
import Call from '../Call';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const showSearch = route.name === 'Updates' || route.name === 'Call';

        return {
          tabBarActiveTintColor: '#25D366',
          headerTintColor: '#25D366',
          headerTitle: 'WhatsApp',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Chats') iconName = 'chatbubble-ellipses-outline';
            else if (route.name === 'Updates') iconName = 'people-outline';
            else if (route.name === 'Call') iconName = 'call-outline';
            else iconName = 'help-outline'; // Fallback icon to ensure iconName is always assigned

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Ionicons
                name="qr-code-outline"
                size={24}
                color="black"
                style={{ marginRight: 15 }}
                onPress={() => alert('QR Scanner pressed')}
              />
              {showSearch ? (
                <Ionicons
                  name="search-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 15 }}
                  onPress={() => alert('Search pressed')}
                />
              ) : (
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 15 }}
                  onPress={() => alert('Camera pressed')}
                />
              )}
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color="black"
                onPress={() => alert('Options pressed')}
              />
            </View>
          ),
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
