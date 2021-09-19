import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ColorsEnum } from '../enums/ColorsEnum';

interface IProps {
	text: string;
	color?: ColorsEnum;
	width?: boolean;
}

export const ButtonNumber = ({ text, color = ColorsEnum.DARK_GRAY, width = false }: IProps) => {
	const btnStyles = {
		...styles.button,
		backgroundColor: color,
		width: width ? 180 : 80
	};
	const textStyles = { ...styles.buttonText, color: color === ColorsEnum.LIGHT_GRAY ? 'black' : 'white' };

	return (
		<TouchableOpacity>
			<View style={btnStyles}>
				<Text style={textStyles}>{text}</Text>
			</View>
		</TouchableOpacity>
	)

}

const styles = StyleSheet.create({
	button: {
		height: 80,
		width: 80,
		borderRadius: 100,
		justifyContent: 'center',
		marginHorizontal: 10
	},
	buttonText: {
		fontSize: 30,
		textAlign: 'center',
		padding: 10,
		color: 'white',
		fontWeight: '300'
	}
});