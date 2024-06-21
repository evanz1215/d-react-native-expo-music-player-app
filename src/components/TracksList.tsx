import { FlatList, FlatListProps } from 'react-native'
import library from '@/assets/data/library.json'
import TracksListItem from './TracksListItem'

export type TracksListProps = Partial<FlatListProps<unknown>>

const TracksList = ({ ...flatlistProps }: TracksListProps) => {
	return (
		<FlatList
			data={library}
			renderItem={({ item: track }) => (
				<TracksListItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
			{...flatlistProps}
		></FlatList>
	)
}

export default TracksList
