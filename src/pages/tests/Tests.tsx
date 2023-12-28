import React from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Image } from 'react-native'
import { Course } from '../../components/learnig/Course'
import { LearnMenu, ResultsMenu, TestMenu } from '../../../assets/img';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const lessons = [
  {
    name: 'Бизнес-аналитика',
    desription: 'Колличество вопросов: 10, timing/мин: 10, сложность: light'
  },
  {
    name: 'Мировая бизнес-экономика',
    desription: 'Колличество вопросов: 15, timing/мин: 15, сложность: hard'
  },
  {
    name: 'Как продать ручку',
    desription: 'Колличество вопросов: 20, timing/мин: 20, сложность: normal'
  }
]

export const TestsPage = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.wrapperPage}>
      <Text style={styles.title}>Тесты</Text>
      {lessons.map(lesson => {
        return   <TouchableOpacity onPress={() => navigation.navigate('TestAnalitic')}  style={styles.wrapper}>
        <Text style={styles.name}>{lesson.name}</Text>
        <Text style={styles.description}>{lesson.desription}</Text>
       

    </TouchableOpacity>
      })}
        <View style={styles.menuBar}>
       <TouchableOpacity onPress={() => navigation.navigate('TestsPage')} >
        <Image style={styles.imgMenu} source={TestMenu}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('TestsPage')} >
        <Image style={styles.imgMenu} source={ResultsMenu}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Learning')} >
        <Image style={styles.imgMenu} source={LearnMenu}/>
       </TouchableOpacity>
       <View >w</View>
       </View>
    </View>
 
  )
}

const styles = StyleSheet.create({
  wrapperPage: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    width: windowWidth,
    paddingHorizontal: 10,
    paddingVertical: 20
 
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 25,
  
  },
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
    shadowColor: "green",
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
},
menuBar: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  padding: 20,
  marginTop: 210,
  width: '100%',
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
imgMenu: {
    width: 22,
    height: 22
  }


})




