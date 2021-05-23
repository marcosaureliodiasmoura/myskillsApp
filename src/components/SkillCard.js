import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

export function SkillCard(){
  return (
    <TouchableOpacity key='1' style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
       skillxxx
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
})