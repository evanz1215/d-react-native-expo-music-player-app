import TracksList from '@/components/TracksList'
import { defaultStyles } from '@/styles'
import { ScrollView, StyleSheet, View } from 'react-native'

export default function SongsScreen() {
	return (
		<View style={defaultStyles.container}>
			<ScrollView>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({})
