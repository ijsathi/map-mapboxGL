import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1IjoiaWpzYXRoaSIsImEiOiJja3YxMjJmZmo3dGdxMm9vOGlpZWlzN3pvIn0._DKDLbLw6cHQODrbr_2Ksw';

const MapDirection = () => {
    useEffect( () =>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ 90.379362 ,23.781164],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
        
    },[])
    return (
        <div id='map'>
            
        </div>
    );
};

export default MapDirection;