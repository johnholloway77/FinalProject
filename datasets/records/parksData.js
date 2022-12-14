xhr = new XMLHttpRequest();
record;

function loadParkData(){
    console.log("LoadJSONData funtion loaded");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON data written to variable record");
            record = JSON.parse(xhr.responseText);
        }
    };

    xhr.open("GET", "https://data.calgary.ca/resource/hh57-r3mr.json", true);
    xhr.send();
}


function searchSteward(stewardSearch){
    
    console.log("Search steward function", stewardSearch);
    document.getElementById('descriptionText').innerHTML = "<h3>Search Results by Steward</h3>";
    let returnMessage = "<tr><th onclick='sortTable(0)'>Steward</th><th onclick='sortTable(1)'>Maintained By</th><th onclick='sortTable(2)'>Asset Type</th><th onclick='sortTable(3)'>Dedicated To</th><th onclick='sortTable(4)'>Monument Name</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

    let stewardValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];
        //console.log("variable object is: ", object);

        if(object.steward){
        stewardValue = object.steward;

            if(stewardValue.toLowerCase().startsWith(stewardSearch.toLowerCase())){
                console.log('if statement run')
                returnMessage += "<tr>";
                returnMessage += "<td>" + object.steward + "</td>";
                returnMessage += "<td>" + object.maintained_by + "</td>";
                returnMessage += "<td>" + object.asset_type + "</td>";
                if( object.dedicated_to == null){
                    returnMessage += "<td>"+ "</td>";
                } else{returnMessage += "<td>" + object.dedicated_to + "</td>";
                };
                if(object.monument_name == null){
                    returnMessage += "<td>"+ "</td>";
                } else{returnMessage += "<td>" + object.monument_name + "</td>"};
                returnMessage += "<td>" + object.latitude + "</td>";
                returnMessage += "<td>" + object.longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + object.latitude + ' ' + object.longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
           }
        }
    }

    document.getElementById("parksTable").innerHTML = returnMessage; 
};

function searchMaintained(maintained){
    console.log("Search maintained function", maintained);

    document.getElementById('descriptionText').innerHTML = '<h3>Search Results by "Maintained by"</h3>';
    let returnMessage = "<tr><th onclick='sortTable(0)'>Steward</th><th onclick='sortTable(1)'>Maintained By</th><th onclick='sortTable(2)'>Asset Type</th><th onclick='sortTable(3)'>Dedicated To</th><th onclick='sortTable(4)'>Monument Name</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

    
        //console.log("variable object is: ", object);
    let maintainedValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];
        
     maintainedValue = object.maintained_by;

            if(maintainedValue != null && maintainedValue.toLowerCase().startsWith(maintained.toLowerCase())){
                console.log('if statement run')
                returnMessage += "<tr>";
                returnMessage += "<td>" + object.steward + "</td>";
                returnMessage += "<td>" + object.maintained_by + "</td>";
                returnMessage += "<td>" + object.asset_type + "</td>";
                if( object.dedicated_to == null){
                    returnMessage += "<td>"+ "</td>";
                } else{returnMessage += "<td>" + object.dedicated_to + "</td>";
                };
                if(object.monument_name == null){
                    returnMessage += "<td>"+ "</td>";
                } else{returnMessage += "<td>" + object.monument_name + "</td>"};
                returnMessage += "<td>" + object.latitude + "</td>";
                returnMessage += "<td>" + object.longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + object.latitude + ' ' + object.longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
           
        }
    }

    document.getElementById("parksTable").innerHTML = returnMessage; 
    
};

function searchAsset(asset){
    console.log("Search Asset function", asset);
    
    document.getElementById('descriptionText').innerHTML = '<h3>Search Results by "Asset Type:"</h3>';
    let returnMessage = "<tr><th onclick='sortTable(0)'>Steward</th><th onclick='sortTable(1)'>Maintained By</th><th onclick='sortTable(2)'>Asset Type</th><th onclick='sortTable(3)'>Dedicated To</th><th onclick='sortTable(4)'>Monument Name</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

    let assetValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];
        //console.log("variable object is: ", object);

        
        assetValue = object.asset_type;

            if(assetValue != null && assetValue.toLowerCase().startsWith(asset.toLowerCase())){
                console.log('if statement run')
                returnMessage += "<tr>";
                returnMessage += "<td>" + object.steward + "</td>";
                returnMessage += "<td>" + object.maintained_by + "</td>";
                returnMessage += "<td>" + object.asset_type + "</td>";
                if( object.dedicated_to == null){
                    returnMessage += "<td>"+ "</td>";
                } else{returnMessage += "<td>" + object.dedicated_to + "</td>";
                };
                if(object.monument_name == null){
                    returnMessage += "<td>"+ "</td>";
                } else{returnMessage += "<td>" + object.monument_name + "</td>"};
                returnMessage += "<td>" + object.latitude + "</td>";
                returnMessage += "<td>" + object.longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + object.latitude + ' ' + object.longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
           
        }
    }

    document.getElementById("parksTable").innerHTML = returnMessage; 

};

