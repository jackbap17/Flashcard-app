import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'hii'
    return (
    <View>
    <Text style={styles.textStyle }>Components</Text>
    <Text>{greeting}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        backgroundColor: 'red'
    }
})

export default ComponentsScreen; 