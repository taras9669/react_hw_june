import React from 'react';
import css from'./Car.module.css';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch()
    return (
        <div className={css.carDiv}>
            <div>ID - {id}</div>
            <div>MODEL - {model}</div>
            <div>PRICE - {price}</div>
            <div>YEAR - {year}</div>
            <button onClick={() => dispatch(carActions.deleteByIdCars({id}))}>Delete</button>
        </div>
    );
};

export default Car;