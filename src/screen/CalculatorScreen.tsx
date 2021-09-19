import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
	return (
		<View style={styles.calculatorContainer}>
			<Text style={styles.inlineResult}>15000</Text>
			<Text style={styles.resultOperation}>15000</Text>

			<View>
				<View style={styles.button}>
					<Text style={styles.buttonText}>1</Text>
				</View>
			</View>
		</View>
	)
}
