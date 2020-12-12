const populationEarth = 7827000000;
async function global() {
    const url = `https://api.covid19api.com/summary`;
    const res = await fetch(url);
    const data = await res.json();
    /* data.Countries.forEach(element => {
        console.log('Страна:', element.Country);     
        console.log('Новые заболевшие:', element.NewConfirmed);
        console.log('Новые смерти:', element.NewDeaths);
        console.log('Новые вылечевшиеся', element.NewRecovered);
        console.log('Общее кол-во смертей:', element.TotalDeaths);
        console.log('Общее кол-во заряженных:', element.TotalConfirmed);
        console.log('Общее кол-во выздоровевших', element.TotalRecovered);
    }); */
    console.log('заболевших:',data.Global.TotalConfirmed); //общее кол-во заболевших
    console.log('смертей:',data.Global.TotalDeaths); // общее кол-во смертей
    console.log('вылечившихся:',data.Global.TotalRecovered); //общее кол-во вылечившихся
    console.log('количество случаев заболевания за последний день',data.Global.NewConfirmed); //кол-во заболевших за день
    console.log('количество летальных исходов за последний день', data.Global.NewDeaths); // летальных исходов за последний день
    console.log('количество выздоровевших за последний день',data.Global.NewRecovered); // выздоровевших за последний день
    const confrimedFor100 = (data.Global.TotalConfirmed * 100000) / populationEarth; // и так далее для новых, стран и т.п. 
    console.log('Общее кол-во заболевших на 100 тысяча:', Math.round(confrimedFor100) , 'тысяч' );
}  
global()

 async function population_flag() {
    const url = `https://restcountries.eu/rest/v2/all?fields=name;population;flag`;
    const res = await fetch(url);
    const data = await res.json();
  /*   data.forEach(element => {
        console.log('Название страны:', element.name);
        console.log(`Флаг страны ${element.name}`, element.flag);
        console.log(`Население страны ${element.name}`, element.population);
    }); */
}
population_flag()


var mapOptions = {
    center: [17.385044, 78.486671],
    zoom: 2
 }
 var map = new L.map('sample', mapOptions);
 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
 map.addLayer(layer); 
