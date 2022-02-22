const seriesService = ( function(){

    const series = [
        {title: "The Wire", release: 2002, image: "the-wire.jpg"},
        {title: "The Sopranos", release: 1999, image: "soprano.jpg"},
        {title: "Chernobyl", release: 1999, image: "chernobyl.jpg"},
        {title: "Fargo", release: 1999, image: "fargo.jpg"},
        {title: "True Detective", release: 1999, image: "true-detective.jpg"},
        {title: "Game of Thrones", release: 1999, image: "game-of-thrones.jpg"},       
        {title: "The Office", release: 1999, image: "the-office.jpg"},       
    ];

    const getAllSeries = () => {
        return series;
    }

    return { getAllSeries }

}() );



export default seriesService;