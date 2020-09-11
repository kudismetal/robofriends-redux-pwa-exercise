import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px', margin: '0 5px 0 5px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;