import React, { useState } from 'react';
import { View, Text, TextInput }  from 'react-native';
import { CheckBox, CheckBoxValue } from 'react-native-elements';


const ProfileScreen = () => {
    {/*Vertical Label*/}
    return(
        <View style={{ display: 'flex', width: '100%', flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: '400'}}>Имя</Text>
            <TextInput style={{width: '100%', height: 44, backgroundColor: 'skyblue', marginTop: 6, borderRadius: 6, paddingHorizontal: 10}}/>
            
            <Text style={{fontSize: 18, fontWeight: '400'}}>Электронная почта</Text>
            <TextInput style={{width: '100%', height: 44, backgroundColor: 'skyblue', marginTop: 6, borderRadius: 8, paddingHorizontal: 10}}/>
            
            <Text style={{fontSize: 18, fontWeight: '400'}}>На что у вас аллргия?</Text>

            <CheckBox
            containerStyle={{ marginLeft: 0, width: '100%' }}
            title={'Орехи'}
            checked={CheckBoxValue}
            textStyle={{ color: '#10ac84' }}
            onPress={() => this.onePressed(al)}/>

            <CheckBox
            containerStyle={{ marginLeft: 0, width: '100%' }}
            title={'Молоко'}
            checked={CheckBoxValue}
            textStyle={{ color: '#10ac84' }}
            onPress={() => this.onePressed(al)}/>

            <CheckBox
            containerStyle={{ marginLeft: 0, width: '100%' }}
            title={'Цитрусы'}
            checked={CheckBoxValue}
            textStyle={{ color: '#10ac84' }}
            onPress ={() => this.onePressed(al)}/>

            <CheckBox
            containerStyle={{ marginLeft: 0, width: '100%' }}
            title={'Шоколад'}
            checked={CheckBoxValue}
            textStyle={{ color: '#10ac84' }}
            onPress={() => this.onePressed(al)}/>

            <CheckBox
            containerStyle={{ marginLeft: 0, width: '100%' }}
            title={'Яйца'}
            checked={CheckBoxValue}
            textStyle={{ color: '#10ac84' }}
            onPress={() => this.onePressed(al)}/>

            
        </View>
    )
}

export default ProfileScreen;