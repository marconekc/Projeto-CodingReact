import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface AgentIconProps {
  iconUrl: string;
  onPress?: () => void;
}

const AgentIcon: React.FC<AgentIconProps> = ({ iconUrl, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Image source={{ uri: iconUrl }} style={styles.iconImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  iconContainer: {
    borderWidth: 2,
    borderColor: 'lightgray',
    width: 64,
    height: 64,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
});

export default AgentIcon;
