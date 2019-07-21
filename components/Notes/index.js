import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import Note from '../Note';
import axios from 'axios';

async function fetchNotes(callback) {
  try {
    const response = await axios.get('https://notes-workshop.herokuapp.com/notes.json')
    const { data } = response;
    callback(data);
  } catch(err) {
    callback([]);
  }
}

const myKeyExtractor = (item, index) => `item-${item.id}`;


function Notes() {
  let [notes, setNotes] = useState([]);
  let [refreshing, setRefreshing] = useState(true)
  
  useEffect(() => {
    _onRefresh()
  }, [])

  const _onRefresh = () => {
    setRefreshing(true);

    fetchNotes((data) => {
      setNotes(data);
      setRefreshing(false);
    });
  }

  return (
    <FlatList
      data={notes}
      renderItem={({item}) => <Note item={item} />}
      keyExtractor={myKeyExtractor}
      refreshControl={
        <RefreshControl
          colors={["#9Bd35A", "#689F38"]}
          refreshing={refreshing}
          onRefresh={_onRefresh}
        />
      }
    />
  )
}

export default Notes;