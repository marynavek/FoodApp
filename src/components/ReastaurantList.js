import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import {withNavigation} from 'react-navigation';

const RestaurantList = ({header, results, navigation}) => {
    return <View style ={styles.containerStyle}>
        <Text style ={styles.headerStyle}>{header}</Text>
        <FlatList 
            showsHorizontalScrollIndicator = {false}
            horizontal
            data={results}
            keyExtractor = {(result) => result.id}
            renderItem ={({item}) => {
                return (
                    <TouchableOpacity onPress ={() => 
                    navigation.navigate('RestaurantSingle', { id: item.id})}>
                      <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
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

export default withNavigation(RestaurantList)