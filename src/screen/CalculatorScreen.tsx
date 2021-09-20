import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { ColorsEnum } from '../enums/ColorsEnum'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
	return (
		<View style={styles.calculatorContainer}>
			<Text style={styles.inlineResult}>15000</Text>
			<Text style={styles.resultOperation}>15000</Text>

			<View style={styles.row}>
				<ButtonCalc text="C" color={ColorsEnum.LIGHT_GRAY} />
				<ButtonCalc text="+/-" color={ColorsEnum.LIGHT_GRAY} />
				<ButtonCalc text="del" color={ColorsEnum.LIGHT_GRAY} />
				<ButtonCalc text="/" color={ColorsEnum.ORANGE} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="7" />
				<ButtonCalc text="8" />
				<ButtonCalc text="9" />
				<ButtonCalc text="X" color={ColorsEnum.ORANGE} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="4" />
				<ButtonCalc text="5" />
				<ButtonCalc text="6" />
				<ButtonCalc text="-" color={ColorsEnum.ORANGE} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="1" />
				<ButtonCalc text="2" />
				<ButtonCalc text="3" />
				<ButtonCalc text="+" color={ColorsEnum.ORANGE} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="0" isWidth />
				<ButtonCalc text="." />
				<ButtonCalc text="+" color={ColorsEnum.ORANGE} />
			</View>

		</View>
	)
}
