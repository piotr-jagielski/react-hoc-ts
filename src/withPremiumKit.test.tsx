import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { ICarProps } from './Car';
import withPremiumKit from './withPremiumKit';

it('renders', () => {
  const Component = withPremiumKit(Inner);

  const component = shallow(<Component wheels="lightweight" numberOfCylinders={8} />);

  expect(component.exists()).toBe(true);
});

it('renders inner component', () => {
  const Component = withPremiumKit(Inner);

  const component = mount(<Component wheels="lightweight" numberOfCylinders={8} />);

  const inner = component.find(Inner);

  expect(inner.exists()).toBe(true);
});

it('comes only with V8 engine', () => {
  const Component = withPremiumKit(Inner);

  const component = mount(
    <Component
      body="yellow"
      wheels="lightweight"
      numberOfCylinders={8}
    />);

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    engine: 'V8',
  })
});

it('allows to add racing kit', () => {
  const Component = withPremiumKit(Inner);

  const component = mount(
    <Component
      hasRacingKit={true}
      wheels="lightweight"
      numberOfCylinders={8}
    />);

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    body: 'red with stripes',
    engine: 'V8 Turbo',
    wheels: 'lightweight with racing tires',
  })
});

it('allows to customize body color', () => {
  const Component = withPremiumKit(Inner);

  const component = mount(
    <Component
      hasRacingKit={true}
      wheels="lightweight"
      body="yellow"
      numberOfCylinders={8}
    />);

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    body: 'yellow',
    engine: 'V8 Turbo',
    wheels: 'lightweight with racing tires',
  })
});

const Inner = (props: ICarProps) => null;