import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKMIxWSdD_b-Bs26BdK_6_gxeRqMjZIcM",
  authDomain: "socialapp-21018.firebaseapp.com",
  databaseURL: "https://socialapp-21018.firebaseio.com",
  projectId: "socialapp-21018",
  storageBucket: "socialapp-21018.appspot.com",
  messagingSenderId: "278557753020",
  appId: "1:278557753020:web:fbb2489064a38a8871dab9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
