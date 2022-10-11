am5.ready(function() {
        var continents = {
            "AF": 0,
            "AN": 1,
            "AS": 2,
            "EU": 3,
            "NA": 4,
            "OC": 5,
            "SA": 6
        }

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
            tooltipText: "{name}",
            toggleKey: "active",
            interactive: true,
        });

        polygonSeriesRU.mapPolygons.template.states.create("hover", {
            fill: colors.getIndex(9)
        });

        var data = [{"id":"RU-PER","name" : "Perm", "value":1,"url" : 'https://www.amcharts.com/demos/map-using-d3-projections/',polygonTemplate: { fill: colors.getIndex(9) }}];
//Click event
        polygonSeriesRU.mapPolygons.template.events.on("click", (ev) => {
            var dataContext = ev.target.dataItem;
            var countryDataItem ={};
            for (var i = 0; i < data.length; i++){
                if(data[i].id === dataContext.id)countryDataItem = data[i];
            }
            var otherWindow = window.open(countryDataItem.url, '_blank');
            otherWindow.opener = null;
            otherWindow.location = targetUrl;
        })


        var circleSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
        circleSeries.mapPolygons.template.setAll({
            templateField: "polygonTemplate",
            tooltipText: "{name}:{value}"
        });
//Circles function
        polygonSeriesRU.events.on("datavalidated", function () {
            circleSeries.data.clear();
            for (var i = 0; i < data.length; i++){
                var dataContext = data[i];
                var value = dataContext.value;
                var radius = 1;
                var countryDataItem = polygonSeriesRU.getDataItemById(dataContext.id);
                var countryPolygon = countryDataItem.get("mapPolygon");
                if (1) {
                    var geometry = am5map.getGeoCircle(countryPolygon.visualCentroid(), radius);
                    circleSeries.data.push({
                        name: dataContext.name,
                        value: dataContext.value,
                        polygonTemplate: dataContext.polygonTemplate,
                        geometry: geometry
                    });
                }
            }
        })
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