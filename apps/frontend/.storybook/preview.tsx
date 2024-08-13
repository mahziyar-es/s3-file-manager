import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import './../src/styles/globals.css';
import * as React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        default: 'default',
        dark: 'dark',
      },
      defaultTheme: 'default',
    }),
    (Story) => (
      <div className={`${inter.className}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
