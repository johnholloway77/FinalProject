function loadParks(){
    let xhr = new XMLHttpRequest();
   
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON Data loaded from City of Calgary load parks");
            document.getElementById("recordsDisplay").innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "/datasets/records/parksData.html", true);
    xhr.send();
    loadParkData();
    
};

function loadRoads(){
    let xhr = new XMLHttpRequest();
   

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON Data loaded from City of Calgary Roads data");
            document.getElementById("recordsDisplay").innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "/datasets/records/roadData.html", true);
    xhr.send();
    loadRoadData();
};

function loadPlus(){
    let xhr = new XMLHttpRequest();
   

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON Data loaded from City of Calgary loadPlus15");
            document.getElementById("recordsDisplay").innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "/datasets/records/plus15Data.html", true);
    xhr.send();
    loadPlus15Data();
};


function loadSports(){
    let xhr = new XMLHttpRequest();
   

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON Data loaded from City of Calgary loadSports");
            document.getElementById("recordsDisplay").innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "/datasets/records/parkSport.html", true);
    xhr.send();
    loadParkSport();
};