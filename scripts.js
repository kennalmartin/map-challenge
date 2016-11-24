//onclick functions


//depending on which state was clicked on, the following function will fire
function stateClicked(e){

  //append a div with state info
  function addStateDiv(){
    var d = document.createElement('div');
    d.id = 'state-div';

    //if clicked, the new div will be removed
    d.onclick = function(){if(document.getElementById('state-div')){closeDiv(d)}};
    d.innerHTML = 'You clicked on ' + e.target.id.slice(0, -9) + '!';
    document.getElementById('click-div').appendChild(d);
  }

  //removes state-div
  function closeDiv(d){
        document.getElementById('click-div').removeChild(d);
    }

    //this checks if a state-div has already been created and removes it before creating another one
  if(!document.getElementById('state-div')){
      addStateDiv();
  }
  else{
    closeDiv(document.getElementById('state-div'));
    addStateDiv();
  }
}

//this binds the function to the map on the DOM
document.getElementById('map').addEventListener('click', stateClicked);




//////////////////////////
// mouseover functions////
/////////////////////////

document.getElementById('utah-area-hov').addEventListener('mouseover', function(){
  document.getElementById('utah-hover').classList.add('states-hover');
  document.getElementById('utah-hover').classList.remove('states');
});


document.getElementById('alaska-area-hov').addEventListener('mouseover', function(){
  document.getElementById('alaska-hover').classList.add('states-hover');
  document.getElementById('alaska-hover').classList.remove('states');
});

document.getElementById('hawaii-area-hov').addEventListener('mouseover', function(){
  document.getElementById('hawaii-hover').classList.add('states-hover');
  document.getElementById('hawaii-hover').classList.remove('states');
});

document.getElementById('rhode-island-area-hov').addEventListener('mouseover', function(){
  document.getElementById('rhode-island-hover').classList.add('states-hover');
  document.getElementById('rhode-island-hover').classList.remove('states');
});

document.getElementById('maine-area-hov').addEventListener('mouseover', function(){
  document.getElementById('maine-hover').classList.add('states-hover');
  document.getElementById('maine-hover').classList.remove('states');
});

document.getElementById('new-hampshire-area-hov').addEventListener('mouseover', function(){
  document.getElementById('new-hampshire-hover').classList.add('states-hover');
  document.getElementById('new-hampshire-hover').classList.remove('states');
});

document.getElementById('connecticut-area-hov').addEventListener('mouseover', function(){
  document.getElementById('connecticut-hover').classList.add('states-hover');
  document.getElementById('connecticut-hover').classList.remove('states');
});

document.getElementById('massachusetts-area-hov').addEventListener('mouseover', function(){
  document.getElementById('massachusetts-hover').classList.add('states-hover');
  document.getElementById('massachusetts-hover').classList.remove('states');
});

document.getElementById('vermont-area-hov').addEventListener('mouseover', function(){
  document.getElementById('vermont-hover').classList.add('states-hover');
  document.getElementById('vermont-hover').classList.remove('states');
});

document.getElementById('new-jersey-area-hov').addEventListener('mouseover', function(){
  document.getElementById('new-jersey-hover').classList.add('states-hover');
  document.getElementById('new-jersey-hover').classList.remove('states');
});

document.getElementById('delaware-area-hov').addEventListener('mouseover', function(){
  document.getElementById('delaware-hover').classList.add('states-hover');
  document.getElementById('delaware-hover').classList.remove('states');
});

document.getElementById('maryland-area-hov').addEventListener('mouseover', function(){
  document.getElementById('maryland-hover').classList.add('states-hover');
  document.getElementById('maryland-hover').classList.remove('states');
});

document.getElementById('new-york-area-hov').addEventListener('mouseover', function(){
  document.getElementById('new-york-hover').classList.add('states-hover');
  document.getElementById('new-york-hover').classList.remove('states');
});

document.getElementById('pennsylvania-area-hov').addEventListener('mouseover', function(){
  document.getElementById('pennsylvania-hover').classList.add('states-hover');
  document.getElementById('pennsylvania-hover').classList.remove('states');
});

document.getElementById('south-carolina-area-hov').addEventListener('mouseover', function(){
  document.getElementById('south-carolina-hover').classList.add('states-hover');
  document.getElementById('south-carolina-hover').classList.remove('states');
});

document.getElementById('west-virginia-area-hov').addEventListener('mouseover', function(){
  document.getElementById('west-virginia-hover').classList.add('states-hover');
  document.getElementById('west-virginia-hover').classList.remove('states');
});

