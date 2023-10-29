import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import FlashcardScreen from "./src/screens/FlashcardScreen";
import CardInputScreen from "./src/screens/FlashcardCreationScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    FlashCards: FlashcardScreen,
    CardInput: CardInputScreen
  },
  {
    initialRouteName: "CardInput",
    defaultNavigationOptions: {
      //title: "App",
    },
  }
);

export default createAppContainer(navigator);
