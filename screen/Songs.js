import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList,ActivityIndicator } from 'react-native'
import Songcard from '../component/Songcard'
import newAPI from '../api/SongApi'
import LoadingView from 'react-native-loading-view'

const Songs = ({ navigation }) => {

    // const [news, setNews] = useState([])
    const [songs, setSongs] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getSongsFromAPI()
    }, [])

    // const newsResponse = async() =>{
    //     const response = await newAPI.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
    //     console.log(response.data)
    // }

    function getSongsFromAPI() {
        newAPI.get('search?term=Michael+jackson')
            .then(async function (response) {
                setSongs(response.data.results);
                setLoader(false);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    if (!songs) {
        return null
    }



    return (
        <View >
      
            
            <FlatList data={songs}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <Songcard item = {item}/>
                }}
            /> 
       <View style = {styles.container}>
      <ActivityIndicator textContent={'Loading...'}
 style = {styles.activityIndicator} size="large" color="#00ff00" />
      </View>
        </View>
    )
            }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 70
         },
        activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
});


export default Songs