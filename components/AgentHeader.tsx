// AgentHeader.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface AgentHeaderProps {
  displayName: string;
  fullPortrait: string;
  background: string;
}

const AgentHeader: React.FC<AgentHeaderProps> = ({ displayName, fullPortrait, background }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.displayName}>{displayName}</Text>
      <Image source={{ uri: fullPortrait }} style={styles.fullPortraitImage} />
      <Image source={{ uri: background }} style={styles.backgroundImage} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  fullPortraitImage: {
    width: 200,
    height: 220,
    borderRadius: 8,
    
  },
  backgroundImage: {
    width: '100%',
    height: 220,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
  displayName: {
    fontSize: 24,
    color:'white',
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default AgentHeader;
