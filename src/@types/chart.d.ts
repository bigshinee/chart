declare module Chart {
  interface Config {
    width: number;
    height: number;
    padding: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    }
  }

  type THistoryItem = {
    type?: 1 | 2;
    date?: string;
    deposit?: number;
    price?: number;
    floor?: number;
  }

  type THistory = {
    nextPage: number;
    total: number;
    offset: number;
    limit: number;
    totalStr: string;
    histories: null | THistoryItem[],
    hasMore: boolean;
    page: number;
  }

  interface AllHistory {
    date: string;
    trade: number;
    lease: number;
    rent: null;
    totalStr: string;
    history: null | THistory;
    hasMore?: boolean;
    page?: number;
  }

  interface State {
    config: Config;
    xScale: ScaleBand<string>;
    yScale: ScaleLinear<number, number>;
    tradeType: 'ALL' | 'SALE' | 'LEASE';
    data: {
      allHistory: AllHistory[];
    }
  }
}
