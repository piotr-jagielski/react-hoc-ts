import { shallow } from 'enzyme';
import * as React from 'react';
import { ICarProps } from './Car';
import withRacingKit from './withRacingKit';

it('renders', () => {
  const Component = withRacingKit(Inner);

  const component = shallow(<Component engine="V8" wheels="lightweight" />);

  expect(component.exists()).toBe(true);
});

it('renders inner component', () => {
  const Component = withRacingKit(Inner);

  const component = shallow(<Component engine="V8" wheels="lightweight" />);

  const inner = component.find(Inner);

  expect(inner.exists()).toBe(true);
});

it('adds turbocharger and racing tires. Comes with any color as long as it is red with stripes', () => {
  const Component = withRacingKit(Inner);

  const component = shallow(<Component engine="V8" wheels="lightweight" />);

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    body: 'red with stripes',
    engine: 'V8 Turbo',
    wheels: 'lightweight with racing tires',
  })
});

const Inner = (props: ICarProps) => null;