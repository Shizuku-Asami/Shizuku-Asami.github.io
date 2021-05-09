import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Nav from './Nav';

import VectorAlgebra from './VectorAlgebra';
import VectorAlgebraCartesian from './VectorAlgebraCartesian';

import reportWebVitals from './reportWebVitals';
import Example from './components/Example';
import Note from './components/Note';

const text = `إذا كانت لدينا في الفضاء ثلاثي الأبعاد $\\mathbb{R}^{3}$ نقطة $P$ إحداثياتها $(x,y,z)$ فإننا نعرف <span class="phrase">شعاع الموضع position vector</span> للنقطة $P$ على أنه الشعاع الذي مبدأه هو مبدأ الإحداثيات $O$ و ينتهي عند النقطة $P$:
\\begin{equation}
    \\vect{r} = x \\, \\uvect{e}_{x} + y \\, \\uvect{e}_{y} + z \\, \\uvect{e}_{z} 
\\end{equation}
تمثل طويلة شعاع الموضع بعد النقطة $P$ عن مبدأ الإحداثيات $O$ و الذي يعطى بالعلاقة التالية حسب نظرية فيثاغورث:
\\begin{equation}
    \\norm{\\vect{r}} = \\sqrt{x^{2} + y^{2} + z^{2}}
\\end{equation}`

ReactDOM.render(
  <React.StrictMode>
    <div className="container mt-3">
    <Example example_title="شعاع الموضع" example_body={text}/>
    <Note note_title="شعاع الموضع" note_body={text}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
