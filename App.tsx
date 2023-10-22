import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <ImageBackground
        source={require('./src/images/buket.jpeg')}
        style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.45)'}}>
          <View style={{marginTop: 100}}>
            <Text
              style={{
                fontSize: 36,
                color: '#FFFFFF',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Selamat Datang
            </Text>
            <Text
              style={{
                color: '#f5f5f5',
                textAlign: 'center',
              }}>
              Kami Siap Melayani Anda
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: 'rgba(0,0,0,0.45)', paddingBottom: 40}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: '#FFFFFF',
                alignSelf: 'center',
                marginLeft: 20,
              }}
            />
            <Text
              style={{
                color: '#f5f5f5',
                textAlign: 'center',
                paddingHorizontal: 20,
                fontWeight: 'bold',
              }}>
              Login dengan
            </Text>
            <View
              style={{
                flex: 1,
                height: 2,
                backgroundColor: '#FFFFFF',
                alignSelf: 'center',
                marginRight: 20,
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              marginHorizontal: 20,
              paddingVertical: 12,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 20,
              elevation: 2,
              flexDirection: 'row',
            }}>
            <Image
              source={require('./src/images/google.png')}
              style={{width: 25, height: 25, marginRight: 10}}
            />
            <Text style={{color: '#212121', fontWeight: 'bold'}}>
              Login dengan Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#1c1c1e',
              marginHorizontal: 20,
              paddingVertical: 12,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 8,
              elevation: 2,
              flexDirection: 'row',
            }}>
            <Image
              source={require('./src/images/facebook.png')}
              style={{width: 25, height: 25, marginRight: 10}}
            />
            <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
              Login dengan Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#1c1c1e',
              marginHorizontal: 20,
              paddingVertical: 12,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 8,
              elevation: 2,
              flexDirection: 'row',
            }}>
            <Image
              source={require('./src/images/apple-white.png')}
              style={{width: 25, height: 25, marginRight: 10}}
              resizeMode="contain"
            />
            <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
              Login dengan Apple
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                color: '#f5f5f5',
                textAlign: 'center',
                paddingHorizontal: 20,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              Belum punya akun?{' '}
              <Text style={{textDecorationLine: 'underline'}}>
                registrasi disini
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
