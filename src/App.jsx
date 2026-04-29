import React from 'react';
import Presentation from './components/Presentation';
import slides from './data/slideContent';

export default function App() {
  return <Presentation slides={slides} />;
}
