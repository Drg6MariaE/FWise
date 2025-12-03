import * as SecureStore from 'expo-secure-store';

// ⚠️ REPLACE with your computer's IP Address
const API_BASE_URL = 'http://127.0.0.1/api/user'; 

const getAuthHeaders = async () => {
  const token = await SecureStore.getItemAsync('auth_token');
  return {
    'Content-Type': 'application/json',
    'x-auth-token': token || '',
  };
};

export const api = {
  register: async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      return res.json();
    } catch (e) { return { msg: "Network error" }; }
  },

  login: async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      return res.json();
    } catch (e) { return { msg: "Network error" }; }
  },

  getMe: async () => {
    try {
      const headers = await getAuthHeaders();
      const res = await fetch(`${API_BASE_URL}/me`, { method: 'GET', headers });
      if (!res.ok) return null;
      return res.json();
    } catch (e) { return null; }
  },

  updateOnboardingStatus: async (updates: { has_seen_intro?: boolean, has_set_goals?: boolean }) => {
    try {
      const headers = await getAuthHeaders();
      const res = await fetch(`${API_BASE_URL}/status`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(updates),
      });
      return res.json();
    } catch (e) { return null; }
  }
};