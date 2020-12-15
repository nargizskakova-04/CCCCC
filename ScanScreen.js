import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity }  from 'react-native';
const LogoItem = () => {
    return(
      <View style={styles.logoContainer}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Сканирование</Text>
        
      </View>
    )
  }


const ScanScreen = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Text style={{ textAlign: 'center'}}>ScanScreen</Text>
        </View>
    )
}

export default ScanScreen;
