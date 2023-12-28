import React from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export const Course = ({name, description, navigation}: {name: string, description: string, navigation?: any}) => {
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('LessonsPage')}  style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 80,
        // backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        alignItems: 'flex-start',
        rowGap: 5,
        justifyContent: 'flex-start',
        borderRadius: 20,
        // shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 10,
    },
    name: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    description: {
        fontFamily: 'Montserrat',
    }
})
