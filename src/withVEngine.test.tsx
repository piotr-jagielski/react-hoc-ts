import { shallow } from 'enzyme';
import * as React from 'react';
import { ICarProps } from './Car';
import withVEngine from './withVEngine';

it('renders', () => {
  const Component = withVEngine(Inner);

  const component = shallow(<Component numberOfCylinders={8} body="blue" wheels="lightweight" />);

  expect(component.exists()).toBe(true);
});

it('renders inner component', () => {
  const Component = withVEngine(Inner);

  const component = shallow(<Component numberOfCylinders={8} body="blue" wheels="lightweight" />);

  const inner = component.find(Inner);

  expect(inner.exists()).toBe(true);
});

it('upgrades engine to V with specified number of cylinders', () => {
  const Component = withVEngine(Inner);

  const component = shallow(<Component numberOfCylinders={12} body="blue" wheels="lightweight" />);

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    engine: 'V12',
  })
});

it('passes props to inner component', () => {
  const Component = withVEngine(Inner);

  const component = shallow(<Component numberOfCylinders={8} body="blue" wheels="lightweight" />);

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    body: 'blue',
    wheels: 'lightweight',
  })
});

it('should not pass number of cylinders to inner component', () => {
  const Component = withVEngine(Inner);

  const component = shallow(<Component numberOfCylinders={8} body="blue" wheels="lightweight" />);

  const inner = component.find(Inner);

  expect(inner.props()).not.toMatchObject({
    numberOfCylinders: 8,
  })
});



const Inner = (props: ICarProps) => null;