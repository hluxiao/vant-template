import { get, post } from './http';

export const apiAddress = p => post('/api/upload', p);