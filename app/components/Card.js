import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

//components
import colors from '../config/colors'
import AppText from './AppText';


const Card = ({ 
    title, 
    author, 
    views, 
    duration, 
    logo, 
    time, 
    imageUrl,
}) => {
 return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            // source={{ uri: imageUrl}}
            source={require('../assets/photo.jpg')}
        />
        <View style={styles.detailsContainer}>
            <Image
                source={ require('../assets/jacket.jpg')}
                // source={{ uri: logo}}
                style={styles.logo} 
            />
            <View style={styles.subDetail}>
                <AppText style={styles.title} 
                    numberOfLines={2}
                >
                   10 PHOTOGRAPHY IDEAS at HOME (quarantine)
                    {/* {title} */}
                </AppText>
                <View style={styles.details}>
                    <AppText style={styles.sub}>
                        Jordi Koalitic <Text as='span'>. </Text>
                        {/* { author} */}
                    </AppText>
                    <AppText style={styles.sub}>
                        {/* {views}  */}
                       24M views <Text as='span'>. </Text>
                    </AppText>
                    <AppText style={styles.sub}>
                        {/* {duration}  */}
                        11 months ago 
                    </AppText>
                </View>
            </View>
            {/* <MaterialCommunityIcons name='dots-vertical' size={24} color="gray" /> */}
        </View>
    </View>
);
}

const styles = StyleSheet.create({
 container: {
     marginBottom: 5,
     overflow: 'hidden',
     backgroundColor: colors.white
 },
 image: {
     width: '100%',
     height: 200
 },
 detailsContainer: {
     padding: 12,
     flexDirection: 'row'
 },
 logo: {
    width: 40,
    height: 40,
    borderRadius: 20
 },
 details: {
     flexDirection: 'row',
     color: 'gray',
     fontSize: 8
 },
  sub :{
    fontSize: 12
 },
 subDetail: {
    paddingLeft: 10
 },
 title: {
     fontSize: 20
 }
});

export default Card;