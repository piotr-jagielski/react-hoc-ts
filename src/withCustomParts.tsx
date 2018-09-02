import { withProps } from 'recompose';

export interface IOuterProps {
  engine: string;
  wheels: string;
  hasRacingKit?: boolean;
  body?: string;
}

export const withCustomParts = withProps((props: IOuterProps) => ({
  body: 'red with stripes',
  ...props,
  engine: props.hasRacingKit ? props.engine + ' Turbo' : props.engine,
  wheels: props.hasRacingKit ? props.wheels + ' with racing tires' : props.wheels
}));

export default withCustomParts;
