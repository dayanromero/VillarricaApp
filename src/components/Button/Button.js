import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../core/theme';
import Loading from '../Loading/Loading';

const Botton = ({ ...props }) => {
    const { title, style, onPress, loading } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={loading}
            style={[
                { backgroundColor: loading ? 'white' : theme.colors.primary },
                styles.container,
                style,
            ]}>
            {loading ? <Loading /> : <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        textTransform: 'uppercase',
    },
});

export default Botton;
