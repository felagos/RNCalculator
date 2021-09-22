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
		if (number.includes('.') && valueButton === '.') return;

		if (number.startsWith('0') || number.startsWith('-0')) {
			if (valueButton === '.') return setNumber(number + valueButton);
			if (valueButton === '0' && number.includes('.')) return setNumber(number + valueButton);
			if (valueButton !== '0' && !number.includes('.')) return setNumber(valueButton);
			if (valueButton === '0' && !number.includes('.')) return setNumber(number);
		}

		return setNumber(number + valueButton);
	}

	const postitiveNegative = () => {
		if (number.includes('-')) setNumber(number.replace('-', ''))
		else setNumber('-' + number)
	}

	const handleDelete = () => {
		if (number.includes('-') && number.length === 2) setNumber("0");
		else {
			const numberDelete = number.slice(0, -1)
			const newNumber = numberDelete === "" ? '0' : numberDelete;
			setNumber(newNumber)
		}
	}

	return (
		<View style={styles.calculatorContainer}>
			<Text style={styles.inlineResult}>{previousNumber}</Text>
			<Text style={styles.resultOperation} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>

			<View style={styles.row}>
				<ButtonCalc text="C" color={ColorsEnum.LIGHT_GRAY} action={cleanCalc} />
				<ButtonCalc text="+/-" color={ColorsEnum.LIGHT_GRAY} action={postitiveNegative} />
				<ButtonCalc text="del" color={ColorsEnum.LIGHT_GRAY} action={handleDelete} />
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
