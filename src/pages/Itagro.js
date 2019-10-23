import React, { Component } from 'react';
import { Button, Text, ScrollView, Image, SafeAreaView } from 'react-native';


import Card from 'react-native-cardview';
// const Page2 = ({ navigation }) => (

// );


// Itagro.navigationOptions = {
//   title: 'Sobre a Itagro',
// }

class Itagro extends Component {

  render() {
    return (

      <ScrollView>
        <SafeAreaView  style={{ flex: 1, marginTop:50, alignItems: 'center' }}>
         
            <View>
              <Text style={{color:'#c63f17', margin:'3%', fontWeight:'bold', fontSize:18}}>Sobre Nós</Text>
              <Text style={{ padding: 20 }}>
                A Itagro conta com uma equipe de profissionais altamente qualificados e experientes dentro do seu
                quadro de funcionários. Ao total são seis pilotos e dez técnicos agrícolas que também estão com o curso
                de aviação agrícola em execução com o objetivo de garantir uma aviação de qualidade mantendo o compromisso com a excelência na prestação de seus serviços.
              </Text>
            </View>
          
        </SafeAreaView >
      </ScrollView>


    );
  }
}




export default Itagro;


{/* <Button 
title="Ir para Itagro"
onPress={() => navigation.navigate('Home') }
/> */}