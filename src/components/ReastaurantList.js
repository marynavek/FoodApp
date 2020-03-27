import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'

const RestaurantList = ({header, results}) => {
    return <View>
        <Text style ={styles.headerStyle}>{header}</Text>
        <FlatList 
            horizontal
            data={results}
            keyExtractor = {(result) => result.id}
            renderItem ={({item}) => {
                return <Text>{item.name}</Text>
            }}
        />
<Text>Results: {results.length}</Text>
    </View>
}

const styles = StyleSheet.create ({
    headerStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default RestaurantList