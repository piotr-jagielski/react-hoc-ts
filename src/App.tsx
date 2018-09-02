import * as React from 'react';
import './App.css';

import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Car from './Car';
import withSpy from './withSpy';

export class App extends React.Component {
  public render() {
    return (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={10}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <h2>
              {`Basic component: <Car />`}
            </h2>
            <Car engine="straight engine" body="red" wheels="medium-sized" />
          </Slide>
          <Slide index={1}>
            <h2>
              withSpy proxy HOC
            </h2>
            <h3>
              Used to print props. Both inner and outer props implement the same exact interface.
            </h3>
            <CarWithSpy engine="straight engine" body="red" wheels="medium-sized" />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Typing React HOCs</h1>
//         </header>
//         <h2>
//           {`Basic component: <Car />`}
//         </h2>
//         <Car engine="straight engine" body="red" wheels="medium-sized" />
//         <h2>
//           {`withSpy proxy HOC`}
//         </h2>
//         <h3>
//           Used to print props. Both inner and outer props implement the same exact interface.
//         </h3>
//         <CarWithSpy engine="straight engine" body="red" wheels="medium-sized" />
//       </div>
//     );
//   }
// }

const CarWithSpy = withSpy(Car);

export default App;
