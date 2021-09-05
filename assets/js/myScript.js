

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

/* Drum Tuning Function */
let kitSize = ["3 Piece", "4 Piece", "5 Piece", "6 Piece", "7 Piece", "8 Piece", "9 Piece", "10 Piece"];

let bassDrum = [16, 18, 20, 22, 24, 26];
let tom = [6, 8, 10, 12, 13, 14, 15, 16, 18,];
let snare = [10, 12, 13, 14, 15];

/* let tuneForm = document.createElement("form");
tuneForm.innerHTML = `
        <label for="fuName">Full Name</label>
        <br>
        <input type="text" name="fuName">
        <br>
        <label for="brand">Brand</label>
        <br>
        <input type="text" name="brand">
        <br>
            <label for="bDrum">Bass Drum</label>
            <br>
            <label for="bDrum">16"</label>
            <input type="checkbox" name="bDrum" id="bDrum16" value="16">
            <label for="bDrum">18"</label>
            <input type="checkbox" name="bDrum" id="bDrum18" value="18">
            <label for="bDrum">20"</label>
            <input type="checkbox" name="bDrum" id="bDrum20" value="20">
            <label for="bDrum">22"</label>
            <input type="checkbox" name="bDrum" id="bDrum22" value="22">
            <label for="bDrum">24"</label>
            <input type="checkbox" name="bDrum" id="bDrum24" value="24">
            <label for="bDrum">26"</label>
            <input type="checkbox" name="bDrum" id="bDrum26" value="26">
            <br>
                <label for="bDrum">Tom Drum</label>
                <br>
                <label for="bDrum6">6"</label>
                <input type="checkbox" name="tDrum6" value="6">
                <label for="bDrum8">8"</label>
                <input type="checkbox" name="tDrum8" value="8">
                <label for="bDrum10">10"</label>
                <input type="checkbox" name="tDrum10" value="10">
                <label for="bDrum12">12"</label>
                <input type="checkbox" name="tDrum12" value="12">
                <label for="bDrum13">13"</label>
                <input type="checkbox" name="tDrum13" value="13">
                <label for="bDrum14">14"</label>
                <input type="checkbox" name="tDrum14" value="14">
                <label for="bDrum15">15"</label>
                <input type="checkbox" name="tDrum15" value="15">
                <label for="bDrum16">16"</label>
                <input type="checkbox" name="tDrum16" value="16">
                <label for="bDrum18">18"</label>
                <input type="checkbox" name="tDrum18" value="18">
                    <br>
                    <label for="bDrum">Snare Drum</label>
                    <br>
                    <label for="bDrum10">10"</label>
                    <input type="checkbox" name="sDrum10" value="10">
                    <label for="bDrum12">12"</label>
                    <input type="checkbox" name="sDrum12" value="12">
                    <label for="bDrum13">13"</label>
                    <input type="checkbox" name="sDrum13" value="13">
                    <label for="bDrum14">14"</label>
                    <input type="checkbox" name="sDrum14" value="14">
                    <label for="bDrum15">15"</label>
                    <input type="checkbox" name="sDrum15" value="15">
                    <br>
                        <label for="notes">Notes</label>
                        <br>
                        <input type="text" name="notes">
                            <br>
                            <br>
                            <input action="/form.html" method="post" type="submit" onclick="check();" value="Tune my drums!">
`
document.getElementById("drum-tuning").appendChild(tuneForm);

$("#tuneSubmit").click(function tuneSubmit() {
    $("input:checkbox[name=bDrum]:checked").each(function(){
        bassDrum.push($(this).val());
    }); return bassDrum
}) */

let tuningForm = document.getElementById('tuning-form');
tuningForm.addEventListener('submit', handleSubmitTune);

function handleSubmitTune(event) {

    event.preventDefault();

    console.log('Submitting...');

    let tuneFullName = tuningForm.elements['tuneFuName'].value 
    let bassDrum = tuningForm.elements['bDrum'].value
    let tuneBrand = tuningForm.elements['tuneBrand'].value
    let tomDrum = tuningForm.elements['tDrum'].value
    let snareDrum = tuningForm.elements['sDrum'].value
    let notes = tuningForm.elements['tuneNotes'].value
    let kSize = tuningForm.elements['kitSize'].value


    let alertHtml = `Thank you ${tuneFullName} for submitting your tuning request. 
    
    Your kit spec includes:
    Kit Size: ${kSize}
    Brand: ${tuneBrand}
    Bass Drum: ${bassDrum}
    Tom Drums: ${tomDrum}
    Snare Drum: ${snareDrum}
    Any additional notes you've included: 
    ${notes}
    We'll respond to you soon`;

    window.alert(alertHtml);
    
    return false;
}

/* let person = [];

var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("bDrum").value;
 $("input:checkbox[name=bDrum]:checked").each(function(){
    person.push($(this).val());
});
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("bDrum").value = "";
 return person
}

console.log(person) */