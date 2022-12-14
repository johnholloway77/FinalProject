xhr = new XMLHttpRequest();
record;

function loadParkSport(){
    console.log("LoadJSONData funtion loaded");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON data written to variable record");
            record = JSON.parse(xhr.responseText);
        }
    };

    xhr.open("GET", "https://data.calgary.ca/resource/xwq2-js5v.json", true);
    xhr.send();
}

function searchAssetCD(assetCD){
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Asset CD</h3>";
let returnMessage = "<tr><th onclick='sortParkSportsTable(0)'>Asset CD</th><th onclick='sortParkSportsTable(1)'>Steward</th><th onclick='sortParkSportsTable(2)'>Maintained By</th><th onclick='sortParkSportsTable(4)'>Life Cycle Status</th><th onclick='sortParkSportsTable(5)'>Asset Type</th><th onclick='sortParkSportsTable(6)'>Booking Code</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

let assetCDValue;
for(let i = 0; i < record.length; i++){
    let object = record[i];
    //console.log("variable object is: ", object);

    if(object.asset_cd){
        assetCDValue = object.asset_cd;

        if(assetCDValue.toLowerCase().includes(assetCD.toLowerCase())){
            
            
            let latitude =  object.the_geom.coordinates[0][0][0][0];
            let longitude = object.the_geom.coordinates[0][0][0][1];


            returnMessage += "<tr>";
            returnMessage += "<td>" + object.asset_cd + "</td>";
            returnMessage += "<td>" + object.steward + "</td>";
            returnMessage += "<td>" + object.maintained_by + "</td>";
            returnMessage += "<td>" + object.life_cycle_status + "</td>";
            returnMessage += "<td>" + object.asset_type + "</td>";
            returnMessage += "<td>" + object.booking_code + "</td>";
            returnMessage += "<td>" + latitude + "</td>";
            returnMessage += "<td>" + longitude + "</td>";
            returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + longitude + " " + latitude + "' target='_blank'>Click to view</a></td>";
            returnMessage += "</tr>";
       }
    }
}

document.getElementById("parksSportsTable").innerHTML = returnMessage; 
};

function searchParkSteward(stewardSearch){
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Park Steward</h3>";
    let returnMessage = "<tr><th onclick='sortParkSportsTable(0)'>Asset CD</th><th onclick='sortParkSportsTable(1)'>Steward</th><th onclick='sortParkSportsTable(2)'>Maintained By</th><th onclick='sortParkSportsTable(4)'>Life Cycle Status</th><th onclick='sortParkSportsTable(5)'>Asset Type</th><th onclick='sortParkSportsTable(6)'>Booking Code</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

    let stewardValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];
        //console.log("variable object is: ", object);

        if(object.steward){
        stewardValue = object.steward;

            if(stewardValue.toLowerCase().includes(stewardSearch.toLowerCase())){
                
                
                let latitude =  object.the_geom.coordinates[0][0][0][0];
                let longitude = object.the_geom.coordinates[0][0][0][1];


                returnMessage += "<tr>";
                returnMessage += "<td>" + object.asset_cd + "</td>";
                returnMessage += "<td>" + object.steward + "</td>";
                returnMessage += "<td>" + object.maintained_by + "</td>";
                returnMessage += "<td>" + object.life_cycle_status + "</td>";
                returnMessage += "<td>" + object.asset_type + "</td>";
                returnMessage += "<td>" + object.booking_code + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + longitude + " " + latitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
           }
        }
    }

    document.getElementById("parksSportsTable").innerHTML = returnMessage; 
};

function searchParkMaintained(maintained){
       
   
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Maintained By</h3>";
    let returnMessage = "<tr><th onclick='sortParkSportsTable(0)'>Asset CD</th><th onclick='sortParkSportsTable(1)'>Steward</th><th onclick='sortParkSportsTable(2)'>Maintained By</th><th onclick='sortParkSportsTable(4)'>Life Cycle Status</th><th onclick='sortParkSportsTable(5)'>Asset Type</th><th onclick='sortParkSportsTable(6)'>Booking Code</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

    let maintainedValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];
        //console.log("variable object is: ", object);

        if(object.maintained_by){
            maintainedValue = object.maintained_by;

            if(maintainedValue.toLowerCase().includes(maintained.toLowerCase())){
                
                
                let latitude =  object.the_geom.coordinates[0][0][0][0];
                let longitude = object.the_geom.coordinates[0][0][0][1];


                returnMessage += "<tr>";
                returnMessage += "<td>" + object.asset_cd + "</td>";
                returnMessage += "<td>" + object.steward + "</td>";
                returnMessage += "<td>" + object.maintained_by + "</td>";
                returnMessage += "<td>" + object.life_cycle_status + "</td>";
                returnMessage += "<td>" + object.asset_type + "</td>";
                returnMessage += "<td>" + object.booking_code + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + longitude + " " + latitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
           }
        }
    }

    document.getElementById("parksSportsTable").innerHTML = returnMessage; 
};

