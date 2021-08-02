import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-rn";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	return (
		<SafeAreaView style={tailwind("bg-white flex-1")}>
			<Text
				style={{
					textAlign: "center",
					fontSize: 16,
					paddingBottom: 12,
				}}
			>
				Good Morning, Abdul
			</Text>
			<View style={tailwind("border-t border-gray-200 flex-shrink")}>
				<GooglePlacesAutocomplete
					styles={toInputBoxStyles}
					onPress={(data, details = null) => {
						dispatch(
							setDestination({
								location: details.geometry.location,
								description: data.description,
							})
						);
						navigation.navigate("RideOptions");
					}}
					fetchDetails={true}
					returnKeyType={"search"}
					minLength={2}
					query={{
						key: GOOGLE_MAPS_APIKEY,
						language: "en",
					}}
					enablePoweredByContainer={false}
					nearbyPlacesAPI="GooglePlacesSearch"
					debounce={400}
					placeholder="Where to?"
				/>
			</View>
			<NavFavorites />
		</SafeAreaView>
	);
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		paddingTop: 20,
		flex: 0,
	},
	textInput: {
		backgroundColor: "#dddddf",
		borderRadius: 0,
		fontSize: 16,
		borderRadius: 10,
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBottom: 0,
	},
});
