
# Instrucciones rápidas para GitHub

## Opción 1: proyecto React existente
1. Copia `DashboardTutorVirtualPI2.jsx` dentro de `src/`.
2. Instala dependencias:
   - `framer-motion`
   - `lucide-react`
3. Importa el componente en tu `App.jsx` o en la ruta que prefieras.

## Opción 2: Vite + React
```bash
npm create vite@latest
npm install
npm install framer-motion lucide-react
```

Luego reemplaza el contenido de `App.jsx` por:

```jsx
import DashboardTutorVirtualPI2 from "./DashboardTutorVirtualPI2";

export default function App() {
  return <DashboardTutorVirtualPI2 />;
}
```

## Recomendación
Si quieres, en la siguiente iteración conviene que lo convierta en estructura de repo completa con:
- `package.json`
- `src/App.jsx`
- `src/main.jsx`
- estilos base
- versión lista para deploy en Vercel o GitHub Pages
