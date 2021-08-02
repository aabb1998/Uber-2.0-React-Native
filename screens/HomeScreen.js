import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tailwind from "tailwind-rn";
import NavOptions from "./components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
	const dispatch = useDispatch();

	return (
		<SafeAreaView style={tailwind("bg-white h-full pl-6")}>
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
				<GooglePlacesAutocomplete
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description,
							})
						);
						dispatch(setDestination(null));
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
					placeholder="Where From?"
				/>
			</View>
			<NavOptions />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
