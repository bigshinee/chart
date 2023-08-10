import { useMemo } from 'react';

import { useChartState } from '../../../../context/chart';

function XAxisComponent() {
  const {
    config,
    xScale,
    data: { allHistory },
  } = useChartState();

  return useMemo(() => {
    const cnt = allHistory.length / 4;

    const xDomain = allHistory.map(d => d.date);
    const xRange = [config.padding.left, config.width - config.padding.right];

    xScale.domain(xDomain).range(xRange).padding(0);

    return (
      <g transform={`translate(0 ${config.height - config.padding.bottom})`}>
        <line
          x1={config.padding.left}
          x2={config.width}
          stroke="#bbb"
          strokeWidth="1px"
        />
  
        {allHistory.map((item, idx) => {
          if ((idx + 1) % cnt !== 0) return null;
  
          const x = xScale(item.date) ?? 0;
          const w = xScale.bandwidth() / 2;
  
          return (
            <text
              key={item.date}
              x={x + w}
              dy={8}
              alignmentBaseline="text-before-edge"
              textAnchor="middle"
              fontSize={14}
              fill="#979797"
            >
              {item.date}
            </text>
          );
        })}
      </g>
    );
  }, [config, xScale, allHistory]);
}

export default XAxisComponent;
