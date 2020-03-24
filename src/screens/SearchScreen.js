import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const searchAPI = async () => {
        //this rout will be concat to the baseURL. 
        //have to make it async call and make sure that response is waiting for the response
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                //since keys for the term are identical, it can be substituted by single term
                term: term,
                location: 'san jose'
            }
        })
        setResults(response.data.businesses)
    }
    
    return <View>
        <SearchBar term = {term} 
        onTermChange={setTerm}
        onTermSubmit ={searchAPI}
        />
        <Text>Search Screen</Text>
        <Text>We have found {results.length} results</Text>
    </View>
}

const styles = StyleSheet.create ({})

export default SearchScreen