import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Conversations from './Screens/Conversations';
import Conversation from './Screens/conversation';
import Settings from './Screens/settings';
import AuthLoading from './Screens/authLoading';

const Stack = createStackNavigator();

function ConversationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Conversations"
        component={Conversations}
        options={{ title: 'All conversations' }}
      />
      <Stack.Screen
        name="Conversation"
        component={Conversation}
        options={{ title: 'Conversation' }}
      />
      <Stack.Screen
        name="AuthLoading"
        component={AuthLoading}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Conversations') {
              iconName = `${
                Platform.OS === 'ios' ? 'ios' : 'md'
              }-chatbubbles`;
            } else if (route.name === 'Settings') {
              iconName = `${
                Platform.OS === 'ios' ? 'ios' : 'md'
              }-star`;
            }

            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: '#556',
        }}
      >
        <Tab.Screen
          name="Conversations"
          component={ConversationsStack}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