document.getElementById('virginia-area-hov').addEventListener('mouseover', function(){
  document.getElementById('virginia-hover').classList.add('states-hover');
  document.getElementById('virginia-hover').classList.remove('states');
});

document.getElementById('north-carolina-area-hov').addEventListener('mouseover', function(){
  document.getElementById('north-carolina-hover').classList.add('states-hover');
  document.getElementById('north-carolina-hover').classList.remove('states');
});

document.getElementById('georgia-area-hov').addEventListener('mouseover', function(){
  document.getElementById('georgia-hover').classList.add('states-hover');
  document.getElementById('georgia-hover').classList.remove('states');
});

document.getElementById('ohio-area-hov').addEventListener('mouseover', function(){
  document.getElementById('ohio-hover').classList.add('states-hover');
  document.getElementById('ohio-hover').classList.remove('states');
});

document.getElementById('florida-area-hov').addEventListener('mouseover', function(){
  document.getElementById('florida-hover').classList.add('states-hover');
  document.getElementById('florida-hover').classList.remove('states');
});

document.getElementById('alabama-area-hov').addEventListener('mouseover', function(){
  document.getElementById('alabama-hover').classList.add('states-hover');
  document.getElementById('alabama-hover').classList.remove('states');
});

document.getElementById('indiana-area-hov').addEventListener('mouseover', function(){
  document.getElementById('indiana-hover').classList.add('states-hover');
  document.getElementById('indiana-hover').classList.remove('states');
});

document.getElementById('kentucky-area-hov').addEventListener('mouseover', function(){
  document.getElementById('kentucky-hover').classList.add('states-hover');
  document.getElementById('kentucky-hover').classList.remove('states');
});

document.getElementById('tennessee-area-hov').addEventListener('mouseover', function(){
  document.getElementById('tennessee-hover').classList.add('states-hover');
  document.getElementById('tennessee-hover').classList.remove('states');
});

document.getElementById('mississippi-area-hov').addEventListener('mouseover', function(){
  document.getElementById('mississippi-hover').classList.add('states-hover');
  document.getElementById('mississippi-hover').classList.remove('states');
});

document.getElementById('michigan-area-hov').addEventListener('mouseover', function(){
  document.getElementById('michigan-hover').classList.add('states-hover');
  document.getElementById('michigan-hover').classList.remove('states');
});

document.getElementById('illinois-area-hov').addEventListener('mouseover', function(){
  document.getElementById('illinois-hover').classList.add('states-hover');
  document.getElementById('illinois-hover').classList.remove('states');
});

document.getElementById('wisconsin-area-hov').addEventListener('mouseover', function(){
  document.getElementById('wisconsin-hover').classList.add('states-hover');
  document.getElementById('wisconsin-hover').classList.remove('states');
});

document.getElementById('louisiana-area-hov').addEventListener('mouseover', function(){
  document.getElementById('louisiana-hover').classList.add('states-hover');
  document.getElementById('louisiana-hover').classList.remove('states');
});

document.getElementById('arkansas-area-hov').addEventListener('mouseover', function(){
  document.getElementById('arkansas-hover').classList.add('states-hover');
  document.getElementById('arkansas-hover').classList.remove('states');
});

document.getElementById('missouri-area-hov').addEventListener('mouseover', function(){
  document.getElementById('missouri-hover').classList.add('states-hover');
  document.getElementById('missouri-hover').classList.remove('states');
});

document.getElementById('iowa-area-hov').addEventListener('mouseover', function(){
  document.getElementById('iowa-hover').classList.add('states-hover');
  document.getElementById('iowa-hover').classList.remove('states');
});

document.getElementById('minnesota-area-hov').addEventListener('mouseover', function(){
  document.getElementById('minnesota-hover').classList.add('states-hover');
  document.getElementById('minnesota-hover').classList.remove('states');
});

document.getElementById('kansas-area-hov').addEventListener('mouseover', function(){
  document.getElementById('kansas-hover').classList.add('states-hover');
  document.getElementById('kansas-hover').classList.remove('states');
});

document.getElementById('oklahoma-area-hov').addEventListener('mouseover', function(){
  document.getElementById('oklahoma-hover').classList.add('states-hover');
  document.getElementById('oklahoma-hover').classList.remove('states');
});

document.getElementById('north-dakota-area-hov').addEventListener('mouseover', function(){
  document.getElementById('north-dakota-hover').classList.add('states-hover');
  document.getElementById('north-dakota-hover').classList.remove('states');
});

