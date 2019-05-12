/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    ScrollView,
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';

import styles from './src/styles/app.style';

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
                {title: 'Do morning meditation', done: true},
                {title: 'Physical exercises, stretches, push up and drink 1ltr of water', done: false},
                {title: 'Take your bath', done: false},
            ]
        });
    }

    addTodoItem = () => {
        const todoText = this.state.newTodoItem;
        if (todoText) {
            let existingList = this.state.todoList;
            let newTodoItem = {title: todoText, done: false};

            this.setState({todoList: [...existingList, newTodoItem]});
            this.setState({newTodoItem: ''});
        } else {
            Alert.alert('Your todo can not be empty');
        }
    };

    removeTodoItem = (key) => {
        const todoItem = this.state.todoList[key];
        if (todoItem.done) {
            Alert.alert('Cannot delete completed items');
        } else {
            let newList = this.state.todoList.filter(function (value, index, arr) {
                return index !== key;
            });

            this.setState({todoList: newList});
        }
    };

    toggleTodoItem = (key) => {
        const todoItem = this.state.todoList[key];

        Alert.alert(
            todoItem.title,
            todoItem.done ?
                'This task has already been completed, click OPEN to reopen the task'
                : 'This task has not yet been completed, Click DONE to complete the task',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: todoItem.done ? 'OPEN' : 'DONE',
                    onPress: () => {
                        let existingList = this.state.todoList;
                        todoItem.done = !todoItem.done;
                        existingList[key] = todoItem;
                        this.setState({todoList: existingList});
                    }
                },
            ],
            {cancelable: false},
        );
    };

    render() {
        return (
            <View style={ styles.container }>
                {/*Todolist*/ }
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}>
                    {/*Header*/ }

                    <ImageBackground source={ require('./assets/bg.jpg') }
                                     style={ styles.backgroundImage }>
                        <View style={ styles.backgroundWatermark }>
                            <View style={ styles.headerContainer }>
                                <Text style={ styles.headerText }>My TodoList</Text>
                            </View>

                            <View style={styles.todoListContainer}>
                                {
                                    this.state.todoList.length === 0 ?
                                        <View style={ styles.noListItemContainer }>
                                            <Text style={ styles.noListItemHeader }>Your todo list is empty.</Text>
                                            <Text style={ styles.noListItemHeader }>Add a new item with the form below</Text>
                                        </View>
                                        :
                                        this.state.todoList.map((item, key) => {
                                            return (
                                                <View key={ key } style={ styles.listItem }>
                                                    <View style={ styles.listItemContentContainer }>
                                                        <Text>{ item.title }</Text>
                                                        <TouchableOpacity
                                                            onPress={ () => this.toggleTodoItem(key) }>
                                                            <Text
                                                                style={ styles.listItemStatus }>
                                                                { item.done ?
                                                                    <Text style={ {
                                                                        color: '#00cf00',
                                                                        textDecorationLine: 'line-through'
                                                                    } }>Completed</Text>
                                                                    :
                                                                    <Text style={ {color: '#2551ff'} }>Pending</Text>
                                                                }
                                                            </Text>
                                                        </TouchableOpacity>
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

