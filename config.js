var config = {
    style: 'mapbox://styles/amontes48/cmlb2tc73001b01qu4tqp1a5g',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW1vbnRlczQ4IiwiYSI6ImNtazFiMzRqaTAzdmIza3NiODk3N2drMXoifQ.nDHA2HOlBwHFrTFkkN_4FQ',
    showMarkers: true,
    markerColor: '#c43e28',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    //title: 'Your Title Goes Here',
    //subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    //byline: 'By a I.M. Amapper',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Marbella',
            image: 'https://grupoabu.es/wp-content/uploads/2023/05/la-milla-de-oro-marbella-1-1.jpg',
            description: 'En 2025, el metro cuadrado llegó a 5.410 euros en Marbella, lo que supone un crecimiento en el precio de alrededor del 9% respecto al año anterior. Sigue siendo el punto de la Costa del Sol donde se alcanzan los precios más elevados y el arquetipo de la vivienda de lujo.',
            location: {
                center: [-4.885428524368706, 36.50889598933621],
                zoom: 13,
                pitch: 26,
                bearing: -7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Benahavís',
            image: 'https://static.grupojoly.com/clip/440dde81-5055-4b33-9ad3-9a8e713cb7e1_source-aspect-ratio_1600w_0.jpg',
            description: 'El precio alcanzado en el núcleo urbano de Benahavís y alrededores alcanzó este 2025 los 5.391 euros el metro cuadrado, igualando casi los precios que se han vivido en Marbella, que hasta hace poco focalizaba la vivienda de lujo en la Costa del Sol',
            location: {
                center: [-5.042343121516808, 36.52530216930026],
                zoom: 12,
                pitch: 28,
                bearing: -20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Estepona',
            image: 'https://cdn.thepropertyagent.casa/wp-content/uploads/2020/11/1.Cover_.jpg',
            description: 'En Estepona, donde el parque residencial se ha revalorizado por encima del 50% en los últimos tres años, el metro cuadrado alcanzó los 4.057 euros, lo que representa un 13,3% más que en 2024',
            location: {
                center: [-5.149533039572901, 36.4310699840599],
                zoom: 13,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
