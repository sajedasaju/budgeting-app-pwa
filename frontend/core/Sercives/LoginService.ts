import axios from "axios";
import {apiRoutes} from "@/core/api-routes";

export const login=(data:any)=>{
    console.log(data)
    axios.post(apiRoutes.PUBLIC.LOGIN, data)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
}

