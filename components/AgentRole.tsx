// AgentRole.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface AgentRoleProps {
  displayIcon: string;
  displayName: string;
  roleName: string; // Add a new prop for the role name
}

const AgentRole: React.FC<AgentRoleProps> = ({ displayIcon, displayName, roleName }) => {
    let roleNameColor = 'white'; // Default color

  if (roleName === 'Sentinel') {
    roleNameColor = 'lime';
  } else if (roleName === 'Duelist') {
    roleNameColor = 'cyan';
  } else if (roleName === 'Initiator') {
    roleNameColor = 'orange';
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: displayIcon }} style={styles.roleIcon} />
      <Text style={[styles.roleName, { color: roleNameColor }]}>{displayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  roleIcon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  roleName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AgentRole;
