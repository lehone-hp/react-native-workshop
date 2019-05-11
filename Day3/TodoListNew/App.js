/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, ImageBackground, Text, View, TouchableOpacity, TextInput} from 'react-native';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            todoList: [],
            newTodoItem: ''
        };
    }

    componentDidMount() {
        this.setState({
            todoList: [
                {title: 'Do something Today', done: false},
                {title: 'Take your bath', done: true}
            ]
        });
    }

    addTodoItem = () => {
        const todoText = this.state.newTodoItem;
        if (todoText) {
            let existingList = this.state.todoList;
            let newTodoItem = {title: todoText, done: false};

            this.setState({todoList: [newTodoItem, ...existingList]});
            this.setState({newTodoItem: ''});
        } else {
            alert('Please Provide the Todo item');
        }
    };

    removeTodoItem = (key) => {
        const todoItem = this.state.todoList[key];
        if (todoItem.done) {
            alert('Cannot delete completed items');
        } else {
            let newList = this.state.todoList.filter(function (value, index, arr) {
                return index !== key;
            });

            this.setState({todoList: newList});
        }
    };

    render() {
        return (
            <View style={ styles.container }>
                {/*Todolist*/ }
                <ScrollView>
                    {/*Header*/ }

                    <ImageBackground source={ require('./assets/bg.jpg') }
                                     style={ styles.backgroundImage }>
                        <View style={ styles.backgroundWatermark }>
                            <View style={ styles.headerContainer }>
                                <Text style={ styles.headerText }>My TodoList</Text>
                            </View>

                            <View style={ styles.todoListContainer }>
                                {
                                    this.state.todoList.length === 0 ?
                                        <View style={ styles.noListItemContainer }>
                                            <Text style={ styles.noListItemHeader }>Your todo list is empty</Text>
                                        </View>
                                        :
                                        this.state.todoList.map((item, key) => {
                                            return (
                                                <View key={ key } style={ styles.listItem }>
                                                    <View style={ styles.listItemContentContainer }>
                                                        <Text>{ item.title }</Text>
                                                        <Text
                                                            style={ styles.listItemStatus }>
                                                            { item.done ?
                                                                <Text style={{color: '#00cf00', textDecorationLine: 'line-through'}}>Completed</Text>
                                                                :
                                                                <Text style={{color: '#2551ff'}}>Pending</Text>
                                                            }
                                                        </Text>
                                                    </View>
                                                    <View style={ styles.listItemButtonContainer }>
                                                        <TouchableOpacity
                                                            onPress={ () => this.removeTodoItem(key) }
                                                            style={ styles.listItemButtonButton }>
                                                            <Text style={ styles.listItemButtonText }>X</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            );
                                        })
                                }
                            </View>
                        </View>
                    </ImageBackground>

                </ScrollView>

                <View>
                    {/* Header*/ }
                    <View style={ styles.addTodoContainer }>
                        <TextInput
                            placeholder="Type a new Todo item"
                            style={ styles.addTodoTextInput }
                            value={ this.state.newTodoItem }
                            onChangeText={ (text) => this.setState({newTodoItem: text}) }/>
                        <TouchableOpacity
                            onPress={ () => this.addTodoItem() }
                            style={ styles.addTodoAddButton }>
                            <Text style={ styles.addTodoAddButtonText }>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%', height: '100%',
    },
    backgroundWatermark: {
        backgroundColor: 'rgba(18, 50, 105, 0.64)',
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#858585',
    },
    noListItemContainer: {
        padding: 10
    },
    noListItemHeader: {
        color: '#fff'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    },
    todoListContainer: {
        borderWidth: 1,
        borderColor: '#858585',
    },
    listItem: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: '#858585',
        margin: 10,
        backgroundColor: '#fff',
    },
    listItemContentContainer: {
        flex: 4,
        justifyContent: 'space-around',
    },
    listItemStatus: {
        fontWeight: 'bold',
    },
    listItemButtonContainer: {
        flex: 1,
    },
    listItemButtonButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 17,
    },
    listItemButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    addTodoContainer: {
        flexDirection: 'row',
        borderColor: '#858585',
        borderTopWidth: 1,
    },
    addTodoTextInput: {
        flex: 4,
        paddingLeft: 10,
    },
    addTodoAddButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#616161',
        padding: 10,
    },
    addTodoAddButtonText: {
        color: '#fff',

    }
});
