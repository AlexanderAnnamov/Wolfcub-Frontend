import React from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Image } from 'react-native'
import { Course } from '../../components/learnig/Course'
import { IconWolf, LearnMenu, LogoutMenu, ResultsMenu, TestMenu } from '../../../assets/img';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const lessons = [
  {
    name: 'Бизнес-аналитика',
    desription: 'Колличество вопросов: 10, timing/мин: 10, сложность: light',
  },

]

export const ResultsPage = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.wrapperPage}>
       <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={styles.title}>Результаты</Text>
        <Image style={{width:35, height: 35}} source={IconWolf}/>
      </View>
      <Text style={{color: '#be91f7',  fontWeight: '600', fontSize: 16}}>29 декабря, 2023 год</Text>
      {lessons.map(lesson => {
        return   <TouchableOpacity onPress={() => navigation.navigate('TestAnalitic')}  style={styles.wrapper}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', columnGap: 130}}>
            <Text style={styles.name}>{lesson.name}</Text>
            <Text style={{color: 'red'}}>3/10</Text>
            </View>
       
        <Text style={styles.description}>{lesson.desription}</Text>
       

    </TouchableOpacity>
      })}
        <View style={styles.menuBar}>
       <TouchableOpacity onPress={() => navigation.navigate('TestsPage')} >
        <Image style={styles.imgMenu} source={TestMenu}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Results')} >
        <Image style={styles.imgMenu} source={ResultsMenu}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Learning')} >
        <Image style={styles.imgMenu} source={LearnMenu}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('LoginPage')} >
        <Image style={styles.imgMenu} source={LogoutMenu}/>
       </TouchableOpacity>
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
    color: 'green'
  
  },
  hard: {
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
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 10,
  },
  normal: {
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
    shadowColor: "yellow",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 10,
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
    shadowColor: "#be91f7",
    borderWidth: 2,
    borderColor: '#be91f7',
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
  marginTop: 370,
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




