/** @jsxImportSource react */
import { qwikify$ } from '@khulnasoft.com/qwik-react';
import { Slider } from '@mui/material';
export const MUISlider = qwikify$<typeof Slider>(
  Slider
  //  Uncomment next line to make component interactive in browser
  // { eagerness: 'hover' }
);
