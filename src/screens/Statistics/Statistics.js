/**
 * This source code is the confidential, proprietary information of
 * GoDevelop, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with GoDevelop.
 *
 * GoDevelop.
 * All Rights Reserved.
 */

//liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// Connect Redux
import { connect } from 'react-redux';

//Components
import BottomMenu from '../../components/BottomMenu/BottomMenu';

// Redux Actions
import { fetchData } from './actions';

class Statistics extends Component {
   componentDidMount() {
      this.props.getStatistics();
   }

   render() {
       const { navigation } = this.props;
      return (
         <SafeAreaView style={styles.container}>
            <View style={styles.container}>
               <Text>Statistics</Text>
            </View>
            <BottomMenu stats={true} navigation={navigation} />
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
   },
});

const mapStateToProps = (state) => {
   const { loading, data, error } = state.statistics;
   return { data, loading, error };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getStatistics: () => {
         return dispatch(fetchData());
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
