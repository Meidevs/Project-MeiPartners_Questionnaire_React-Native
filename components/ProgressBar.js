import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';

export default class Progress extends React.Component {
    render() {
        return (
            <ProgressBar progress={0.5} color={Colors.red800} />
        )
    }
}