document.getElementById('south-dakota-area-hov').addEventListener('mouseover', function(){
  document.getElementById('south-dakota-hover').classList.add('states-hover');
  document.getElementById('south-dakota-hover').classList.remove('states');
});

document.getElementById('nebraska-area-hov').addEventListener('mouseover', function(){
  document.getElementById('nebraska-hover').classList.add('states-hover');
  document.getElementById('nebraska-hover').classList.remove('states');
});

document.getElementById('texas-area-hov').addEventListener('mouseover', function(){
  document.getElementById('texas-hover').classList.add('states-hover');
  document.getElementById('texas-hover').classList.remove('states');
});

document.getElementById('colorado-area-hov').addEventListener('mouseover', function(){
  document.getElementById('colorado-hover').classList.add('states-hover');
  document.getElementById('colorado-hover').classList.remove('states');
});

document.getElementById('new-mexico-area-hov').addEventListener('mouseover', function(){
  document.getElementById('new-mexico-hover').classList.add('states-hover');
  document.getElementById('new-mexico-hover').classList.remove('states');
});

document.getElementById('wyoming-area-hov').addEventListener('mouseover', function(){
  document.getElementById('wyoming-hover').classList.add('states-hover');
  document.getElementById('wyoming-hover').classList.remove('states');
});

document.getElementById('montana-area-hov').addEventListener('mouseover', function(){
  document.getElementById('montana-hover').classList.add('states-hover');
  document.getElementById('montana-hover').classList.remove('states');
});

document.getElementById('idaho-area-hov').addEventListener('mouseover', function(){
  document.getElementById('idaho-hover').classList.add('states-hover');
  document.getElementById('idaho-hover').classList.remove('states');
});

document.getElementById('arizona-area-hov').addEventListener('mouseover', function(){
  document.getElementById('arizona-hover').classList.add('states-hover');
  document.getElementById('arizona-hover').classList.remove('states');
});

document.getElementById('nevada-area-hov').addEventListener('mouseover', function(){
  document.getElementById('nevada-hover').classList.add('states-hover');
  document.getElementById('nevada-hover').classList.remove('states');
});

document.getElementById('washington-area-hov').addEventListener('mouseover', function(){
  document.getElementById('washington-hover').classList.add('states-hover');
  document.getElementById('washington-hover').classList.remove('states');
});

document.getElementById('california-area-hov').addEventListener('mouseover', function(){
  document.getElementById('california-hover').classList.add('states-hover');
  document.getElementById('california-hover').classList.remove('states');
});

document.getElementById('oregon-area-hov').addEventListener('mouseover', function(){
  document.getElementById('oregon-hover').classList.add('states-hover');
  document.getElementById('oregon-hover').classList.remove('states');
});







//////////////////////////
// mouseout functions////
/////////////////////////
document.getElementById('utah-area-hov').addEventListener('mouseout', function(){
  document.getElementById('utah-hover').classList.add('states');
  document.getElementById('utah-hover').classList.remove('states-hover');
});

document.getElementById('alaska-area-hov').addEventListener('mouseout', function(){
  document.getElementById('alaska-hover').classList.add('states');
  document.getElementById('alaska-hover').classList.remove('states-hover');
});

document.getElementById('hawaii-area-hov').addEventListener('mouseout', function(){
  document.getElementById('hawaii-hover').classList.add('states');
  document.getElementById('hawaii-hover').classList.remove('states-hover');
});

document.getElementById('rhode-island-area-hov').addEventListener('mouseout', function(){
  document.getElementById('rhode-island-hover').classList.add('states');
  document.getElementById('rhode-island-hover').classList.remove('states-hover');
});

document.getElementById('maine-area-hov').addEventListener('mouseout', function(){
  document.getElementById('maine-hover').classList.remove('states-hover');
  document.getElementById('maine-hover').classList.add('states');
});

document.getElementById('new-hampshire-area-hov').addEventListener('mouseout', function(){
  document.getElementById('new-hampshire-hover').classList.remove('states-hover');
  document.getElementById('new-hampshire-hover').classList.add('states');
});

document.getElementById('connecticut-area-hov').addEventListener('mouseout', function(){
  document.getElementById('connecticut-hover').classList.remove('states-hover');
  document.getElementById('connecticut-hover').classList.add('states');
});

document.getElementById('massachusetts-area-hov').addEventListener('mouseout', function(){
  document.getElementById('massachusetts-hover').classList.remove('states-hover');
  document.getElementById('massachusetts-hover').classList.add('states');
});

