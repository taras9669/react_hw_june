import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Car from "../Car/Car";
import {useEffect} from "react";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAllCars())
    }, [])

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;