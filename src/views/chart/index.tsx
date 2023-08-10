import { useChartState } from '../../context/chart';

import Bar from './components/bar';
import XAxis from './components/x-axis';

import { Wrap, ChartBox } from './styled';

// all 바
// compare 라인
function Chart() {
  const { config: { width, height } } = useChartState();

  return (
    <Wrap>
      <h1>Chart</h1>

      <ChartBox>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
        >
          {/* <PriceLineChart /> */}
          <XAxis />

          <Bar />

          {/* <HoverLine /> */}
        </svg>
      </ChartBox>
    </Wrap>
  );
}

export default Chart;