document.getElementById('vermont-area-hov').addEventListener('mouseout', function(){
  document.getElementById('vermont-hover').classList.remove('states-hover');
  document.getElementById('vermont-hover').classList.add('states');
});

document.getElementById('new-jersey-area-hov').addEventListener('mouseout', function(){
  document.getElementById('new-jersey-hover').classList.remove('states-hover');
  document.getElementById('new-jersey-hover').classList.add('states');
});

document.getElementById('delaware-area-hov').addEventListener('mouseout', function(){
  document.getElementById('delaware-hover').classList.remove('states-hover');
  document.getElementById('delaware-hover').classList.add('states');
});

document.getElementById('maryland-area-hov').addEventListener('mouseout', function(){
  document.getElementById('maryland-hover').classList.remove('states-hover');
  document.getElementById('maryland-hover').classList.add('states');
});

document.getElementById('new-york-area-hov').addEventListener('mouseout', function(){
  document.getElementById('new-york-hover').classList.remove('states-hover');
  document.getElementById('new-york-hover').classList.add('states');
});

document.getElementById('pennsylvania-area-hov').addEventListener('mouseout', function(){
  document.getElementById('pennsylvania-hover').classList.remove('states-hover');
  document.getElementById('pennsylvania-hover').classList.add('states');
});

document.getElementById('south-carolina-area-hov').addEventListener('mouseout', function(){
  document.getElementById('south-carolina-hover').classList.remove('states-hover');
  document.getElementById('south-carolina-hover').classList.add('states');
});

document.getElementById('west-virginia-area-hov').addEventListener('mouseout', function(){
  document.getElementById('west-virginia-hover').classList.remove('states-hover');
  document.getElementById('west-virginia-hover').classList.add('states');
});

document.getElementById('virginia-area-hov').addEventListener('mouseout', function(){
  document.getElementById('virginia-hover').classList.remove('states-hover');
  document.getElementById('virginia-hover').classList.add('states');
});

document.getElementById('north-carolina-area-hov').addEventListener('mouseout', function(){
  document.getElementById('north-carolina-hover').classList.remove('states-hover');
  document.getElementById('north-carolina-hover').classList.add('states');
});

document.getElementById('georgia-area-hov').addEventListener('mouseout', function(){
  document.getElementById('georgia-hover').classList.remove('states-hover');
  document.getElementById('georgia-hover').classList.add('states');
});

document.getElementById('ohio-area-hov').addEventListener('mouseout', function(){
  document.getElementById('ohio-hover').classList.remove('states-hover');
  document.getElementById('ohio-hover').classList.add('states');
});

document.getElementById('florida-area-hov').addEventListener('mouseout', function(){
  document.getElementById('florida-hover').classList.remove('states-hover');
  document.getElementById('florida-hover').classList.add('states');
});

document.getElementById('alabama-area-hov').addEventListener('mouseout', function(){
  document.getElementById('alabama-hover').classList.remove('states-hover');
  document.getElementById('alabama-hover').classList.add('states');
});

document.getElementById('indiana-area-hov').addEventListener('mouseout', function(){
  document.getElementById('indiana-hover').classList.remove('states-hover');
  document.getElementById('indiana-hover').classList.add('states');
});

document.getElementById('kentucky-area-hov').addEventListener('mouseout', function(){
  document.getElementById('kentucky-hover').classList.remove('states-hover');
  document.getElementById('kentucky-hover').classList.add('states');
});

document.getElementById('tennessee-area-hov').addEventListener('mouseout', function(){
  document.getElementById('tennessee-hover').classList.remove('states-hover');
  document.getElementById('tennessee-hover').classList.add('states');
});

document.getElementById('mississippi-area-hov').addEventListener('mouseout', function(){
  document.getElementById('mississippi-hover').classList.remove('states-hover');
  document.getElementById('mississippi-hover').classList.add('states');
});

document.getElementById('michigan-area-hov').addEventListener('mouseout', function(){
  document.getElementById('michigan-hover').classList.remove('states-hover');
  document.getElementById('michigan-hover').classList.add('states');
});

document.getElementById('illinois-area-hov').addEventListener('mouseout', function(){
  document.getElementById('illinois-hover').classList.remove('states-hover');
  document.getElementById('illinois-hover').classList.add('states');
});

document.getElementById('wisconsin-area-hov').addEventListener('mouseout', function(){
  document.getElementById('wisconsin-hover').classList.remove('states-hover');
  document.getElementById('wisconsin-hover').classList.add('states');
});

