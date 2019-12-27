import { get, post } from './http';

// 测试get接口
export const mockGetApi = p => get('/api/mock', p);
// 测试post接口
export const mockPostApi = p => post('/api/upload', p);