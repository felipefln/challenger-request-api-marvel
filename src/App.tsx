import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes/routes';
import { store, persistor } from './store';
import colors from './styles/Colors';

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./config/ReactotronConfig');
}

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Routes />
          <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  </>
);

export default App;
