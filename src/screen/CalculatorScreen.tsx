import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { ColorsEnum } from '../enums/ColorsEnum'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {

	const [number, setNumber] = useState('0');
	const [previousNumber, setPreviousNumber] = useState('0');

	const cleanCalc = () => setNumber('');

	const concatNumber = (valueButton: string) => {
		setNumber(number + valueButton);
	}

	return (
		<View style={styles.calculatorContainer}>
			<Text style={styles.inlineResult}>{previousNumber}</Text>
			<Text style={styles.resultOperation} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>

			<View style={styles.row}>
				<ButtonCalc text="C" color={ColorsEnum.LIGHT_GRAY} action={cleanCalc} />
				<ButtonCalc text="+/-" color={ColorsEnum.LIGHT_GRAY} action={cleanCalc} />
				<ButtonCalc text="del" color={ColorsEnum.LIGHT_GRAY} action={cleanCalc} />
				<ButtonCalc text="/" color={ColorsEnum.ORANGE} action={cleanCalc} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="7" action={concatNumber} />
				<ButtonCalc text="8" action={concatNumber} />
				<ButtonCalc text="9" action={concatNumber} />
				<ButtonCalc text="X" color={ColorsEnum.ORANGE} action={cleanCalc} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="4" action={concatNumber} />
				<ButtonCalc text="5" action={concatNumber} />
				<ButtonCalc text="6" action={concatNumber} />
				<ButtonCalc text="-" color={ColorsEnum.ORANGE} action={cleanCalc} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="1" action={concatNumber} />
				<ButtonCalc text="2" action={concatNumber} />
				<ButtonCalc text="3" action={concatNumber} />
				<ButtonCalc text="+" color={ColorsEnum.ORANGE} action={cleanCalc} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="0" isWidth action={concatNumber} />
				<ButtonCalc text="." action={concatNumber} />
				<ButtonCalc text="+" color={ColorsEnum.ORANGE} action={cleanCalc} />
			</View>

		</View>
	)
}
