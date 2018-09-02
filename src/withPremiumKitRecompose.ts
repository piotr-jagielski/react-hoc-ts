import { compose } from 'recompose';
import { ICarProps } from './Car';
import withCustomParts from './withCustomParts';
import withVEngine from './withVEngineRecompose';

interface IOuterProps {
  wheels: string;
  body?: string,
  hasRacingKit?: boolean;
}

export const withPremiumKit = compose<ICarProps, IOuterProps>(
  withVEngine,
  withCustomParts,
);

export default withPremiumKit;
