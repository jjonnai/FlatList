import DATA from './Data'
import Row from './components/Row'
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native"

export default function App() {
  return(
    <SafeAreaView style={styles.container}>
        <FlatList
        data={DATA}
        renderItem={({item}) =>(
          //<Text>{item.lastname}</Text>
          <Row person={item}/>
        )}

       

        ></FlatList>
    </SafeAreaView>
)


/*function renderItem({item}) {
    return(<Text>{item.lastname}</Text>)
}*/

/*const renderItem = ({item}) => (
  <Text>{item.lastname}</Text>
)*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'left',
  },
});
