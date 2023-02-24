import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";
import TabNavigator from "./tabs";
import react from "react";

const AppNavigator = ()=>{
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
};

export default AppNavigator;