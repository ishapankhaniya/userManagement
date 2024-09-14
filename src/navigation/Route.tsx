import {
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={'UserListScreen'}>
      <Stack.Screen name={'UserListScreen'} component={UserListScreen} options={{headerShown:false}}/>
      <Stack.Screen name={'UserDetailsScreen'} component={UserDetailsScreen}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
