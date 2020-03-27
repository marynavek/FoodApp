import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/ReastaurantList';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchAPI, results, errorMsg] = useResults()

    const filterResultsByPrive = (price) => {
        return results.filter(result => {
            return result.price == price
        })
    }
    
    return (
    <View>
        <SearchBar 
        term = {term}  
        onTermChange={setTerm} 
        onTermSubmit ={() => searchAPI(term)}/>
        {errorMsg ? <Text>{errorMsg}</Text> : null}
        <Text>We have found {results.length} results </Text>  
        <RestaurantList header = "Cost Effective" results={filterResultsByPrive('$')}/>    
        <RestaurantList header = "Bit Pricer" results={filterResultsByPrive('$$')}/>    
        <RestaurantList header = "Big Spender" results={filterResultsByPrive('$$$')}/>    
    </View>
    )
}

const styles = StyleSheet.create ({})

export default SearchScreen