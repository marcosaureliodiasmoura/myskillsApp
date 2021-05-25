import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Platform } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  date?: Date;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  function handleAddNewSkill() {
    const data = { //Criamos um objeto ao invés de adicionar texto.
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data]);
  }

    //Para remover a skill vamos pegar o ID que é uma string
    function handleRemoveSkill(id: string){
      setMySkills(oldState => oldState.filter(
        skill => skill.id !== id
      ));
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Marcos Moura
     </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button
        title="Add"
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My skills
     </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
          skill={item.name}
          onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  skill: {
    color: '#FFF',
    backgroundColor: '#1F1E25',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 20
  }
});