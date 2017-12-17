import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <section>

                </section>
                <div>
                    <Link to='/A'><h2>Shelf A</h2></Link>
                    <Link to='/B'><h2>Shelf B</h2></Link>
                    <Link to='/C'><h2>Shelf C</h2></Link>
                    <Link to='/D'><h2>Shelf D</h2></Link>
                </div>
            </div>
        )
    }
}