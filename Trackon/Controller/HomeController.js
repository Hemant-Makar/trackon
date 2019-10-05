import React, {Component} from 'react';
import{StyleSheet, View, Text} from 'react-native';

const Styles = StyleSheet.create({

    container: 
    {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: 
    {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

});

export default class HomeController extends Component {

    render() {
        return (
            <View style={Styles.container}>
                <Text style = {Styles.title}>Welcome to Trackon</Text>
            </View>
        )
    }
}
