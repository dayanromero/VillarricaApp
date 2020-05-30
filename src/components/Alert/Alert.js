import React, { Fragment } from 'react';
import { Alert } from 'react-native';

export default ShowAlert = (props) => {
   return <Fragment>
        {Alert.alert(
             props.msg,
            '',
            [{ text: 'OK', onPress: () => props.setE('')}],
            { cancelable: false },
        )}
    </Fragment>
};
