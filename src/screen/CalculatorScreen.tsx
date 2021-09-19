import React from 'react'
import { Text, View } from 'react-native'
import { ButtonNumber } from '../components/ButtonNumber'
import { ColorsEnum } from '../enums/ColorsEnum'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
	return (
		<View style={styles.calculatorContainer}>
			<Text style={styles.inlineResult}>15000</Text>
			<Text style={styles.resultOperation}>15000</Text>

			<View style={styles.row}>
				<ButtonNumber text="C" color={ColorsEnum.LIGHT_GRAY} />
				<ButtonNumber text="+/-" color={ColorsEnum.LIGHT_GRAY} />
				<ButtonNumber text="del" color={ColorsEnum.LIGHT_GRAY} />
				<ButtonNumber text="/" color={ColorsEnum.ORANGE} />
			</View>

			<View style={styles.row}>
				<ButtonNumber text="7" />
				<ButtonNumber text="8" />
				<ButtonNumber text="9" />
				<ButtonNumber text="X" color={ColorsEnum.ORANGE} />
			</View>

			<View style={styles.row}>
				<ButtonNumber text="4" />
				<ButtonNumber text="5" />
				<ButtonNumber text="6" />
				<ButtonNumber text="-" color={ColorsEnum.ORANGE} />
			</View>

			<View style={styles.row}>
				<ButtonNumber text="1" />
				<ButtonNumber text="2" />
				<ButtonNumber text="3" />
				<ButtonNumber text="+" color={ColorsEnum.ORANGE} />
			</View>

			<View style={styles.row}>
				<ButtonNumber text="0" isWidth />
				<ButtonNumber text="." />
				<ButtonNumber text="+" color={ColorsEnum.ORANGE} />
			</View>

		</View>
	)
}
