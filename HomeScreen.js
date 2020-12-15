import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { Item } from '../components';

const DATA = [
  {
    id: '1',
    title: 'Гайд по использованию приложения'
  },
  {
    id: '2',
    title: 'Что такое аллергия? Рекмендации'
  },
  {
    id: '3',
    title: 'Специальные места, где продают гипоаллергенную еду'
  },
]

const HomeScreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'gray' : '#accbe8';
    return(
      <Item item={item} backgroundColor={backgroundColor}  handleOnPress = {()=> navigation.navigate('Details')}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default HomeScreen;