import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dt-money-black.vercel.app/api',
})
