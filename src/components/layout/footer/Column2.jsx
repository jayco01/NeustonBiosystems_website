import {Link} from 'react-router-dom';

export default function Column2() {
    return (
        <div>
            <h4> Quick Links</h4>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to="/for-cheese-producers"> For Cheese Producers </Link>
                </li>
                <li>
                    <Link to="/for-investors"> For Investors </Link>
                </li>
                <li>
                    <Link to="/sustainability"> Sustainability </Link>
                </li>
                <li>
                    <Link to="/about"> About Us </Link>
                </li>
            </ul>
        </div>
    )
}