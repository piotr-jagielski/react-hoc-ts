import * as React from 'react';
import './Car.css';
import car from './car.png';

export interface ICarProps {
  engine: string;
  body: string;
  wheels: string;
}

export class Car extends React.Component<ICarProps> {
  public render() {
    return (
      <div className="Car">
        <img className="Car-image" src={car} />
        <div>
          Specs:
        <ul>
            <li>Engine: {this.props.engine}</li>
            <li>Body: {this.props.body}</li>
            <li>Wheels: {this.props.wheels}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Car;
