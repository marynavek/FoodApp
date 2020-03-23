import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar = () => {
    return <View style = {styles.backgroundStyle}>
        <Feather name = 'search' style ={styles.iconStyle}/>
        <TextInput placeholder = 'Search' style = {styles.inputStyle}/>
    </View>
}

const styles = StyleSheet.create ({
    backgroundStyle: {
        height: 50,
        marginTop:10,
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18, 
        marginLeft: 10
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    }
})

export default SearchBar