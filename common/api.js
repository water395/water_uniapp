const http = uni.$u.http;

export const getMenu = (data) => http.get('/api/index', data)