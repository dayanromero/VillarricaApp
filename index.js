import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import configureStore from './src/store';
import { name as appName } from './app.json';

const store = configureStore();

export default function Main() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
