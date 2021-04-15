import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { color } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')

const Songcard = ({item }) => {
    console.log(item)
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}> {item.collectionName}</Text>
            <Text style={styles.author}>{item.artistName} </Text>
            {/* <Image style={styles.image} source = {{uri: item.urlToImage}}/> */}
            <Image style={styles.image} source={item.artworkUrl100 ? {uri: item.artworkUrl100 } : null}/>
            <Text style={styles.description}>{item.collectionCensoredName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'

    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'

    }

})



export default Songcard