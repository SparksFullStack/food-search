import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, NavigatorScreens } from '../../App';
import SearchBar from '../components/SearchBar';

type SearchScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, NavigatorScreens.SEARCH>,
    route: RouteProp<RootStackParamList, NavigatorScreens.SEARCH>
}

const styles = StyleSheet.create({})

const SearchScreen = ({ navigation, route }: SearchScreenProps) => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <SearchBar />
            <Text>
                This is the search screen!
            </Text>
        </View>
    )
}

export default SearchScreen