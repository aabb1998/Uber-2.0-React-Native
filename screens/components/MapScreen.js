import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import Map from "./Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "./NavigateCard";
import RideOptions from "./RideOptions";

const MapScreen = () => {
	const Stack = createStackNavigator();

	return (
		<View>
			<View style={tailwind("h-1/2")}>
				<Map />
			</View>
			<View style={tailwind("h-1/2")}>
				<Stack.Navigator>
					<Stack.Screen
						name="NavigateCard"
						component={NavigateCard}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="RideOptions"
						component={RideOptions}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
			</View>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