document.getElementById('louisiana-area-hov').addEventListener('mouseout', function(){
  document.getElementById('louisiana-hover').classList.remove('states-hover');
  document.getElementById('louisiana-hover').classList.add('states');
});

document.getElementById('arkansas-area-hov').addEventListener('mouseout', function(){
  document.getElementById('arkansas-hover').classList.remove('states-hover');
  document.getElementById('arkansas-hover').classList.add('states');
});

document.getElementById('missouri-area-hov').addEventListener('mouseout', function(){
  document.getElementById('missouri-hover').classList.remove('states-hover');
  document.getElementById('missouri-hover').classList.add('states');
});

document.getElementById('iowa-area-hov').addEventListener('mouseout', function(){
  document.getElementById('iowa-hover').classList.remove('states-hover');
  document.getElementById('iowa-hover').classList.add('states');
});

document.getElementById('minnesota-area-hov').addEventListener('mouseout', function(){
  document.getElementById('minnesota-hover').classList.remove('states-hover');
  document.getElementById('minnesota-hover').classList.add('states');
});

document.getElementById('kansas-area-hov').addEventListener('mouseout', function(){
  document.getElementById('kansas-hover').classList.remove('states-hover');
  document.getElementById('kansas-hover').classList.add('states');
});

document.getElementById('oklahoma-area-hov').addEventListener('mouseout', function(){
  document.getElementById('oklahoma-hover').classList.remove('states-hover');
  document.getElementById('oklahoma-hover').classList.add('states');
});

document.getElementById('north-dakota-area-hov').addEventListener('mouseout', function(){
  document.getElementById('north-dakota-hover').classList.remove('states-hover');
  document.getElementById('north-dakota-hover').classList.add('states');
});

document.getElementById('south-dakota-area-hov').addEventListener('mouseout', function(){
  document.getElementById('south-dakota-hover').classList.remove('states-hover');
  document.getElementById('south-dakota-hover').classList.add('states');
});

document.getElementById('nebraska-area-hov').addEventListener('mouseout', function(){
  document.getElementById('nebraska-hover').classList.remove('states-hover');
  document.getElementById('nebraska-hover').classList.add('states');
});

document.getElementById('texas-area-hov').addEventListener('mouseout', function(){
  document.getElementById('texas-hover').classList.remove('states-hover');
  document.getElementById('texas-hover').classList.add('states');
});

document.getElementById('colorado-area-hov').addEventListener('mouseout', function(){
  document.getElementById('colorado-hover').classList.remove('states-hover');
  document.getElementById('colorado-hover').classList.add('states');
});

document.getElementById('new-mexico-area-hov').addEventListener('mouseout', function(){
  document.getElementById('new-mexico-hover').classList.remove('states-hover');
  document.getElementById('new-mexico-hover').classList.add('states');
});

document.getElementById('wyoming-area-hov').addEventListener('mouseout', function(){
  document.getElementById('wyoming-hover').classList.remove('states-hover');
  document.getElementById('wyoming-hover').classList.add('states');
});

document.getElementById('montana-area-hov').addEventListener('mouseout', function(){
  document.getElementById('montana-hover').classList.remove('states-hover');
  document.getElementById('montana-hover').classList.add('states');
});

document.getElementById('idaho-area-hov').addEventListener('mouseout', function(){
  document.getElementById('idaho-hover').classList.remove('states-hover');
  document.getElementById('idaho-hover').classList.add('states');
});

document.getElementById('arizona-area-hov').addEventListener('mouseout', function(){
  document.getElementById('arizona-hover').classList.remove('states-hover');
  document.getElementById('arizona-hover').classList.add('states');
});

document.getElementById('nevada-area-hov').addEventListener('mouseout', function(){
  document.getElementById('nevada-hover').classList.remove('states-hover');
  document.getElementById('nevada-hover').classList.add('states');
});

document.getElementById('washington-area-hov').addEventListener('mouseout', function(){
  document.getElementById('washington-hover').classList.remove('states-hover');
  document.getElementById('washington-hover').classList.add('states');
});

document.getElementById('california-area-hov').addEventListener('mouseout', function(){
  document.getElementById('california-hover').classList.remove('states-hover');
  document.getElementById('california-hover').classList.add('states');
});

document.getElementById('oregon-area-hov').addEventListener('mouseout', function(){
  document.getElementById('oregon-hover').classList.remove('states-hover');
  document.getElementById('oregon-hover').classList.add('states');
});
