import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TelaHorarios = () => {
  const horarios = [
    { paciente: 'sebastiana', medicamento: 'Paracetamol', horario: '4:56' },
    { paciente: 'Joao', medicamento: 'Gardenal', horario: '5:00' },
    { paciente: 'Rogério', medicamento: 'Nimisulida', horario: '20:15' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horários</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Paciente</Text>
          <Text style={styles.tableHeaderText}>Medicamento</Text>
          <Text style={styles.tableHeaderText}>Horário</Text>
        </View>
        {horarios.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.paciente}</Text>
            <Text style={styles.tableCell}>{item.medicamento}</Text>
            <Text style={styles.tableCell}>{item.horario}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require('../assets/home.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/add.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/meds.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 20,
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
});

export default TelaHorarios;
