import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
		background: {
			flex: 1,
			backgroundColor: 'black',
		},
		calculatorContainer: {
			flex: 1,
			paddingHorizontal: 20,
			justifyContent: 'flex-end'
		},
		resultOperation: {
			color: 'white',
			fontSize: 60,
			textAlign: 'right'
		},
		inlineResult: {
			color: 'rgba(255, 255, 255, 0.5)',
			fontSize: 30,
			textAlign: 'right'
		},
		button: {
			height: 80,
			width: 80,
			backgroundColor: '#9B9B9B',
			borderRadius: 100,
			justifyContent: 'center'
		},
		buttonText: {
			fontSize: 30,
			textAlign: 'center',
			padding: 10,
			color: 'black',
			fontWeight: '300'
		}
});