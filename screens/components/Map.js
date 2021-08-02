import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tailwind from "tailwind-rn";
import { selectOrigin } from "../../slices/navSlice";

const Map = () => {
	const origin = useSelector(selectOrigin);

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
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({});
