import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-rn";

const RideOptions = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={tailwind("bg-white flex-grow")}>
			<View>
				<TouchableOpacity
					style={tailwind(
						"rounded-full top-6 right-40 text-center justify-center"
					)}
					onPress={() => navigation.navigate("NavigateCard")}
				>
					<Icon name="chevron-left" type="fontawesome" />
				</TouchableOpacity>
				<Text style={tailwind("text-center text-xl py-0")}>
					Select a Ride
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default RideOptions;

const styles = StyleSheet.create({});
