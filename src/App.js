import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <Route path='/' exact component={ProductsContainer} />
                        
                        <MessageContainer />
                        <Route path='/cart' component={CartContainer} />
                        
                    </div>
                </main>
                
                <Footer />
            </div>
            </Router>
        );
    }
}

export default App;