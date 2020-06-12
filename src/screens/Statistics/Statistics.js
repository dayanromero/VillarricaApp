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
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { VictoryPie } from 'victory-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Connect Redux
import { connect } from 'react-redux';

// Redux Actions
import { fetchData } from './actions';

//Components
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import { Card } from 'react-native-paper';

//Utilities
import { theme } from '../../core/theme';

const data = [
   { x: 1, y: 24000, label: 'Infectados', icon: 'account-settings', color:'tomato' },
   { x: 2, y: 2250, label: 'Hospitalizados', icon: 'account-alert', color: 'orange' },
   { x: 3, y: 16500, label: 'Recuperdos', icon: 'account-multiple-check', color: 'gold' },
   { x: 4, y: 5000, label: 'Muertos', icon: 'account-remove', color: 'navy' },
];

class Statistics extends Component {
   componentDidMount() {
      this.props.getStatistics();
   }

   cardStatistics = (item) => {
      return (
         <TouchableOpacity>
            <Card style={styles.card}>
               <Card.Content style={styles.textsContainer}>
                  <View style={{ marginRight: 20 }}>
                     <Icon name={item.icon} color={item.color} size={40} />
                  </View>
                  <View>
                     <Text style={styles.textL}>{item.label}</Text>
                     <Text style={styles.texts}>{item.y}</Text>
                  </View>
               </Card.Content>
            </Card>
         </TouchableOpacity>
      );
   };

   render() {
      const { navigation } = this.props;
      return (
         <SafeAreaView style={styles.container}>
            <View style={styles.container}>
               <VictoryPie
                  padAngle={({ datum }) => datum.x}
                  innerRadius={90}
                  origin={{ y: 200 }}
                  padding={50}
                  data={data}
                  colorScale={data.map((it) => it.color)}
                  labelRadius={({ innerRadius }) => innerRadius -75 }
               />
               <FlatList
                  style={styles.view}
                  data={data}
                  renderItem={({ item }) => this.cardStatistics(item)}
                  keyExtractor={(item, index) => index.toString()}
               />
            </View>
            {/* <BottomMenu stats={true} navigation={navigation} /> */}
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   view: {
      padding: 16,
      marginBottom: 10,
   },
   icon: {
      textAlign: 'center',
      fontSize: 60,
      color: theme.colors.secondary,
      margin: 5,
   },
   texts: {
      paddingBottom: 8,
      fontSize: 20,
      color: 'white'
   },
   textL: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 16,
      paddingTop: 5,
      color: 'white'
   },
   card: {
      marginBottom: 10,
      backgroundColor: '#4C2A80'
   },
   textsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
