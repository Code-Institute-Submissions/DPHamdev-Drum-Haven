

/* Mouse events for testimonials */

$( "#christian" ).mouseenter(function() {$( "#christian-text" ).show() });
$( "#christian" ).mouseleave(function() {$( "#christian-text" ).hide() });

$( "#jack" ).mouseenter(function() {$( "#jack-text" ).show() });
$( "#jack" ).mouseleave(function() {$( "#jack-text" ).hide() });

$( "#adrian" ).mouseenter(function() {$( "#adrian-text" ).show() });
$( "#adrian" ).mouseleave(function() {$( "#adrian-text" ).hide() });

$( "#tony" ).mouseenter(function() {$( "#tony-text" ).show() });
$( "#tony" ).mouseleave(function() {$( "#tony-text" ).hide() });

/* Servicing button events */

$( "#drumServ" ).mouseenter(function() {$( "#drumServ-text" ).show() });
$( "#drumServ" ).mouseleave(function() {$( "#drumServ-text" ).hide() });

$( "#cymRep" ).mouseenter(function() {$( "#cymRep-text" ).show() });
$( "#cymRep" ).mouseleave(function() {$( "#cymRep-text" ).hide() });

/* Drum Tuning Form Function */

let tuningForm = document.getElementById('tuning-form');
tuningForm.addEventListener('submit', handleSubmitTune);

function handleSubmitTune(event) {

    event.preventDefault();

    console.log('Submitting...');

    let tuneFullName = tuningForm.elements['tuneFuName'].value 
    let bassDrum = tuningForm.elements['bDrum'].value
    let tuneBrand = tuningForm.elements['tuneBrand'].value
    let tomNotes = tuningForm.elements['tomNotes'].value
    let snareDrum = tuningForm.elements['sDrum'].value
    let kSize = tuningForm.elements['kitSize'].value
    let price = document.getElementById('tunePrice').innerHTML


    let alertHtml = `Thank you ${tuneFullName} for submitting your tuning request. 
    
    Your kit spec includes:
    Kit Size: ${kSize}
    Brand: ${tuneBrand}
    Bass Drum: ${bassDrum}
    Snare Drum: ${snareDrum}
    Your tom sizes are:
    ${tomNotes}

    The price will be ${price}

    We'll respond to you soon`;

    window.alert(alertHtml);
    
}




let tprice = {"4-Piece":"£40","5-Piece":"£50"};

$(function(){
    $('select[name=kitSize]').change(function(){
      document.getElementById('tunePrice').textContent = tprice[$(this).val()];
    });
  });
