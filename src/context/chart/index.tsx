import React, { createContext, useContext, useReducer, ReactNode } from 'react';

import { initState } from './state';

type Action = Partial<Chart.State>;
type Dispatch = React.Dispatch<Action>;

const StateContext = createContext<Chart.State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

function reducer(state: Chart.State, action: Action) {
  return { ...state, ...action };
}

export function useChartState(): Chart.State {
  const context = useContext(StateContext);

  if (context === undefined) {
    throw new Error('useChartState must be used within a Provider');
  }

  return context;
}

export function useChartDispatch(): Dispatch {
  const context = useContext(DispatchContext);

  if (context === undefined) {
    throw new Error('useChartDispatch must be used within a Provider');
  }

  return context;
}

interface ProviderProps {
  children: ReactNode;
}

export function ChartProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
