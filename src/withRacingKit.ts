import { withProps } from 'recompose';

interface IOuterProps {
  engine: string;
  wheels: string;
}

export const withRacingKit = withProps((props: IOuterProps) => ({
  body: 'red with stripes',
  engine: props.engine + ' Turbo',
  wheels: props.wheels + ' with racing tires'
}));

export default withRacingKit;
