import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';

import * as Screens from './src/screens';

const renderTabIcons = (navigation, tintColor) => {
  const { routeName } = navigation.state;

  let iconName;
  if (routeName === 'Decks') {
    iconName = 'md-bookmarks';
  } else if (routeName === 'NewDeck') {
    iconName = 'ios-add-circle';
  }

  return (
    <Ionicons
      name={iconName}
      size={25}
      color={tintColor}
    />
  );
}

const HomeTabNavigator = createBottomTabNavigator({
  Decks: Screens.DeckList,
  NewDeck: Screens.DeckForm,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => renderTabIcons(navigation, tintColor)
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeTabNavigator,
      navigationOptions: () => ({
        title: 'Flashcards',
      }),
    },
    DeckDetails: {
      screen: Screens.DeckDetails,
      navigationOptions: () => ({
        title: 'Deck Details',
      }),
    },
    CardForm: {
      screen: Screens.CardForm,
      navigationOptions: () => ({
        title: 'New Card',
      }),
    },
    Quiz: {
      screen: Screens.Quiz,
      navigationOptions: () => ({
        title: 'Quiz',
      }),
    },
  },
);

export default createAppContainer(AppNavigator);