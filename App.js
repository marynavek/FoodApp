import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantDetails from './src/screens/RestaurantDetails';

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantSingle: RestaurantDetails
  },{
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
    }
});

export default createAppContainer(navigator)