import * as React from 'react';
import './App.css';

export const withSpy = <TProps extends object>(Inner: React.ComponentType<TProps>) =>
  class WithSpy extends React.Component<TProps> {
    public render() {
      return (
        <div>
          <Inner {...this.props} />
          <span>
          {JSON.stringify(this.props, undefined, 2)}
          </span>
        </div>
      );
    }
  }

export default withSpy;
