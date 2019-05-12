import { StyleSheet } from 'react-native';
import theme from './theme.style';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    backgroundWatermark: {
        backgroundColor: 'rgba(18, 50, 105, 0.64)',
        flex: 1,
    },
    headerContainer: {
        ...theme.CENTER,
        padding: theme.DEFAULT_PADDING,
        borderBottomWidth: 1,
        borderColor: '#164f69',
    },
    noListItemContainer: {
        ...theme.CENTER,
        height: '90%'
    },
    noListItemHeader: {
        color: theme.WHITE,
        fontSize: 15,
    },
    headerText: {
        fontWeight: theme.FONT_WEIGHT_BOLD,
        fontSize: 20,
        color: theme.WHITE,
    },
    todoListContainer: {
        paddingBottom: theme.DEFAULT_PADDING,
    },
    listItem: {
        flexDirection: 'row',
        padding: theme.DEFAULT_PADDING,
        borderWidth: 1,
        borderColor: '#b7c1c2',
        marginHorizontal: theme.DEFAULT_MARGIN,
        marginTop: theme.DEFAULT_MARGIN,
        backgroundColor: theme.WHITE,
    },
    listItemContentContainer: {
        flex: 4,
        justifyContent: 'space-around',
    },
    listItemStatus: {
        fontWeight: theme.FONT_WEIGHT_BOLD,
    },
    listItemButtonContainer: {
        flex: 1,
        ...theme.CENTER,
    },
    listItemButtonButton: {
        backgroundColor: '#ff0000',
        padding: 15,
        ...theme.CENTER,
    },
    listItemButtonText: {
        color: theme.WHITE,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        fontSize: 20,
    },
    addTodoContainer: {
        flexDirection: 'row',
        borderColor: theme.BORDER_COLOR,
        borderTopWidth: 2,
    },
    addTodoTextInput: {
        flex: 4,
        paddingLeft: theme.DEFAULT_PADDING,
        borderColor: theme.BORDER_COLOR,
        borderRightWidth: 4,
    },
    addTodoAddButton: {
        ...theme.CENTER,
        flex: 1,
        backgroundColor: '#7f8c8d',
        padding: theme.DEFAULT_PADDING,
    },
    addTodoAddButtonText: {
        color: theme.WHITE,
    }
});

