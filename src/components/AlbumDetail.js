import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
const {title, artist, thumbnail_image } = album;
    return(
     <Card>
         <CardSection>
             <View style={styles.headerContentStyle}>
             <Image source={{uri:thumbnail_image}}/>
             </View>
        <View>
         <Text>{title}</Text>
         <Text>{artist}</Text>
         </View>
         </CardSection>
     </Card>
    );
};

const styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;