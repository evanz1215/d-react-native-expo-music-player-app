import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const App = () => {
	return (
		<View style={styles.container}>
			<Text>Open ip App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
