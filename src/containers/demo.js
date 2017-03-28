import React from 'react';
import {TransitionMotion, StaggeredMotion, spring} from 'react-motion';

const Demo = React.createClass({
  getInitialState() {
    return {
      items: [{key: 'first', size: 20}, {key: 'second', size: 20}, {key: 'third', size: 300}],
    };
  },
  componentDidMount() {
    this.setState({
      items: [{key: 'first', size: 20}, {key: 'second', size: 20}], // mount and not include third = remove third.
    });
  },
  willLeave() {
    // triggered when third's gone. Keeping third until its width/height reach 0.
    return {width: spring(20, {stiffness: 150, damping: 25}), height: spring(20, {stiffness: 150, damping: 25}), opacity: spring(0, {stiffness: 200, damping: 25})};
    // return {position: 'relative', left: spring(0)};
  },
  render() {

    // //StaggeredMotion
    // const Test = ({className, text, id, style, datakey}) => {
    //   return (
    //     <div
    //       className={className}
    //       id={id}
    //       style={style}
    //       data-key={datakey}
    //     >{text}</div>
    //   )
    // }
    return (
      // <StaggeredMotion
      //   defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
      //   styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
      //     return i === 0
      //       ? {h: spring(100)}
      //       : {h: spring(prevInterpolatedStyles[i - 1].h)}
      //   })}>
      //   {(interpolatingStyles) =>
      //     <div>
      //       {interpolatingStyles.map((style, i, id) =>
      //         <Test
      //           key={i}
      //           text={`hello ${i}`}
      //           id={`id-${i}`}
      //           className={`item${i}`}
      //           datakey={i}
      //           style={{border: '1px solid', height: '100px', width: style.h}}/>)
      //       }
      //     </div>
      //   }
      // </StaggeredMotion>

      <TransitionMotion
        willLeave={this.willLeave}
        styles={this.state.items.map(item => ({
          key: item.key,
          style: {width: item.size, height: item.size, opacity: item.size},
        }))}>
        {interpolatedStyles =>
          // First render: first, second, thrid.
          // Second: still first, second, third! Only last one's first, second.
          <div>
            {interpolatedStyles.map(config => {
              console.log('config: ', config);
              return (
                <div
                  className={config.key}
                  key={config.key}
                  style={{...config.style, border: '1px solid', background: 'red'}}
                />
              )
            })}
          </div>
        }
      </TransitionMotion>
    );
  },
});

export default Demo;
