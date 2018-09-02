import { shallow } from 'enzyme';
import * as React from 'react';
import { ICarProps } from './Car';
import withVEngine from './withVEngineRecompose';

it('renders', () => {
  const Component = withVEngine(Inner);

  const component = shallow(<Component body="blue" wheels="lightweight" />);

  expect(component.exists()).toBe(true);
});

it('renders inner component', () => {
  const Component = withVEngine(Inner);

  const component = shallow(<Component body="blue" wheels="lightweight" />);

  const inner = component.find(Inner);

  expect(inner.exists()).toBe(true);
});

it('upgrades the engine to V8 and passes props to inner component', () => {
  const Component = withVEngine(Inner);

  const component = shallow(<Component body="blue" wheels="lightweight" />);

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    body: 'blue',
    engine: 'V8',
    wheels: 'lightweight',
  })
});

const Inner = (props: ICarProps) => null;