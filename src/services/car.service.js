import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll:()=>axiosService.get(urls.cars),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    addNew:(car)=>axiosService.post(urls.cars, car)
}
export {
    carService
}