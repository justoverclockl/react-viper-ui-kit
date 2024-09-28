import type { Preview } from "@storybook/react";
import { create } from "@storybook/theming"

import "../dist/index.css"

export const viperTheme = create({
  base: 'dark',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://res.cloudinary.com/dt74zb1rv/image/upload/v1726592384/OIG2_prev_ui_yvr9hc.png',
  brandTarget: '_self',
  fontBase: '"Roboto", sans-serif',
  fontCode:  '"Roboto", sans-serif',
});

const preview: Preview = {
  parameters: {
    darkMode: {
      current: 'dark',
      dark: viperTheme,
    },
    docs: {
      theme: viperTheme
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
