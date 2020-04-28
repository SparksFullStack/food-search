import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }
})

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={30} />
            <Text>
                This is the search bar
            </Text>
        </View>
    )
}

export default SearchBar