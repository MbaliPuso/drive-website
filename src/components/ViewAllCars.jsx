import React from "react";
import viewOne from "../assets/s-presso.png";
import viewTwo from "../assets/celerio.png";
import viewThree from "../assets/suzuki-swift.png";
import viewFour from "../assets/vitara-all-grip.png";
import viewFive from "../assets/omoda-c5.png";
import viewSix from "../assets/chery-tiggo7.png";
import viewSeven from "../assets/cherytiggo7executive.png";
import viewEight from "../assets/scorpio-n.png";
import viewNine from "../assets/xuv300.png";
import viewTen from "../assets/jimny-5-door.png";
import viewEleven from "../assets/CheryTiggo4Pro.png";
import viewTwelve from "../assets/magnite.png";
import viewThirteen from "../assets/baleno.png";
import viewFourteen from "../assets/ciaz.png";

// All cars

const allCars = [
    {
        id: 1,
        image: viewOne,
        name: 'S-presso 1.0 GL',
        gearType: '5-Speed Manual',
        petrolConsumption: '4.4L/100km',
        engineCapacity: '1.0L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R5,799'
    },
    {
        id: 2,
        image: viewTwo,
        name: 'Suzuki Celerio 1.0 GL',
        gearType: '5-Speed Manual',
        petrolConsumption: '4.2L/100km',
        engineCapacity: '1.0L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R7,499'
    },
    {
        id: 3,
        image: viewThree,
        name: 'Suzuki Swift 1.2 GL',
        gearType: '5-Speed Manual',
        petrolConsumption: '4.9L/100km',
        engineCapacity: '1.2L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R7,299'
    },
    {
        id: 4,
        image: viewFour,
        name: 'Suzuki Vitara All Grip 1.6',
        gearType: '5-Speed Manual',
        petrolConsumption: '6.2L/100km',
        engineCapacity: '1.6L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R14,199'
    },
    {
        id: 5,
        image: viewFive,
        name: 'Omoda C5 Tech',
        gearType: 'Electric shift gear',
        petrolConsumption: '6.9L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R12,699'
    },
    {
        id: 6,
        image: viewSix,
        name: 'Chery Tiggo 7 Pro Distinction',
        gearType: 'CVT',
        petrolConsumption: '6.8L/ 100km',
        engineCapacity: '1.5L Turbo Petrol',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R13,199'
    },
    {
        id: 7,
        image: viewSeven,
        name: 'Chery Tiggo 7 Pro Executive',
        gearType: 'CVT',
        petrolConsumption: '6.8L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R13,699'
    },
    {
        id: 8,
        image: viewEight,
        name: 'Mahindra Scorpio N',
        gearType: 'Automatic',
        petrolConsumption: '7.2L/ 100km',
        engineCapacity: '2.2L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R17,799'
    },
    {
        id: 9,
        image: viewNine,
        name: 'Mahindra XUV300 W6',
        gearType: 'Automatic',
        petrolConsumption: '5L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R9,899'
    },
    {
        id: 10,
        image: viewTen,
        name: 'Suzuki Jimny 5 Door 1.5 GLX',
        gearType: '5-Speed Manual',
        petrolConsumption: '6.8L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R12,199'
    },
    {
        id: 11,
        image: viewEleven,
        name: 'Chery Tiggo 4 Pro 1.5L',
        gearType: '5-Speed Manual',
        petrolConsumption: '5.3L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R9,499'
    },
    {
        id: 12,
        image: viewTwelve,
        name: 'Nissan Magnite 1.0 Acenta',
        gearType: '5-Speed Manual',
        petrolConsumption: '5.3L/ 100km',
        engineCapacity: '1.0L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R10,099'
    },
    {
        id: 13,
        image: viewThirteen,
        name: 'Suzuki Baleno 1.5 GL MT',
        gearType: '5-Speed Manual',
        petrolConsumption: '5.1L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R8,099'
    },
    {
        id: 14,
        image: viewFourteen,
        name: 'Suzuki Ciaz 1.5 GLX MT',
        gearType: '5-Speed Manual',
        petrolConsumption: '5.5L/ 100km',
        engineCapacity: '1.5L',
        offers: 'Insurance, Maintenance, Services, Tracking, Tyres, Roadside Assist',
        price: 'R9,799'
    },
];

const ViewAllCars = () => {
    return (
        <div className="container featured-vehicles">
            {allCars.map((car, index) => (
                <div key={index} className="col-Ig-3 col-md-12 mb-4 car">
                    <div className='card h-100'>
                        <img src={car.image} alt={car.name} className='car-image' />
                        <h3 className="car-name">{car.name}</h3>
                        <div className='row car-details'>
                            <div className='col-4'>{car.gearType}</div>
                            <div className='col-4'>{car.petrolConsumption}</div>
                            <div className='col-4'>{car.engineCapacity}</div>
                        </div>
                        <p><strong>Offers Include:</strong>{car.offers}</p>
                        <div className='row'>
                            <div className='col-6'>
                                <button type="button" className='btn btn-primary'>Apply Now</button>
                            </div>
                            <div className='col-6'>
                                <div className='row'>
                                    <div className='col-3'>1500km</div>
                                    <div className='col-3'>2500km</div>
                                </div>
                            </div>
                        </div>
                        <div>{car.price} <span>Per Month</span></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ViewAllCars;