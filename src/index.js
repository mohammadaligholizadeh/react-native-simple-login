import { StackNavigator } from 'react-navigation';
import loginapp from "./login";
import ProfileScreen from "./profile";

const Routes = {
    LoginScreen: {
        screen: loginapp
    },
    ProfileScreen: {
        screen: ProfileScreen
    }
};

const MyApplicationNavigator = StackNavigator(Routes, {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
});

export default MyApplicationNavigator;