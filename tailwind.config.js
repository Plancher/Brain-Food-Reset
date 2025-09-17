/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primärfarbe: Türkis/Teal
        'primary': '#0A988B',
        'secondary': '#0D7A6F',
        
        // Semantische Farben - Erfolg/Positiv (Grün)
        'success-50': '#F0FDF4',
        'success-100': '#DCFCE7',
        'success-200': '#BBF7D0',
        'success-500': '#22C55E',
        'success-600': '#16A34A',
        'success-700': '#15803D',
        'success-800': '#166534',
        
        // Semantische Farben - Problem/Negativ (Rot)
        'danger-50': '#FEF2F2',
        'danger-100': '#FEE2E2',
        'danger-200': '#FECACA',
        'danger-500': '#EF4444',
        'danger-600': '#DC2626',
        'danger-700': '#B91C1C',
        'danger-800': '#991B1B',
        
        // Erweiterte Grautöne
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
      },
      fontFamily: {
        'unbounded': ['Unbounded', 'cursive'],
        'atteron': ['Atteron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
