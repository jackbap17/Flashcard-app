import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import FlashcardScreen from "./src/screens/FlashcardScreen";
import CardInputScreen from "./src/screens/FlashcardCreationScreen";

const navigator = createStackNavigator(
  {
    CardInput: CardInputScreen
  },
  {
    initialRouteName: "CardInput",
    defaultNavigationOptions: {
      title: "Flashcards",
    },
  }
);

export default createAppContainer(navigator);
