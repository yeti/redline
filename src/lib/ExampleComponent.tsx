/**
 * @class ExampleComponent
 */

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';


export type Props = { text: string }

export default class ExampleComponent extends React.Component<Props> {
    render() {
        const {
            text
        } = this.props

        return (
            <View>
                <Text style={styles.test}>Example Component: {text}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    test: {
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

