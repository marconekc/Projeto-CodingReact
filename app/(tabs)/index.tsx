// TabOneScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import GrayButton from '../../components/Button';
import { Text, View } from '../../components/Themed';
import AgentIcon from '../../components/AgentIcon';
import api from '../services/api';
import AgentDetailsScreen from '../AgentDetailsScreen';

export default function TabOneScreen() {
  const [agents, setAgents] = useState<any[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);

  async function fetchData() {
    try {
      const response = await api.get('https://valorant-api.com/v1/agents?isPlayableCharacter=True');

      if (response.status === 200) {
        const data = response.data.data;
        setAgents(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function handleButtonPress() {
    if (agents.length > 0) {
      setAgents([]);
    } else {
      fetchData();
    }
  }

  function handleIconPress(agent: any) {
    setSelectedAgent(agent);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        
        <GrayButton onPress={handleButtonPress} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.iconContainer}>
          {agents.map((agent) => (
            <AgentIcon key={agent.uuid} iconUrl={agent.displayIcon} onPress={() => handleIconPress(agent)} />
          ))}
        </View>
      </ScrollView>

      {selectedAgent && (
        <AgentDetailsScreen
          agent={selectedAgent}
          //onClose={() => setSelectedAgent(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    flexWrap: 'wrap',
  },
});
