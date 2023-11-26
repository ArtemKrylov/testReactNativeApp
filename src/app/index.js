import {Image, SafeAreaView} from 'react-native';
import {Stack} from 'expo-router';

import LoginPage from '../pages/LoginPage/LoginPage';

import styles from './App.module.scss';

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: 'ERP_Ba3a--Mobile Test',
          headerShadowVisible: false,
          headerLeft: () => (
            <Image
              source={require('../assets/icons/logo.png')}
              style={styles.menuIcon}
            />
          ),
          headerRight: () => <Image source={require('../assets/icons/logout.png')} />,
        }}
      />
      <LoginPage />
    </SafeAreaView>
  );
};

export default Home;
