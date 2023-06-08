// AgentDetailsScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AgentHeader from '../components/AgentHeader';
import AgentRole from '../components/AgentRole';
import AgentAbility from '../components/AgentAbility';

interface AgentDetailsScreenProps {
  agent: {
    displayName: string;
    fullPortrait: string;
    background: string;
    role: {
      displayIcon: string;
      displayName: string;
    };
    abilities: {
      displayIcon: string;
      displayName: string;
      description: string;
    }[];
  };
}

const AgentDetailsScreen: React.FC<AgentDetailsScreenProps> = ({ agent }) => {
  return (
    <View style={styles.container}>
      <AgentHeader
        displayName={agent.displayName}
        fullPortrait={agent.fullPortrait}
        background={agent.background}
      />
      
      <AgentRole
        displayIcon={agent.role.displayIcon}
        displayName={agent.role.displayName}
        roleName={agent.role.displayName}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {agent.abilities.map((ability, index) => (
          <View style={styles.abilityContainer} key={index}>
            <AgentAbility
              displayIcon={ability.displayIcon}
              displayName={ability.displayName}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    position:'absolute',
    top:150,
  },
  abilitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  abilityContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  descriptionContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    padding: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});

export default AgentDetailsScreen;
