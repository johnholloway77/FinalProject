var xmldoc;

function loadWell(){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON data written to variable record");
            xmldoc = xhr.responseXML;
            
            console.log("SearchWell", xmldoc);
        }
    };

    xhr.open("GET", "/FinalProject/welldata/welldata.xml", true);
    xhr.send();
     
}

function searchWell(){
    
    let searchValue = document.getElementById('searchText').value; 
    
    let resultInfo = ""
    let returnMessage = "";
    let wellCount = 0;

    let x = xmldoc.getElementsByTagName("welldata");
  
    for (let i = 0; i < x.length; i++){

    let wellname = x[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
    wellname = wellname.trim()
    

    if(searchValue.toUpperCase() == wellname.toUpperCase()){
    //console.log(x[i].getElementsByTagName("location")[0].childNodes[0].nodeValue);
        //resultInfo = "<h3>Well and Production Information For: " + searchValue + "</h3><br>"
        wellCount++;

        returnMessage += "<h3>Well information for " +  wellname + "</h3><br>"
        returnMessage += "<table class='singleWellTable');return false'>";
        returnMessage += "<tr><th>Location</th><th>Well Depth</th><th>Perforation Depth</th><th>Perforation Zone</th><th>Pump Stroke Length</th><th>Strokes per Minute</th></tr>";
        
        returnMessage += "<td>" + wellname + "</td>";
        returnMessage += "<td>" + x[i].getElementsByTagName("welldepth")[0].childNodes[0].nodeValue + "</td>";
        returnMessage += "<td>" + x[i].getElementsByTagName("perfdepth")[0].childNodes[0].nodeValue + "</td>";
        returnMessage += "<td>" + x[i].getElementsByTagName("perfzone")[0].childNodes[0].nodeValue + "</td>";
        returnMessage += "<td>" + x[i].getElementsByTagName("stroke")[0].childNodes[0].nodeValue + "</td>";
        returnMessage += "<td>" + x[i].getElementsByTagName("strokepermin")[0].childNodes[0].nodeValue + "</td>";
        
        
        returnMessage += "</table><br>"

        loadProduction(wellname);



    }else if(wellname.toUpperCase().startsWith(searchValue.toUpperCase())){
        //returnMessage += "Match found for " + searchValue + ": <b>" + wellname  + "</b><br>";
        wellCount++;

        resultInfo = "<h3>Matches found for: " + searchValue + "</h3><h4>Click on a table to load more information</h4>"

        returnMessage += "<h3>" +  wellname + "</h3>"
        returnMessage += "<table class='wellnameTable' onclick='updateSearch(\"" + wellname + "\");return false'>";
        returnMessage += "<tr><th>Location</th><th>Well Depth</th><th>Perforation Depth</th><th>Perforation Zone</th><th>Pump Stroke Length</th><th>Strokes per Minute</th></tr>";
        
        returnMessage += "<td>" + wellname + "</td>";
        returnMessage += "<td>" + x[i].getElementsByTagName("welldepth")[0].childNodes[0].nodeValue +"</td>";       
        returnMessage += "<td>" + x[i].getElementsByTagName("perfdepth")[0].childNodes[0].nodeValue + "</td>";
        returnMessage += "<td>" + x[i].getElementsByTagName("perfzone")[0].childNodes[0].nodeValue + "</td>";      
        returnMessage += "<td>" + x[i].getElementsByTagName("stroke")[0].childNodes[0].nodeValue + "</td>";
        returnMessage += "<td>" + x[i].getElementsByTagName("strokepermin")[0].childNodes[0].nodeValue + "</td>";       
        returnMessage += "</table><br>"

    }

   }

   if(wellCount == 0){
    returnMessage = "<div class='noResultsText'>Sorry, there were no matches for <b>" + searchValue + "</b><br>";
    returnMessage += "Please ensure your search is in accordarnce with the Alberta Township System shown below:<br><br>Example: <b>B15-98-W5</b><br>";

    returnMessage += "<br><table id='exampleTable'><tr><th>Section</th><th></th><th>Township</th><th></th><th>Range</th><th></th><th>Meridian</th></tr><tr><td>B15</td><td>-</td><td>98</td><td>-</td><td>17</td><td>-</td><td>W5</td></tr></table><br>"

    returnMessage += "<b>Valid Data Range</b>:<br>Section: A-D and 1-16<br>Township: 1-126<br>Range: 1-24<br>Meridian: W and 4-6</div>"


}
document.getElementById('resultInfo').innerHTML = resultInfo;
document.getElementById('searchResults').innerHTML = returnMessage;
document.getElementById('productionTextField').innerHTML = "";

console.log('searchValue: ', searchValue)
}




//function for searching productiondata.xml
function loadProduction(wellname){
    let xmlProDoc;

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("JSON data written to variable record");
            xmlProDoc = xhr.responseXML;
            console.log("loadProduction", xmlProDoc);
            searchProduction(wellname, xmlProDoc);
            
        }
    };

    xhr.open("GET", "/FinalProject/welldata/productiondata.xml", true);
    xhr.send();
}

function searchProduction(wellname, xmlProDoc){
    let returnMessage = "";
    let wellCount = 0;
    
    let x = xmlProDoc.getElementsByTagName("productiondata");
    console.log('let x: ', x);
    console.log('x.length', x.length)

    returnMessage += "<h3>Production data found for " + wellname + "</h3><br>";
    returnMessage += "<table class='productionWellTable'>";
    returnMessage += "<tr><th>Location</th><th>Date</th><th>Oil Production</th><th>Water Production</th><th>Gas Prouction</th></tr>";

    

    for(let i = 0; i < x.length; i++){

    

        let productionWellname = x[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
        console.log('productionWellname', productionWellname, typeof productionWellname);
        //JSON.stringify(productionWellname);
        //console.log('productionWellname', productionWellname, typeof productionWellname);
       
        productionWellname = productionWellname.trim();
       
        console.log('wellname', wellname);

        if(wellname == productionWellname){
            console.log('productionWellname match found!')
            wellCount++;
            returnMessage += "<tr><td>" + wellname + "</td>";
            returnMessage += "<td>" + x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td>";
            returnMessage += "<td>" + x[i].getElementsByTagName("oilproduction")[0].childNodes[0].nodeValue + "</td>";
            returnMessage += "<td>" + x[i].getElementsByTagName("waterproduction")[0].childNodes[0].nodeValue + "</td>";
            returnMessage += "<td>" + x[i].getElementsByTagName("gasproduction")[0].childNodes[0].nodeValue + "</td></tr>";
        }
    

    }

    returnMessage += "</table><br>";

    document.getElementById('productionTextField').innerHTML = returnMessage;
}


//function will update the value for the search, as well as search again with the updated value.
function updateSearch(wellname){
    document.getElementById('searchText').value = wellname;
    searchWell();
}

function resetSearch(){
    returnMessage = ""
    document.getElementById('searchText').value = null;
    document.getElementById('searchResults').innerHTML = returnMessage;
    document.getElementById('productionTextField').innerHTML = returnMessage;
}