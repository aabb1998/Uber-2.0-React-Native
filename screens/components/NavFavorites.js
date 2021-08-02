import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { ICONS } from "jest-util/build/specialChars";
import tailwind from "tailwind-rn";

const data = [
	{
		id: "123",
		icon: "home",
		location: "Home",
		destination: "Longtol Street, Lakemba, AU",
	},
	{
		id: "456",
		icon: "briefcase",
		location: "Work",
		destination: "50 HillCrest St, Punchbowl, AU",
	},
];

const NavFavorites = () => {
	return (
		<FlatList
			style={tailwind("pr-5")}
			data={data}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => (
				<View style={[tailwind("bg-gray-200 h-1"), { height: 0.7 }]} />
			)}
			renderItem={({ item: { location, icon, destination } }) => (
				<TouchableOpacity style={tailwind("flex-row items-center p-3")}>
					<Icon
						style={tailwind("mr-4 rounded-full bg-gray-300 p-3")}
						name={icon}
						type="ionicon"
						color="white"
						size={18}
					/>
					<View>
						<Text style={tailwind("font-semibold text-lg")}>
							{location}
						</Text>
						<Text style={tailwind("text-gray-500")}>
							{destination}
						</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavFavorites;

const styles = StyleSheet.create({});
