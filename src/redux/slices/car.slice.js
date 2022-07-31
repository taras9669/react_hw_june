import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState ={
    cars: [],
    errors:null

}

const getAllCars = createAsyncThunk(
    'carSLice/getAll',
    async (_, {rejectedWithValue})=>{
        try {
            const {data} = await carService.getAll()
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const deleteByIdCars = createAsyncThunk(
    'carSLice/deleteById',
    async ({id}, {rejectedWithValue})=>{
        try {
            await carService.deleteById(id);
            return id
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const addNewCar = createAsyncThunk(
    'carSLice/addNew',
    async ({car}, {rejectedWithValue})=>{
        try {
            const {data} = await carService.addNew(car);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
     /*   setCarForAdd:(state, action) =>{
            state.carForAdd = action.payload
       }  */
    },
    extraReducers:(builder)=>
        builder
            .addCase(getAllCars.fulfilled,(state, action) => {
                state.errors = null
                state.cars = action.payload
            })
            .addCase(getAllCars.rejected,(state, action) => {
                state.errors = action.payload
            })
            .addCase(addNewCar.fulfilled, (state, action) => {
                const car = action.payload;
                state.cars.push(car)
            })
            .addCase(addNewCar.rejected,(state, action) => {
                state.errors = action.payload
            })
            .addCase(deleteByIdCars.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car =>car.id === action.payload);
                state.cars.splice(index, 1)
            })
            .addCase(deleteByIdCars.rejected,(state, action) => {
                state.errors = action.payload
            })


});

const {reducer:carReducer} = carSlice;
const carActions = {
    getAllCars,
    deleteByIdCars,
    addNewCar
};
export {
    carReducer,
    carActions
}