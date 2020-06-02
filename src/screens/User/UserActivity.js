import React from 'react';
import { connect } from 'react-redux';
import { fetchDataActivities } from './actions';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import InfoCard from '../../components/Card/InfoCard';
import { theme } from '../../core/theme';

class UserActivity extends React.Component {
    componentDidMount() {
        const {
            userInfo: { id },
        } = this.props;
        this.props.getActivityByUserId(id);
    }

    userEvents = (data) =>
        data.map((ev, index, array) => {
            return <InfoCard data={ev} key={index} />;
        });

    render() {
        const { data } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {data ? this.userEvents(data) : null}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.grey,
    },
    scrollView: {
        marginTop: 10,
        marginHorizontal: 10,
    },
});

const mapStateToProps = (state) => {
    const { loading, data, error } = state.activity;
    const { data: userInfo } = state.search;
    return {
        data,
        loading,
        error,
        userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getActivityByUserId: (id) => {
            return dispatch(fetchDataActivities(id));
        },
        setError: () => {
            return dispatch(setErrorFalse());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserActivity);
