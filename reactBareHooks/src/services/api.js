import React from 'react';
import axios from 'axios';


const api = axios.create({
  baseUrl:'https://viacep.com.br/ws/${searchCep}/json/'
});

export default api;