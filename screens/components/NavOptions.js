import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tailwind from "tailwind-rn";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../../slices/navSlice";
import { useSelector } from "react-redux";

const data = [
	{
		id: "123",
		title: "Get a ride",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "456",
		title: "Order food",
		image: "https://links.papareact.com/28w",
		screen: "EatsScreen",
	},
];

const NavOptions = () => {
	const origin = useSelector(selectOrigin);
	const navigation = useNavigation();
	return (
		<FlatList
			style={{ flexGrow: 0 }}
			data={data}
			keyExtractor={(item) => item.id}
			horizontal
			renderItem={({ item }) => (
				<TouchableOpacity
					disabled={!origin}
					onPress={() => navigation.navigate(item.screen)}
					style={tailwind(
						"p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60"
					)}
				>
					<View
						style={[!origin ? tailwind("opacity-20") : undefined]}
					>
						<Image
							style={{
								width: 120,
								height: 120,
								resizeMode: "contain",
							}}
							source={{ uri: item.image }}
						/>
						<Text style={tailwind("mt-2 text-lg font-bold")}>
							{item.title}
						</Text>
						<Icon
							style={tailwind(
								"p-2 bg-black rounded-full w-10 mt-4"
							)}
							name="arrowright"
							color="white"
							type="antdesign"
						></Icon>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;