function searchedDedicated(dedicated){
    console.log("Search dedicated function", dedicated);
    
    document.getElementById('descriptionText').innerHTML = '<h3>Search Results by "Dedicated To:"</h3>';
    let returnMessage = "<tr><th onclick='sortTable(0)'>Steward</th><th onclick='sortTable(1)'>Maintained By</th><th onclick='sortTable(2)'>Asset Type</th><th onclick='sortTable(3)'>Dedicated To</th><th onclick='sortTable(4)'>Monument Name</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

    let dedicatedValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];
        //console.log("variable object is: ", object);

        
        dedicatedValue = object.dedicated_to;

        if(dedicatedValue != null && dedicatedValue.toLowerCase().startsWith(dedicated.toLowerCase())){
             console.log('if statement run')
            returnMessage += "<tr>";
            returnMessage += "<td>" + object.steward + "</td>";
            returnMessage += "<td>" + object.maintained_by + "</td>";
            returnMessage += "<td>" + object.asset_type + "</td>";
            if( object.dedicated_to == null){
                returnMessage += "<td>"+ "</td>";
            } else{returnMessage += "<td>" + object.dedicated_to + "</td>";
            };
            if(object.monument_name == null){
                returnMessage += "<td>"+ "</td>";
            } else{returnMessage += "<td>" + object.monument_name + "</td>"};
            returnMessage += "<td>" + object.latitude + "</td>";
            returnMessage += "<td>" + object.longitude + "</td>";
            returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + object.latitude + ' ' + object.longitude + "' target='_blank'>Click to view</a></td>";
            returnMessage += "</tr>";
           
        }
    }

    document.getElementById("parksTable").innerHTML = returnMessage; 
};

function searchMonument(name){
    console.log("Search monument function", name);
    
    document.getElementById('descriptionText').innerHTML = '<h3>Search Results by "Monument Name:"</h3>';
    let returnMessage = "<tr><th onclick='sortTable(0)'>Steward</th><th onclick='sortTable(1)'>Maintained By</th><th onclick='sortTable(2)'>Asset Type</th><th onclick='sortTable(3)'>Dedicated To</th><th onclick='sortTable(4)'>Monument Name</th><th>Latitude</th><th>Longitude</th><th>View on Map</th></tr>";

    let nameValue;
    for(let i = 0; i < record.length; i++){
        let object = record[i];
        //console.log("variable object is: ", object);

        
        nameValue = object.monument_name;

            if(nameValue != null && nameValue.toLowerCase().startsWith(name.toLowerCase())){
                console.log('if statement run')
                returnMessage += "<tr>";
                returnMessage += "<td>" + object.steward + "</td>";
                returnMessage += "<td>" + object.maintained_by + "</td>";
                returnMessage += "<td>" + object.asset_type + "</td>";
                if( object.dedicated_to == null){
                    returnMessage += "<td>"+ "</td>";
                } else{returnMessage += "<td>" + object.dedicated_to + "</td>";
                };
                if(object.monument_name == null){
                    returnMessage += "<td>"+ "</td>";
                } else{returnMessage += "<td>" + object.monument_name + "</td>"};
                returnMessage += "<td>" + object.latitude + "</td>";
                returnMessage += "<td>" + object.longitude + "</td>";
                returnMessage += "<td><a href='https://www.google.com/maps/search/?api=1&query=" + object.latitude + ' ' + object.longitude + "' target='_blank'>Click to view</a></td>";
                returnMessage += "</tr>";
           
        }
    }

    document.getElementById("parksTable").innerHTML = returnMessage; 

    
}

function sortTable(n){
 
    //declare and initalize variables
     let table = document.getElementById("parksTable");
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