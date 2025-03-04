import { Theme } from '../types';

export const themes: Theme[] = [
  {
    id: 'default',
    name: 'Default',
    css: `/* Default Theme */
.container {
  padding: 20px;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #357ab8;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
  background-color: white;
}

.card-title {
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
}

.card-content {
  color: #666;
}`,
  },
  {
    id: 'minimal',
    name: 'Minimal',
    css: `/* Minimal Theme */
.container {
  padding: 20px;
  max-width: 600px;
}

h1 {
  color: #222;
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
}

p {
  color: #444;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

button {
  background-color: transparent;
  color: #333;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background-color: #f5f5f5;
  border-color: #ccc;
}

.card {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  margin-top: 15px;
}

.card-title {
  font-weight: 500;
  margin-bottom: 8px;
  color: #222;
}

.card-content {
  color: #666;
  font-size: 0.9rem;
}`,
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    css: `/* Vibrant Theme */
.container {
  padding: 25px;
  border-radius: 12px;
  background-color: #6c5ce7;
  box-shadow: 0 8px 30px rgba(108, 92, 231, 0.3);
  color: white;
}

h1 {
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
}

p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 1.2rem;
}

button {
  background-color: #fd79a8;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(253, 121, 168, 0.4);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(253, 121, 168, 0.6);
}

.card {
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}

.card-title {
  font-weight: bold;
  margin-bottom: 12px;
  color: #fff;
  font-size: 1.2rem;
}

.card-content {
  color: rgba(255, 255, 255, 0.85);
}`,
  },
];