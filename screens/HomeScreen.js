import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tailwind from "tailwind-rn";
import NavOptions from "./components/NavOptions";

const HomeScreen = () => {
	return (
		<SafeAreaView style={tailwind("bg-white h-full")}>
			<View>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{
						uri: "https://links.papareact.com/gzs",
					}}
				/>
			</View>
			<NavOptions />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
