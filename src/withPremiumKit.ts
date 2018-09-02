import { ICarProps } from './Car';
import withCustomParts from './withCustomParts';
import withVEngine from './withVEngine';

const withPremiumKit = (Inner: React.ComponentType<ICarProps>) =>
  withVEngine(withCustomParts(Inner));

export default withPremiumKit;
