import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const RestaurantList = ({header, results}) => {
    return <View style ={styles.containerStyle}>
        <Text style ={styles.headerStyle}>{header}</Text>
        <FlatList 
            showsHorizontalScrollIndicator = {false}
            horizontal
            data={results}
            keyExtractor = {(result) => result.id}
            renderItem ={({item}) => {
                return <ResultsDetail result={item}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create ({
    headerStyle: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    containerStyle: {
        marginBottom: 10
    }
})

export default RestaurantList