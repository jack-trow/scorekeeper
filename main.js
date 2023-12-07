import React, { useState, Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, Dimensions, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    state = {
        namesPageDisplay: 'block',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        teamOne: 'Team 1',
        teamTwo : 'Team 2',
        teamOneScore: 0,
        teamTwoScore: 0,
        rFlagOne: 0,
        yFlagOne: 0,
        rFlagTwo: 0,
        yFlagTwo: 0,
        t1Wins: 0,
        t1Losses: 0,
        t1Ties: 0,
        t2Wins: 0,
        t2Losses: 0,
        t2Ties: 0,
    }
    
    goalTeamOne = () => {
        this.setState({ 
            teamOneScore: this.state.teamOneScore + 1,
        })
    }
    goalTeamTwo = () => {
        this.setState({ 
            teamTwoScore: this.state.teamTwoScore + 1,
        })
    }
    
    removeGoalTeamOne = () => {
        this.setState({ 
            teamOneScore: this.state.teamOneScore - 1,
        })
    }
    removeGoalTeamTwo = () => {
        this.setState({ 
            teamTwoScore: this.state.teamTwoScore - 1,
        })
    }
    
    rFlagTeamOne = () => {
        this.setState({ 
            rFlagOne: this.state.rFlagOne + 1,
        })
    }
    rFlagTeamTwo = () => {
        this.setState({ 
            rFlagTwo: this.state.rFlagTwo + 1,
        })
    }
    yFlagTeamOne = () => {
        this.setState({ 
            yFlagOne: this.state.yFlagOne + 1,
        })
    }
    yFlagTeamTwo = () => {
        this.setState({ 
            yFlagTwo: this.state.yFlagTwo + 1,
        })
    }
    
    submitScores = (t1Score, t2Score) => {
        if (this.state.teamOneScore > this.state.teamTwoScore) {
            this.setState({
                t1Wins: this.state.t1Wins + 1,
                t2Losses: this.state.t2Losses + 1,
                teamOneScore: 0,
                teamTwoScore: 0,
            })
        } else if (this.state.teamOneScore < this.state.teamTwoScore) {
            this.setState({
                t2Wins: this.state.t2Wins + 1,
                t1Losses: this.state.t1Losses + 1,
                teamOneScore: 0,
                teamTwoScore: 0,
            })
        } else if (this.state.teamOneScore == this.state.teamTwoScore) {
            this.setState({
                t1Ties: this.state.t1Ties + 1,
                t2Ties: this.state.t2Ties + 1,
                teamOneScore: 0,
                teamTwoScore: 0,
            })
        }
    }
    
    handleNamesPagePress = () => this.setState(state => ({
        namesPageDisplay: 'block',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
    }));
    handleScoringPagePress = () => this.setState(state => ({
        namesPageDisplay: 'none',
        scoringPageDisplay: 'block',
        standingsPageDisplay: 'none',
    }));
    handleStandingsPagePress = () => this.setState(state => ({
        namesPageDisplay: 'none',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'block',
    }));
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Soccer Scorekeeper
                    </Text>
                </View>
                <View style={{ display: this.state.namesPageDisplay }}>
                    <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/fcff2a98cd152b1ae8c2d688be30c560' }}
                    >
                        <View style={styles.scoreContainer}>
                            <TextInput style={styles.textInput}
                                clearTextOnFocus = {true}
                                onChangeText={(teamOne) => this.setState({teamOne})}
                                value={this.state.teamOne}
                            />
                        </View>
                        <View style={styles.paragraphContainer}>
                            <Text style={styles.paragraph}>
                                Goals: {this.state.teamOneScore}
                            </Text>
                            <Text style={styles.paragraph}>
                                Yellow Flags: {this.state.yFlagOne}
                            </Text>
                            <Text style={styles.paragraph}>
                                Red Flags: {this.state.rFlagOne}
                            </Text>
                        </View>
                        <View style={styles.scoreContainer}>
                            <TextInput style={styles.textInput}
                                clearTextOnFocus = {true}
                                onChangeText={(teamTwo) => this.setState({teamTwo})}
                                value={this.state.teamTwo}
                            />
                        </View>
                        <View style={styles.paragraphContainer}>
                            <Text style={styles.paragraph}>
                                Goals: {this.state.teamTwoScore}
                            </Text>
                            <Text style={styles.paragraph}>
                                Yellow Flags: {this.state.yFlagTwo}
                            </Text>
                            <Text style={styles.paragraph}>
                                Red Flags: {this.state.rFlagTwo}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                
                <View style={{ display: this.state.scoringPageDisplay }}>
                    <View style={styles.pageDisplayContainer}>
                        <ImageBackground
                            style={styles.background}
                            source={{ uri: 'https://codehs.com/uploads/fcff2a98cd152b1ae8c2d688be30c560' }}
                        >
                            <View style={styles.topScoreContainer}>
                                <Text style={styles.paragraph}>
                                    {this.state.teamOne}   {this.state.teamOneScore} : {this.state.teamTwoScore}   {this.state.teamTwo}
                                </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.goalTeamOne}
                                >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        {this.state.teamOne} Goal
                                    </Text>
                                </View>
                                </TouchableHighlight>
                                
                                <TouchableHighlight
                                    onPress={this.goalTeamTwo}
                                >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        {this.state.teamTwo} Goal
                                    </Text>
                                </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.removeGoalTeamOne}
                                >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Remove Goal from {this.state.teamOne}
                                    </Text>
                                </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.removeGoalTeamTwo}
                                >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Remove Goal from {this.state.teamTwo}
                                    </Text>
                                </View>
                                </TouchableHighlight>
                            </View>
                            
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.yFlagTeamOne}
                                >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Add Yellow Card to {this.state.teamOne}
                                    </Text>
                                </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.yFlagTeamTwo}
                                >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Add Yellow Card to {this.state.teamTwo}
                                    </Text>
                                </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    onPress={this.rFlagTeamOne}
                                >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Add Red Card to {this.state.teamOne}
                                    </Text>
                                </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.rFlagTeamTwo}
                                >
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Add Red Card to {this.state.teamTwo}
                                    </Text>
                                </View>
                                </TouchableHighlight>
                            </View>
                            <TouchableHighlight
                                onPress={() => this.submitScores()}
                            >
                            <View style={styles.navButton}>
                                <Text style={styles.navButtonText}>
                                    Submit Score
                                </Text>
                            </View>
                            </TouchableHighlight>
                        </ImageBackground>
                    </View>
                </View>
                    
                <View style={{ display: this.state.standingsPageDisplay }}>
                    <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/fcff2a98cd152b1ae8c2d688be30c560' }}
                    >
                        <View style={styles.standingsCon}>
                            <Text style={styles.standingsText}>
                                Standings
                            </Text>
                            <Text style={styles.paragraph}>
                                {this.state.teamOne}: {this.state.t1Wins}-{this.state.t1Losses}-{this.state.t1Ties}
                            </Text>
                            <Text style={styles.paragraph}>
                                {this.state.teamTwo}: {this.state.t2Wins}-{this.state.t2Losses}-{this.state.t2Ties}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                    
                    
                    
                
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                        onPress={this.handleNamesPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Teams and Info
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                        onPress={this.handleScoringPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Buttons
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                        onPress={this.handleStandingsPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Standings
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderColor: 'white',
    },
    navButton: {
        height: deviceHeight/10,
        width: deviceWidth/3.5,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    navButtonText: {
        fontSize: deviceHeight/30,
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
    },
    pageDisplayContainer: {
        height: 4*deviceHeight/6,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        height: 8*deviceHeight/12,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderColor: 'white',
    },
    title: {
        color: 'black',
        fontSize: deviceHeight/15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraphContainer: {
        margin: 10,
        height: deviceHeight/5,
        width: deviceWidth/1.25,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'white',
    },
    paragraph: {
        margin: 3,
        color: 'black',
        fontSize: deviceHeight/25,
        textAlign: 'center',
    },
    topScoreContainer: {
        height: deviceHeight/10,
        width: deviceWidth/1.2,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        flex: 0.5,
    },
    button: {
        height: deviceHeight/12,
        width: deviceWidth/2.5,
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: deviceHeight/35,
        textAlign: 'center',
    },
    scoreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: deviceHeight/12,
        width: deviceWidth/2,
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 3,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Comic Sans MS',
        color: 'white',
    },
    standingsCon: {
        height: deviceHeight/4,
        width: deviceWidth/1.25,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 5,
        borderColor: 'white',
    },
    standingsText: {
        color: 'white',
        fontSize: deviceHeight/15,
        textAlign: 'center',
    },
});
