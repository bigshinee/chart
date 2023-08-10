import { scaleBand, scaleLinear } from 'd3-scale';

import data from './data.json';

export const initConfig: Chart.Config = {
  width: 400,
  height: 400,
  padding: {
    top: 20,
    bottom: 48,
    left: 40,
    right: 20,
  }
};

export const initState: Chart.State = {
  config: initConfig,
  xScale: scaleBand(),
  yScale: scaleLinear(),
  tradeType: 'SALE',
  data: {
    allHistory: data.allHistory as Chart.AllHistory[],
  },
};
