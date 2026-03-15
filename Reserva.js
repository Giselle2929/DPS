import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Reserva = ({item}) => {

return(
<View style={styles.reserva}>

<Text>Nombre: {item.nombre}</Text>
<Text>Personas: {item.personas}</Text>
<Text>Fecha: {item.fecha}</Text>
<Text>Hora: {item.hora}</Text>
<Text>Sección: {item.seccion}</Text>

</View>
)
}

const styles = StyleSheet.create({

reserva:{
backgroundColor:"#FFF",
padding:20,
marginVertical:10
}

})

export default Reserva;