function searchParkAsset(asset){
        document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Asset Type</h3>";
    let returnMessage = "<tr><th onclick='sortParkSportsTable(0)'>Asset CD</th><th onclick='sortParkSportsTable(1)'>Steward</th><th onclick='sortParkSportsTable(2)'>Maintained By</th><th onclick='sortParkSportsTable(4)'>Life Cycle Status</th><th onclick='sortParkSportsTable(5)'>Asset Type</th><th onclick='sortParkSportsTable(6)'>Booking Code</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

    let assetValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];
        //console.log("variable object is: ", object);

        if(object.asset_type){
            assetValue = object.asset_type;

            if(assetValue.toLowerCase().includes(asset.toLowerCase())){
                
                
                let latitude =  object.the_geom.coordinates[0][0][0][0];
                let longitude = object.the_geom.coordinates[0][0][0][1];


                returnMessage += "<tr>";
                returnMessage += "<td>" + object.asset_cd + "</td>";
                returnMessage += "<td>" + object.steward + "</td>";
                returnMessage += "<td>" + object.maintained_by + "</td>";
                returnMessage += "<td>" + object.life_cycle_status + "</td>";
                returnMessage += "<td>" + object.asset_type + "</td>";
                returnMessage += "<td>" + object.booking_code + "</td>";
                returnMessage += "<td>" + latitude + "</td>";
                returnMessage += "<td>" + longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + longitude + " " + latitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
           }
        }
    }

    document.getElementById("parksSportsTable").innerHTML = returnMessage; 
};

function searchBookingCode(booking){
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Booking Code</h3>";
let returnMessage = "<tr><th onclick='sortParkSportsTable(0)'>Asset CD</th><th onclick='sortParkSportsTable(1)'>Steward</th><th onclick='sortParkSportsTable(2)'>Maintained By</th><th onclick='sortParkSportsTable(4)'>Life Cycle Status</th><th onclick='sortParkSportsTable(5)'>Asset Type</th><th onclick='sortParkSportsTable(6)'>Booking Code</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

let bookingValue;
for(let i = 0; i < record.length; i++){
    let object = record[i];
    //console.log("variable object is: ", object);

    if(object.booking_code){
        bookingValue = object.booking_code;

        if(bookingValue.toLowerCase().includes(booking.toLowerCase())){
            
            
            let latitude =  object.the_geom.coordinates[0][0][0][0];
            let longitude = object.the_geom.coordinates[0][0][0][1];


            returnMessage += "<tr>";
            returnMessage += "<td>" + object.asset_cd + "</td>";
            returnMessage += "<td>" + object.steward + "</td>";
            returnMessage += "<td>" + object.maintained_by + "</td>";
            returnMessage += "<td>" + object.life_cycle_status + "</td>";
            returnMessage += "<td>" + object.asset_type + "</td>";
            returnMessage += "<td>" + object.booking_code + "</td>";
            returnMessage += "<td>" + latitude + "</td>";
            returnMessage += "<td>" + longitude + "</td>";
            returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + longitude + " " + latitude + "' target='_blank'>Click to view</a></td>";
            returnMessage += "</tr>";
       }
    }
}

document.getElementById("parksSportsTable").innerHTML = returnMessage; 
};


function sortParkSportsTable(n){
 
    //declare and initalize variables
     let table = document.getElementById("parksSportsTable");
     let switchcount = 0;
     let switching = true;
     let dir = "asc";
     let rows;
     let i, x, y;
     let shouldSwitch;
     
     let tableLengthCheck= table.rows;

     if(201 > tableLengthCheck.length){

     while(switching) {
        switching = false;
        rows = table.rows;
    
        for (i = 1; i < (rows.length -1); i++){
            shouldSwitch = false;
    
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
    
            if(dir == "asc"){
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc"){
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
    
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
    
            switchcount++;
        } else{
            if (switchcount == 0 && dir == "asc"){
                dir = "desc";
                switching = true;
            }
        }
    
     }

    } else{
        alert("Table sorting is limited to 200 or fewer search results.")
    }
    
    };