import type {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    previewHead: (head) => `
    ${head}
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      body {
        font-family: 'Roboto', sans-serif;
      }
    </style>
  `,
    managerHead: () => `
        <style>
            .css-1rb1jn6 {
                width: 250px !important;
                height: 157px !important;
                max-height: 157px !important;
            }
        </style>
    `,
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};
export default config;
