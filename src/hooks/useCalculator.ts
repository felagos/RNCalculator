import { useState, useRef } from "react";
import { OperatorsEnum } from "../enums/OperationsEnum";

export const useCalculator = () => {

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

	return {
		number,
		previousNumber,
		cleanCalc,
		postitiveNegative,
		handleDelete,
		handleOperation,
		concatNumber,
		calculate
	}


}