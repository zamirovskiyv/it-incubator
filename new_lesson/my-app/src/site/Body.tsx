import React from 'react';

type CarsTypeProps = {
    // topCars: Array<CarType>
    topCars: CarType[]
}

type CarType = {
    manufacturer: string
    model: string
}


export const Body = (props: CarsTypeProps) => {

    const renderCarsList = (cars: CarType[]) => {
        return cars.map((car, index) => (
            <li key={index}>
                <span>{car.manufacturer} - </span>
                <span>{car.model}</span>
            </li>

        ));
    }

    return (
        <ul>
            {renderCarsList(props.topCars)}
        </ul>
    );
};
