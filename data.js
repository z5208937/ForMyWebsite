map.on('load', function() {
map.addLayer({
"id": "data",
"type": "fill-extrusion",
"source": {
'type': 'geojson',
'data': data
},
'paint': {
'fill-extrusion-color' : {
'property': '2016',
"stops":[
[0, 'white'],
[50, 'orange']
]
},
'fill-extrusion-height' : {
'property': 'Difference',
"stops":[
[0.2, 0],
[1, 50000]
]
},
'fill-extrusion-opacity': 1
}
});
});