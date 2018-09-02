import * as React from 'react';
import { Omit } from 'recompose';
import './App.css';

export interface InnerProps {
  engine: string;
}

export interface IOuterProps {
  numberOfCylinders: number;
}

export type OuterProps<T extends InnerProps> = Omit<T, keyof InnerProps> & IOuterProps;

export const withVEngine =
  <TProps extends InnerProps>(Inner: React.ComponentType<TProps>) =>
    (props: OuterProps<TProps>) => {
      // See https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
      const { numberOfCylinders, ...innerProps} = props as IOuterProps;
      
      return (
        <Inner engine={`V${props.numberOfCylinders}`} {...innerProps} />
      );
    };

export default withVEngine;
