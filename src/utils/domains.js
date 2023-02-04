import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { mainRoutes } from '../routes/mainRoutes';
import solverRoutes from '../routes/solverRoutes';
import { getApp } from './helpers';

const app = getApp()
console.log(app)

export function App(){

    return (
        <div>
               <RouterProvider router={mainRoutes}/> 
        </div>
    );
};


export  function SolverApp(){
    return (
        <div>
               <RouterProvider router={solverRoutes}/> 
        </div>
    );
}
