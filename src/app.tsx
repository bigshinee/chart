import { ChartProvider } from './context/chart';

import Chart from './views/chart';

function ChartView() {
  return (
    <ChartProvider>
      <Chart />
    </ChartProvider>
  );
}

export default ChartView;
