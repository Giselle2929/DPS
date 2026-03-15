import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

import Formulario from './components/Formulario';
import Reserva from './components/Reserva';

export default function App() {

const [reservas,setReservas] = useState([]);
const [mostrarForm,guardarMostrarForm] = useState(false);

return(

<View style={styles.container}>

<Text style={styles.titulo}>Reservas Restaurante</Text>

<TouchableHighlight
style={styles.btn}
onPress={()=>guardarMostrarForm(!mostrarForm)}
>
<Text style={styles.textBtn}>
{mostrarForm ? "Cancelar" : "Nueva Reserva"}
</Text>
</TouchableHighlight>

{mostrarForm ? (

<Formulario
reservas={reservas}
setReservas={setReservas}
guardarMostrarForm={guardarMostrarForm}
/>

):( 

<FlatList
data={reservas}
renderItem={({item}) => <Reserva item={item}/>}
keyExtractor={item => item.id}
/>

)}

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#1E88E5",
paddingTop:50
},

titulo:{
textAlign:"center",
fontSize:24,
color:"#FFF",
marginBottom:20
},

btn:{
backgroundColor:"yellow",
padding:10
},

textBtn:{
textAlign:"center",
fontWeight:"bold"
}

});
