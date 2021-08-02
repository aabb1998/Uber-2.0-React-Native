import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-rn";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements/dist/icons/Icon";

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	return (
		<SafeAreaView style={tailwind("bg-white flex-1")}>
			<Text
				style={{
					textAlign: "center",
					fontSize: 16,
					paddingBottom: 2,
					paddingTop: 0,
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
			{/* <View
				style={[
					tailwind("flex-row bg-white justify-evenly py-2 pb-2"),
					{ marginTop: "auto" },
				]}
			>
				<TouchableOpacity
					onPress={() => navigation.navigate("RideOptions")}
					style={tailwind(
						"flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-evenly mt-4"
					)}
				>
					<Icon
						name="car"
						type="font-awesome"
						color="white"
						size={16}
					/>
					<Text style={tailwind("text-center text-white")}>
						Rides
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tailwind(
						"flex flex-row w-24 px-4 py-3 rounded-full justify-evenly mt-4"
					)}
				>
					<Icon
						name="fast-food-outline"
						type="ionicon"
						color="black"
						size={16}
					/>
					<Text style={tailwind("text-center")}>Eats</Text>
				</TouchableOpacity>
			</View> */}
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
