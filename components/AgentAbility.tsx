import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AgentAbilityProps {
  displayIcon: string;
  displayName: string;
}

const AgentAbility: React.FC<AgentAbilityProps> = ({ displayIcon, displayName}) => {
  const [showDescription, setShowDescription] = useState(false);

  function toggleDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDescription}>
        <Image source={{ uri: displayIcon }} style={styles.abilityIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.abilityName}>{displayName}</Text>
        </View>
      </TouchableOpacity>
      {/*{showDescription && <AgentAbilityDesc description={description} />}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginBottom: 16,
  },
  textContainer: {
    width: 89,
  },
  abilityIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  abilityName: {
    fontSize: 16,
    flexWrap: 'nowrap',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AgentAbility;
