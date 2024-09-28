import { addons } from '@storybook/manager-api';
import {viperTheme} from './preview.js';

addons.setConfig({
    theme: viperTheme,
});
