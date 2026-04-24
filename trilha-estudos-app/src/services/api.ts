import axios from 'axios';

// ⚠️ ATENÇÃO: Substitua pelo endereço IPv4 da sua máquina na rede local.
// No Windows: digite 'ipconfig' no CMD.
// No Mac/Linux: digite 'ifconfig' no terminal.
// Se usar o Emulador do Android Studio na mesma máquina, você pode usar 'http://10.0.2.2:3000'
const API_URL = 'http://10.0.2.2:3000'; 

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 segundos de limite para não deixar o app travado em caso de erro
});

// Interceptors para injetar o JWT nas requisições:
/*
api.interceptors.request.use(async (config) => {
  // const token = await AsyncStorage.getItem('token');
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
*/