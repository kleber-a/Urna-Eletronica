import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#E3D4D0',
    },
  
    Cima: {
      width: '100%',
      height: '40%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 4,
      borderBottomColor: '#478F0F',
    },
  
    container: {
      width: '90%',
      height: '70%',
      backgroundColor: '#F3F3F3',
      marginTop: 8,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'blue',
    },
  
    boxImage: {
      height: '100%',
      width: '40%',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    candidato: {
      width: 92,
      height: 92,
      borderWidth: 1,
      borderColor: 'black',
    },
    numeroCandidato: {
      fontSize: 20,
      fontWeight: '900',
    },
  
    boxTexto: {
      width: '60%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingVertical: 25,
      flexWrap: 'wrap',
    },
    texto: {
      fontSize: 15,
      fontWeight: '800',
      marginHorizontal: 10,
    },
    meio: {
      width: '100%',
      height: '30%',
      paddingTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 4,
      borderBottomColor: '#478F0F',
    },
    botaoVotar: {
      backgroundColor: '#006315',
      width: 150,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOpacity: 0.1,
      elevation: 8,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    },
    baixo: {
      width: '100%',
      height: '30%',
      backgroundColor: '#E3D4D0',
    },
    boxText: {
      width: '80%',
      height: '70%',
      paddingLeft: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    textoDados: {
      fontSize: 15,
      fontWeight: '800',
    },
  
    //Modal (
  
    botaoVoltar: {
      width: 50,
      height: '8%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      alignSelf: 'flex-end',
    },
    containerView: {
      width: '100%',
      height: '49%',
      
    },
    boxTextoVoto: {
      width: '60%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    textoVoto: {
      color: 'white',
      fontSize: 20,
      fontWeight: '900',
    },
    logo: {
      width: '40%',
      height: '100%',
    },
    textoCandidato: {
      color: 'black',
      fontSize: 18,
      fontWeight: '800',
    },
    teclado: {
      width: '90%',
      height: '43%',
      backgroundColor: '#3A3126',
    },
    numeroTeclado: {
      width: '100%',
      height: '78%',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    botaoN: {
      width: 80,
      height: 40,
      borderRadius:5,
      backgroundColor: '#1B1712',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 7,
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOpacity: 0.1,
      elevation: 8,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    },
    textoTeclado: {
      width: '100%',
      height: '22%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },
    botaoBranco:{
      width: 80,
      height: 40,
      borderRadius:5,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 7,
      marginVertical: 7,
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOpacity: 0.1,
      elevation: 8,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    },
    botaoCorrige:{
      width: 80,
      height: 40,
      borderRadius:5,
      backgroundColor: '#F82525',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 7,
      marginVertical: 7,
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOpacity: 0.1,
      elevation: 8,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    },
    botaoConfirma:{
      width: 80,
      height: 50,
      borderRadius:5,
      backgroundColor: '#0FEF3C',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 7,
      marginVertical: 7,
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOpacity: 0.1,
      elevation: 8,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    }
  
    // )
  });

export default style;