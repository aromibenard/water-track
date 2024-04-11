'use client'

import { Loader } from '@googlemaps/js-api-loader'
import React, { useEffect } from 'react'

export function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null)

    useEffect (() => {

        const initMap = async () => {

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly',
                libraries: ['places']
            })

            const { Map } = await loader.importLibrary('maps')

            //init marker
            const { Marker } = await loader.importLibrary('marker')

            const position = {
                lat: -1.20684,
                lng: 36.886906
            }

            //map options
            const mapOptions : google.maps.MapOptions = {
                center: position,
                zoom: 18,
                mapId: 'WATER_TRAK'
            }

            //map setup
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

            //put up a marker
            // const marker = new Marker({
            //     map: map,
            //     position: position

            // })

            //initializing search box
            const input = document.createElement('input')
            input.placeholder = 'Search Delivery Address'
            input.style.marginTop = '10px'
            input.style.width = '320px'
            input.style.padding = '20px'
            input.style.boxShadow = '10px'
            input.style.fontSize = '20px'

            const searchBox = new google.maps.places.SearchBox(input)
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)

            // Biasing the SearchBox results towards current map's viewport
            map.addListener('bounds_changed', () => {
                searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds)
            })

            const markers: google.maps.Marker[] = []

            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', () => {
                const places = searchBox.getPlaces()! 

                if (places.length === 0) {
                    return
                }

                // Clear out the old markers.
                markers.forEach(marker => {
                    marker.setMap(null)
                })
                markers.length = 0
            
             // For each place, we get the icon, name and location.
             const bounds = new google.maps.LatLngBounds()
             places.forEach(place => {
                 if (!place.geometry || !place.geometry.location) {
                     console.log('Returned place contains no geometry')
                     return
                 }

                 const marker = new Marker({
                     map,
                     title: place.name,
                     position: place.geometry.location
                 })

                 markers.push(marker)

                 if (place.geometry.viewport) {
                     // Only geocodes have viewport.
                     bounds.union(place.geometry.viewport)
                 } else {
                     bounds.extend(place.geometry.location)
                 }
             })
             map.fitBounds(bounds)
         })
        }

        initMap()
    }, [])

  return (
    <div className='h-[35rem]' ref={mapRef} />
      
  )
}


