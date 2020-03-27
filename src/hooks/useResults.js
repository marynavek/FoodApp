import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    const searchAPI = async (searchTerm) => {
        console.log("hi there")
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMsg('Something went wrong')
        }
    }

    useEffect(() => {
        searchAPI('pasta')
    }, [])

    return [searchAPI, results, errorMsg]
}