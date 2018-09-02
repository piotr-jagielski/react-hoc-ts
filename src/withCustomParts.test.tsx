import { shallow } from 'enzyme';
import * as React from 'react';
import { ICarProps } from './Car';
import withCustomParts from './withCustomParts';

it('renders', () => {
  const Component = withCustomParts(Inner);

  const component = shallow(<Component engine="V8" wheels="lightweight" />);

  expect(component.exists()).toBe(true);
});

it('renders inner component', () => {
  const Component = withCustomParts(Inner);

  const component = shallow(<Component engine="V8" wheels="lightweight" />);

  const inner = component.find(Inner);

  expect(inner.exists()).toBe(true);
});

it('adds a racing kit when props.hasRacingKit is true', () => {
  const Component = withCustomParts(Inner);

  const component = shallow(
    <Component
      hasRacingKit={true}
      engine="V6"
      wheels="low profile"
    />);

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    body: 'red with stripes',
    engine: 'V6 Turbo',
    wheels: 'low profile with racing tires',
  })
});

it('has an option to specify custom body using props', () => {
  const Component = withCustomParts(Inner);

  const component = shallow(
    <Component
      engine="V6"
      wheels="low profile"
      body="glass fiber"
    />
  );

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    body: 'glass fiber',
    engine: 'V6',
    wheels: 'low profile',
  })
});

const Inner = (props: ICarProps) => null;