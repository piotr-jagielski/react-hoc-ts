import { shallow } from 'enzyme';
import * as React from 'react';
import withSpy from './withSpy';

it('renders', () => {
  const Component = withSpy(Inner);

  const component = shallow(<Component a="a" b="b" c="c" />);

  expect(component.exists()).toBe(true);
});

it('renders inner component', () => {
  const Component = withSpy(Inner);

  const component = shallow(<Component a="a" b="b" c="c" />);

  const inner = component.find(Inner);

  expect(inner.exists()).toBe(true);
});

it('passes props to inner component', () => {
  const Component = withSpy(Inner);

  const component = shallow(<Component a="a" b="b" c="c" />);

  const inner = component.find(Inner);

  expect(inner.props()).toMatchObject({
    a: 'a',
    b: 'b',
    c: 'c',
  })
});

it('renders stringified props', () => {
  const Component = withSpy(Inner);

  const component = shallow(<Component a="a" b="b" c="c" />);

  const text = component.find('span').text();

  expect(text).toMatchSnapshot();
});

interface InnerProps {
  a: string;
  b: string;
  c: string;
}

const Inner = (props: InnerProps) => null;