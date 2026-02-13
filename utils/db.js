const mongoose = require('mongoose');

// URL de conexión local a la base de datos [Proyecto5_noSQL]
const urlDb = 'mongodb://localhost:27017/Proyecto5_noSQL';

const connect = async () => {
  try {
    // Conectamos a la base de datos
    await mongoose.connect(urlDb); 
    console.log('Conexión a la base de datos satisfactoria');
  } catch (error) {
    console.log('Error conectando a la base de datos', error);
  }
};

module.exports = { connect };