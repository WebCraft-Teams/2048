import * as React from "react";
import Header from '../Header';
import Tile from '../Tile';
import './Board.scss';

export default function Board({ data, score }) {
  return (
    <>
    <div className='gameScore'>
      <Header score={score}  />
    </div>
    
     <div className='board__body'>
     {data.map((row, rowIndex) => {
       return (
         <div key={rowIndex} className='board__row'>
           {row.map((num, index) => (
             <Tile num={num} key={index} />
           ))}
         </div>
       );
     })}
   </div>
    </>
  );
}