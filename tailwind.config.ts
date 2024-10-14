import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0424C3',
        bgPrimary: '#F3F5FC',
        textPrimary: '#121926',
        textSecondary: '#344054',
        textPlaceholder: '#9AA4B2',
        borderPrimary: '#EEF2F6',
        borderSecondary: '#EAECF0',
        warning: '#F79009',
        borderError: '#FDA29B',
        textError: '#D92D20',
        borderDisabled: '#EAECF0',
        bgDisabled: '#F2F4F7',
        textDisabled: '#CDD5DF',
      },
      fontSize: (() => {
        const sizes: { [key: string]: string } = {};
        for (let i = 1; i <= 100; i++) {
          sizes[i] = `${i}px`;
        }
        return sizes;
      })(),
      gap: (() => {
        const gaps: { [key: string]: string } = {};
        for (let i = 1; i <= 100; i++) {
          gaps[i] = `${i}px`;
        }
        return gaps;
      })(),
      spacing: (() => {
        const Spacings: { [key: string]: string } = {};
        for (let i = 1; i <= 100; i++) {
          Spacings[i] = `${i}px`;
        }
        return Spacings;
      })(),
      backgroundColor: {
        'black-25': 'rgba(0, 0, 0, 0.25)',
        'black-50': 'rgba(0, 0, 0, 0.5)',
        'white-54': 'rgba(255, 255, 255, 0.54)',
      },
      boxShadow: {
        'sns-btn': '0px 4px 8px rgba(27, 27, 27, 0.16)',
      },
      backdropBlur: {
        '10': '10px',
      },
      borderRadius: {
        '4': '4px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
      },
      lineHeight: {
        '12': '1.2',
        '14': '1.4',
        '16': '1.6',
        '18': '1.8',
        '20': '2.0',
      },
      zIndex: {
        backdrop: '9998',
        modal: '9999',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
