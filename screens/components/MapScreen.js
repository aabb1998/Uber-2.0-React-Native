import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import Map from "./Map";

const MapScreen = () => {
	return (
		<View>
			<View style={tailwind("h-1/2")}>
				<Map />
			</View>
			<View style={tailwind("h-1/2")}></View>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
