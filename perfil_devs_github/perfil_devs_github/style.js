import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  input: {
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  list: {
    marginTop: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 15
  }
})

export { styles }