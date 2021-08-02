import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";
import tailwind from "tailwind-rn";
import { selectDestination, selectOrigin } from "../../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
	const origin = useSelector(selectOrigin);
	const destination = useSelector(selectDestination);

	return (
		<MapView
			style={{ flex: 1 }}
			mapType="mutedStandard"
			initialRegion={{
				latitude: origin.location.lat,
				longitude: origin.location.lng,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}
		>
			{origin && destination && (
				<MapViewDirections
					origin={origin.description}
					destination={destination.description}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={3}
					strokeColor="black"
				/>
			)}
			{origin?.location && (
				<Marker
					title="Origin"
					description={origin.description}
					identifier="origin"
					coordinate={{
						latitude: origin.location.lat,
						longitude: origin.location.lng,
					}}
				/>
			)}
			{destination?.location && (
				<Marker
					title="Destination"
					description={destination.description}
					identifier="origin"
					coordinate={{
						latitude: destination.location.lat,
						longitude: destination.location.lng,
					}}
				/>
			)}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({});
