import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'orange',
        marginBottom: 10
    },
    frame: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(100, 100, 100, .1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        margin: 5
    }
})

export { styles }