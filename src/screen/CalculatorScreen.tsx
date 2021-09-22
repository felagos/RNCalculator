import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { ColorsEnum } from '../enums/ColorsEnum'
import { OperatorsEnum } from '../enums/OperationsEnum'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {

	const [number, setNumber] = useState('0');
	const [previousNumber, setPreviousNumber] = useState('0');

	const lastOperation = useRef<OperatorsEnum | null>(null);

	const cleanCalc = () => {
		setPreviousNumber('0');
		setNumber('0');
	}

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

	const changeToPrevious = () => {
		if (number.endsWith('.')) setPreviousNumber(number.slice(0, -1))
		else setPreviousNumber(number);

		setNumber('0')
	}

	const handleOperation = (operation: OperatorsEnum) => {
		return () => {
			changeToPrevious();
			lastOperation.current = operation;
		}
	}

	const calculate = () => {
		const num1 = Number(number)
		const num2 = Number(previousNumber)

		if (lastOperation.current === OperatorsEnum.ADD) setNumber(`${num1 + num2}`)
		if (lastOperation.current === OperatorsEnum.SUBTRACT) setNumber(`${num2 - num1}`)
		if (lastOperation.current === OperatorsEnum.MULTIPLY) setNumber(`${num1 * num2}`)
		if (lastOperation.current === OperatorsEnum.DIVIDE) setNumber(`${num2 / num1}`)

		setPreviousNumber('0')

	}

	return (
		<View style={styles.calculatorContainer}>
			{previousNumber !== '' && <Text style={styles.inlineResult}>{previousNumber}</Text>}
			<Text style={styles.resultOperation} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>

			<View style={styles.row}>
				<ButtonCalc text="C" color={ColorsEnum.LIGHT_GRAY} action={cleanCalc} />
				<ButtonCalc text="+/-" color={ColorsEnum.LIGHT_GRAY} action={postitiveNegative} />
				<ButtonCalc text="del" color={ColorsEnum.LIGHT_GRAY} action={handleDelete} />
				<ButtonCalc text="/" color={ColorsEnum.ORANGE} action={handleOperation(OperatorsEnum.DIVIDE)} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="7" action={concatNumber} />
				<ButtonCalc text="8" action={concatNumber} />
				<ButtonCalc text="9" action={concatNumber} />
				<ButtonCalc text="X" color={ColorsEnum.ORANGE} action={handleOperation(OperatorsEnum.MULTIPLY)} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="4" action={concatNumber} />
				<ButtonCalc text="5" action={concatNumber} />
				<ButtonCalc text="6" action={concatNumber} />
				<ButtonCalc text="-" color={ColorsEnum.ORANGE} action={handleOperation(OperatorsEnum.SUBTRACT)} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="1" action={concatNumber} />
				<ButtonCalc text="2" action={concatNumber} />
				<ButtonCalc text="3" action={concatNumber} />
				<ButtonCalc text="+" color={ColorsEnum.ORANGE} action={handleOperation(OperatorsEnum.ADD)} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="0" isWidth action={concatNumber} />
				<ButtonCalc text="." action={concatNumber} />
				<ButtonCalc text="=" color={ColorsEnum.ORANGE} action={calculate} />
			</View>

		</View>
	)
}
