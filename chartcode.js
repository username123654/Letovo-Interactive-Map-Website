import data_all from './data_file.json' assert {type: 'json'};

function ToTable(data, region){
    data.sort();
    const newDiv=document.createElement("div");
    const textReg = document.createElement("div");
    textReg.setAttribute("id", "reg");
    textReg.textContent = region;
    newDiv.appendChild(textReg);
    var il, mnt=0;
    for(let i = 0; i < data.length; i++){
        if(data[i].City === region){
            il = i;
            mnt++;
        }
    }
    if(mnt == 0){
        const textNo = document.createElement("div");
        textNo.textContent = "No students from there";
        newDiv.appendChild(textNo);
    }
    for(let i = 0; i < data.length; i++){
        if(data[i].City === region){
            const newLine = document.createElement("div");
            const newEl = document.createElement("div");
            const textName = document.createElement("div");
            const textGrade = document.createElement("div");
            textGrade.setAttribute("id", "grade");
            textName.textContent = data[i].Name;
            textGrade.textContent = data[i].Grade;
            newEl.appendChild(textName);
            newEl.appendChild(textGrade);
            newLine.appendChild(newEl);
            if(i !== il){
                const newHr = document.createElement("hr");
                newLine.appendChild(newHr);
            }
            newLine.setAttribute("id", "line");
            newDiv.appendChild(newLine);
        }
    }
    newDiv.setAttribute("id", "table");
    document.getElementById("table").replaceWith(newDiv);
}

am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    var colors = am5.ColorSet.new(root, {});

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(am5map.MapChart.new(root, {
        rotationX: -90,
        rotationY: -60,
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoOrthographic()
    }));


// Create polygon series for the world map
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["RU"]
    }));

    worldSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color(0xaaaaaa),
        templateField: "polygonSettings"
    });

    worldSeries.mapPolygons.template.states.create("hover", {
        fill: colors.getIndex(9)
    });
//Create series for RU region map
    var polygonSeriesRU = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_russiaLow
    }));

    polygonSeriesRU.mapPolygons.template.setAll({
        toggleKey: "active",
        interactive: true,
    });

    polygonSeriesRU.mapPolygons.template.states.create("hover", {
        fill: colors.getIndex(2)
    });

    const data_per_regions = data_all.data_per_regions;
    const data = data_all.data;

//Click event
    polygonSeriesRU.mapPolygons.template.events.on("click", (ev) => {
        var dataContext = ev.target.dataItem.dataContext;
        var countryDataItem ={};
        for (var i = 0; i < data.length; i++){
            if(data[i].id === dataContext.id) countryDataItem = data[i];
            console.log(data[i].id);
        }

        //

        var city = countryDataItem.name;
        ToTable(data_per_regions, city);
    })

//Circles function

//background
    var backgroundSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {})
    );

    backgroundSeries.mapPolygons.template.setAll({
        fill: root.interfaceColors.get("alternativeBackground"),
        fillOpacity: 0.1,
        strokeOpacity: 0
    });

    backgroundSeries.data.push({
        geometry:
            am5map.getGeoRectangle(90, 180, -90, -180)
    });

    chart.appear(1000, 100);
}); // end am5.ready()