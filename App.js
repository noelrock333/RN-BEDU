import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Camera from './components/Camera';
import Notes from './components/Notes';
import Layout from './components/Layout';

// At the top of your file
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  let [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadFonts()
  });
  
  async function loadFonts() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setLoading(false)
  }

  if (loading) {
    return (
      <View>
        <Text>No han cargado las fuentes</Text>
      </View>
    )
  } else {
    return <Layout />
  }
}

