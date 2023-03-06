import { Button, Text, View } from "react-native";

import { Card } from "../../components";
import HomeScreen from "../homescreen";
import React from "react";
import TextContainer from "../../components/text-container/index";
import {colors} from "../../constants/theme/colors";
import { styles } from "./styles";

const Buyscreen =({selectedBuy,navigation})=>{
    return(
        <View style={styles.container}>
            <Card style={styles.content}>
            <Text style={styles.content}>Buy Screen </Text>
            
            <TextContainer text={selectedBuy}/>
            </Card>

            <Button title="Go to HomeScreen" onPress={()=>navigation.navigate('HomeScreen')} color={colors.primary}/>
        </View>
    )
}

export default Buyscreen;