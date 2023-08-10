import { Fragment, useMemo } from 'react';
import { scaleLinear } from 'd3-scale';

import { useChartState } from '../../../../context/chart';

function BarComponent() {
  const { xScale, config: { height, padding }, data: { allHistory } } = useChartState();

  return useMemo(() => {
    const allTrade = allHistory.map(h => h.trade);
    const allLease = allHistory.map(h => h.lease);
    const max = Math.max(...[...allTrade, ...allLease]);

    const yDomain = [0, max === 0 ? 1 : max];
    const yRange = [0, 40];

    const yScale = scaleLinear().domain(yDomain).range(yRange);

    const bandwidth = xScale.bandwidth() ?? 0;

    return (
      <g transform={`translate(0 ${height - padding.bottom - 40})`}>
        <text
          dy={1}
          alignmentBaseline="middle"
          fontSize={14}
          fill="#656565"
        >
          거래량
        </text>
  
        <g transform="translate(0 0)">
          {allHistory.map(item => {
            const x = xScale(item.date) ?? 0;
            const centerX = x + (bandwidth / 2);
            const calcX = centerX - (10 / 2);

            return (
              <Fragment key={item.date}>
                <rect
                  x={calcX}
                  y={40 - (yScale(item.trade) ?? 0)}
                  width={4}
                  height={yScale(item.trade)}
                  fill="#BBE5DA"
                />
  
                <rect
                  x={calcX + 4}
                  y={40 - (yScale(item.lease)  ?? 0)}
                  width={4}
                  height={yScale(item.lease)}
                  fill="#89CEFF"
                />
              </Fragment>
            );
          })}
        </g>
      </g>
    );
  }, [height, padding.bottom, allHistory, xScale]);
}

export default BarComponent;
