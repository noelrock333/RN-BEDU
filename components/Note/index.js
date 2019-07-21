import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  item: {
    fontSize: 30,
    color: 'white'
  } 
});

function Note({ item }) {
  let [showDescription, setShowDescription] = useState(false);
  
  return (
    <TouchableOpacity onPress={()=> setShowDescription(!showDescription)}>
      <View style={{ backgroundColor: 'blue'}}>
        <Text style={styles.item}>{item.title}</Text>
        {showDescription &&
          <Text>{item.description}</Text>
        }
      </View>
    </TouchableOpacity>
  )
}

export default Note;