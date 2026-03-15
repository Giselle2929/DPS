import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView
} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'react-id-generator';
import colors from '../assets/colors';

const Formulario = ({ citas, setCitas, guardarMostrarForm }) => {

const [paciente, guardarPaciente] = useState('');
const [propietario, guardarPropietario] = useState('');
const [telefono, guardarTelefono] = useState('');
const [fecha, guardarFecha] = useState('');
const [hora, guardarHora] = useState('');
const [sintomas, guardarSintomas] = useState('');

const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

const showDatePicker = () => setDatePickerVisibility(true);
const hideDatePicker = () => setDatePickerVisibility(false);

const confirmarFecha = date => {
const opciones = { year:'numeric', month:'long', day:'2-digit' };
guardarFecha(date.toLocaleDateString('es-ES', opciones));
hideDatePicker();
};

const showTimePicker = () => setTimePickerVisibility(true);
const hideTimePicker = () => setTimePickerVisibility(false);

const confirmarHora = hora => {
const opciones = { hour:'numeric', minute:'2-digit', hour12:false };
guardarHora(hora.toLocaleString('es-ES', opciones));
hideTimePicker();
};

const crearNuevaCita = () => {

if(
paciente.trim()==='' ||
propietario.trim()==='' ||
telefono.trim()==='' ||
fecha.trim()==='' ||
hora.trim()==='' ||
sintomas.trim()===''
){
Alert.alert('Error','Todos los campos son obligatorios');
return;
}

const cita = {
paciente,
propietario,
telefono,
fecha,
hora,
sintomas,
id: shortid()
};

const nuevasCitas = [...citas, cita];
setCitas(nuevasCitas);

guardarMostrarForm(false);

guardarPaciente('');
guardarPropietario('');
guardarTelefono('');
guardarFecha('');
guardarHora('');
guardarSintomas('');
};

return(

<ScrollView style={styles.formulario}>

<Text style={styles.label}>Paciente</Text>
<TextInput style={styles.input} onChangeText={guardarPaciente}/>

<Text style={styles.label}>Dueño</Text>
<TextInput style={styles.input} onChangeText={guardarPropietario}/>

<Text style={styles.label}>Teléfono</Text>
<TextInput
style={styles.input}
keyboardType="numeric"
onChangeText={guardarTelefono}
/>

<Text style={styles.label}>Fecha</Text>

<Button title="Seleccionar Fecha" onPress={showDatePicker}/>

<DateTimePickerModal
isVisible={isDatePickerVisible}
mode="date"
date={new Date()}
onConfirm={confirmarFecha}
onCancel={hideDatePicker}
/>

<Text>{fecha}</Text>

<Text style={styles.label}>Hora</Text>

<Button title="Seleccionar Hora" onPress={showTimePicker}/>

<DateTimePickerModal
isVisible={isTimePickerVisible}
mode="time"
date={new Date()}
onConfirm={confirmarHora}
onCancel={hideTimePicker}
/>

<Text>{hora}</Text>

<Text style={styles.label}>Síntomas</Text>
<TextInput
multiline
style={styles.input}
onChangeText={guardarSintomas}
/>

<TouchableHighlight
style={styles.btnSubmit}
onPress={crearNuevaCita}
>
<Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
</TouchableHighlight>

</ScrollView>

);
};

const styles = StyleSheet.create({
formulario:{
backgroundColor:'#FFF',
padding:20
},
label:{
fontWeight:'bold',
fontSize:18,
marginTop:20
},
input:{
marginTop:10,
height:50,
borderColor:'#e1e1e1',
borderWidth:1
},
btnSubmit:{
backgroundColor:colors.BUTTON_COLOR,
padding:10,
marginTop:20
},
textoSubmit:{
color:'#FFF',
textAlign:'center',
fontWeight:'bold'
}
});

export default Formulario;
