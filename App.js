import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem';
import MainContainer from './navigation/MainContainer';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
