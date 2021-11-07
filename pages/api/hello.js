// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
import { QueryClient } from "react-query";

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const queryClient = new QueryClient();


