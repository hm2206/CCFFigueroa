import React, { Component, Fragment } from 'react';
import Slider from '../components/slider';
import Info from '../components/info';
import Carousel from '../components/carousel';
import Contacto from '../components/contacto';
import Imagff from '../components/imagff';
import Views from '../components/views';
import Opiniones from '../components/Opiniones';
export default class Index extends Component
{

    render() {
        return (
            <Fragment>
                <Slider/>
                <Info/>
                <Carousel/>
                <Contacto 
                    titulo="titulo"
                    descripcion="descripcion"
                    numero="cel"
                />
                <Imagff
                     titulo="oruehfuiwhr"
                     descripcion="ekfuhvoeh"
                     btn="krgr"
                />
                <Views/>
                <Opiniones/>
            </Fragment>
            
        );
    }


}