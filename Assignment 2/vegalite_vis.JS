        var chart_1 = "Visualisations/Map.vg.json";

        vegaEmbed("#choro_map", chart_1,{"actions":false}).then(function(result){
            // Access the Vega view instance
        }).catch(console.error);
        

        var chart_2 = "Visualisations/BubbleChart.vg.json";

        vegaEmbed("#bubble", chart_2,{"actions":false}).then(function(result){
            // Access the Vega view instance
        }).catch(console.error);

        var chart_3 = "Visualisations/HeatMap.vg.json";

        vegaEmbed("#heat_map", chart_3,{"actions":false}).then(function(result){
            // Access the Vega view instance
        }).catch(console.error);

        var chart_4 = "Visualisations/BumpChart.vg.json";

        vegaEmbed("#bump_chart", chart_4,{"actions":false}).then(function(result){
        // Access the Vega view instance
        }).catch(console.error);
