import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'

const ResultsDetail = ({result}) => {
    return <View style ={styles.containerStyle}>
        <Image style = {styles.imageStyle}
            source = {{ uri: result.image_url}}/>
        <Text style = {styles.nameStyle}>Result Name: {result.name}!</Text>
<Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create ({
    containerStyle: {
        marginLeft: 10
    },
    imageStyle: {
        height: 150,
        width: 250, 
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold'
    },
    detailsStyle: {

    }
})

export default ResultsDetail