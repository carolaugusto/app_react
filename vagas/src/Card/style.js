import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    card:{
      backgroundColor: 'gray',
      height: 200,
      marginHorizontal: 15,
      marginBottom: 15,
      padding: 10,
      borderRadius: 10
    },
    title:{
      color: '#00',
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#FFF',
       textAlign: 'center'
    },
    cardInfo: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5
    },
    infoTitle: {
      color: '#000',
      fontWeight: 'bold',
      marginRight: 5    
    },
    infoText: {
      color: '#FFF',
      marginRight: 75
    }
  })
 
export { styles };