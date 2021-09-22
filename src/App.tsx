import React from 'react';
import {SafeAreaView} from 'react-native';
import {CalculatorScreen} from './screen/CalculatorScreen';
import {styles} from './theme/appTheme';

export const App = () => {
	return (
		<SafeAreaView style={styles.background}>
			<CalculatorScreen />
		</SafeAreaView>
	);
};
