import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Alert, } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const handleInfoPress = () => {
    Alert.alert('Sobre o App', 'API Utilizada: \nhttps://valorant-api.com/v1/agents (Com Axios para buscar os dados) \nLista de Agentes do jogo Valorant, sua Função e Habilidades (Em inglês por conta do idioma da API).');
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Lista de Agentes - Valorant',
          tabBarIcon: ({ color }) => <TabBarIcon name="gamepad" color={color} />,
          headerRight: () => (
            
              <Pressable onPress={handleInfoPress}>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>

          ),
        }}
      />

      
  </Tabs>
    
  );
}
