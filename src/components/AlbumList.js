import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount(){
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => this.setState({albums: response.data}));
    }

    renderAlbums(){
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    
    }
 render(){
    return (
        <View>
            {this.renderAlbums()}
        </View>
       );
}
};

const styles = {
    viewStyle:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
       // paddingTop: 15,
        elevation: 2,
        position: 'relative'
    },
 textStyle:{
     fontSize: 36
 }
};

export default AlbumList;