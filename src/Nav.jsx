import React from 'react';
import { Link, Route } from 'react-router-dom';
import VectorAlgebra from './VectorAlgebra';
import VectorAlgebraCartesian from './VectorAlgebraCartesian';

export default class Nav extends React.Component {
  render() {    
    return (
      <div>
        <h1>React Router Example</h1>
        <ul role="nav">
          <li><Link to="/vector_algebra">جبر المُتَّجِهَات</Link></li>
          <li><Link to="/vector_algebra_cartesian">جبر المُتَّجِهَات في الإحداثيات الديكارتية</Link></li>
        </ul>
        
        <div>
          <Route path='/vector_algebra' component={VectorAlgebra} />
          <Route path='/vector_algebra_cartesian' component={VectorAlgebraCartesian} />
        </div>
      </div>
    );
  }
}