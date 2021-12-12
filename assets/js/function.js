/* Kit size function */

function kitselect() {
	let kitsize = document.getElementById('options');
  let kitone = document.getElementById('optionA');
  let kittwo = document.getElementById('optionB');
  let kitthree = document.getElementById('optionC');
  if (kitsize.value == "1") {
      	if (kitone.style.display == "none") {
      			kitone.style.display = "block";
            kittwo.style.display = "none";
            kitthree.style.display = "none";
            kitfour.style.display = "none";
      } else {
      	kitone.style.display = "none";
      }
  	}
  	else if (kitsize.value == "2") {
      	if (kittwo.style.display == "none") {
      			kitone.style.display = "none";
            kittwo.style.display = "block";
            kitthree.style.display = "none";
            kitfour.style.display = "none";
      } else {
      	kittwo.style.display = "none";
      }
    }
    else if (kitsize.value == "3") {
      	if (kitthree.style.display == "none") {
      			kitone.style.display = "none";
            kittwo.style.display = "none";
            kitthree.style.display = "block";
            kitfour.style.display = "none";
      } else {
      	kittwo.style.display = "none";
      }
    }
    else {
    	kitsize.value == "0"
    }
}


/* Tuning array */
let tunings = [
  "C1", "C#1", "D1", "D#1", "E1", 
  "F1", "F#1", "G1", "G#1", "A1", 
  "A#1", "B1", "C2", "C#2", "D2", 
  "D#2", "E2", "F2", "F#2", "G2", 
  "G#2", "A2", "A#2", "B2", "C3", 
  "C#3", "D3", "D#3", "E3", "F3", 
  "F#3", "G3", "G#3", "A3", "A#3", 
  "B3", "C4", "C#4", "D4", "D#4", 
  "E4", "F4", "F#4", "G4", "G#4"
];


/* Three piece kit tuning */

	/* kick function tuning */

function threepckickTun (slction) {
	let ThPcKiTu = document.getElementById('3pckick');
  if (ThPcKiTu.value == '18') {
  	document.getElementById('3pckicktune').innerHTML = "The Tuning is " + tunings[7];
    }
  else if (ThPcKiTu.value == '20') {
  	document.getElementById('3pckicktune').innerHTML = "The Tuning is " + tunings[6];
    }
  else if (ThPcKiTu.value == '22') {
  	document.getElementById('3pckicktune').innerHTML = "The Tuning is " + tunings[4];
    }
  else if (ThPcKiTu.value == '24') {
  	document.getElementById('3pckicktune').innerHTML = "The Tuning is " + tunings[2];
    }
  else {
  	document.getElementById('3pckicktune').innerHTML = ""
  }
}

	/* snare function tuning */

function threepcsnTun (slction) {
	let ThPcSnTu = document.getElementById('3pcsn');
  if (ThPcSnTu.value == '10') {
  	document.getElementById('3pcsntune').innerHTML = "The Tuning is " + tunings[31];
    }
  else if (ThPcSnTu.value == '12') {
  	document.getElementById('3pcsntune').innerHTML = "The Tuning is " + tunings[29];
    }
  else if (ThPcSnTu.value == '13') {
  	document.getElementById('3pcsntune').innerHTML = "The Tuning is " + tunings[28];
    }
  else if (ThPcSnTu.value == '14') {
  	document.getElementById('3pcsntune').innerHTML = "The Tuning is " + tunings[26];
    }
  else {
  	document.getElementById('3pcsntune').innerHTML = ""
  }
}

	/* 1 tom function tuning */

function threepctomTun (slction) {
	let ThPcToTu = document.getElementById('3pctom');
  if (ThPcToTu.value == '8') {
  	document.getElementById('3pctomtune').innerHTML = "The Tuning is " + tunings[26];
    }
  else if (ThPcToTu.value == '10') {
  	document.getElementById('3pctomtune').innerHTML = "The Tuning is " + tunings[23];
    }  
  else if (ThPcToTu.value == '12') {
  	document.getElementById('3pctomtune').innerHTML = "The Tuning is " + tunings[20];
    }
  else if (ThPcToTu.value == '13') {
  	document.getElementById('3pctomtune').innerHTML = "The Tuning is " + tunings[17];
    }
  else if (ThPcToTu.value == '14') {
  	document.getElementById('3pctomtune').innerHTML = "The Tuning is " + tunings[15];
    }
  else if (ThPcToTu.value == '16') {
  	document.getElementById('3pctomtune').innerHTML = "The Tuning is " + tunings[12];
    }
  else if (ThPcToTu.value == '18') {
  	document.getElementById('3pctomtune').innerHTML = "The Tuning is " + tunings[9];
    }
  else {
  	document.getElementById('3pctomtune').innerHTML = ""
  }
}


/* four piece kit tuning */

/* kick function tuning */
	
function fourpckickTun (slction) {
let FoPcKiTu = document.getElementById('4pckick');
  if (FoPcKiTu.value == '18') {
  	document.getElementById('4pckicktune').innerHTML = "The Tuning is " + tunings[7];
    }
  else if (FoPcKiTu.value == '20') {
  	document.getElementById('4pckicktune').innerHTML = "The Tuning is " + tunings[6];
    }
  else if (FoPcKiTu.value == '22') {
  	document.getElementById('4pckicktune').innerHTML = "The Tuning is " + tunings[4];
    }
  else if (FoPcKiTu.value == '24') {
  	document.getElementById('4pckicktune').innerHTML = "The Tuning is " + tunings[2];
    }
  else {
  	document.getElementById('4pckicktune').innerHTML = ""
  }
}

	/* snare functon tuning */

function fourpcsnTun (slction) {
	let FoPcSnTu = document.getElementById('4pcsn');
  if (FoPcSnTu.value == '10') {
  	document.getElementById('4pcsntune').innerHTML = "The Tuning is " + tunings[33];
    }
  else if (FoPcSnTu.value == '12') {
  	document.getElementById('4pcsntune').innerHTML = "The Tuning is " + tunings[31];
    }
  else if (FoPcSnTu.value == '13') {
  	document.getElementById('4pcsntune').innerHTML = "The Tuning is " + tunings[29];
    }
  else if (FoPcSnTu.value == '14') {
  	document.getElementById('4pcsntune').innerHTML = "The Tuning is " + tunings[28];
    }
  else {
  	document.getElementById('4pcsntune').innerHTML = ""
  }
}

	/* 1 tom function tuning */

function fourpctomoneTun (slction) {
	let FoPcToOneTu = document.getElementById('4pctom1');
  let FoPcToTwoTu = document.getElementById('4pctom2');
  if (FoPcToOneTu.value == '8') {
  	document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
    }
  else if (FoPcToOneTu.value == '10') {
  	document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[23];
    }
  else if (FoPcToOneTu.value == '12') {
  	document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[20];
    }
  else if (FoPcToOneTu.value == '13') {
  	document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[17];
    }
  else if (FoPcToOneTu.value == '14') {
  	document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[15];
    }
  else if (FoPcToOneTu.value == '16') {
  	document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[12];
    }
  else if (FoPcToOneTu.value == '18') {
  	document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[9];
    }
  else {
  	document.getElementById('4pctom1tune').innerHTML = ""
  }
}

	/* 2 tom function tuning */

function fourpctomtwoTun (slction) {
  let FoPcToOneTu = document.getElementById('4pctom1');
  let FoPcToTwoTu = document.getElementById('4pctom2');
  if (FoPcToTwoTu.value == '8' && FoPcToOneTu.value == '8') {
  	document.getElementById('4pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FoPcToTwoTu.value == '10' && FoPcToOneTu.value == '8') {
     	document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[26];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[33];
      }  
    else if (FoPcToTwoTu.value == '12' && FoPcToOneTu.value == '8') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[22];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FoPcToTwoTu.value == '13' && FoPcToOneTu.value == '8') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FoPcToTwoTu.value == '14' && FoPcToOneTu.value == '8') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FoPcToTwoTu.value == '16' && FoPcToOneTu.value == '8') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FoPcToTwoTu.value == '18' && FoPcToOneTu.value == '8') {
			document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FoPcToTwoTu.value == 'tom' && FoPcToOneTu.value == '8') {
    	document.getElementById('4pctom2tune').innerHTML = "";
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FoPcToTwoTu.value == '10' && FoPcToOneTu.value == '10') {
  	document.getElementById('4pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FoPcToTwoTu.value == '12' && FoPcToOneTu.value == '10') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[22];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FoPcToTwoTu.value == '13' && FoPcToOneTu.value == '10') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FoPcToTwoTu.value == '14' && FoPcToOneTu.value == '10') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FoPcToTwoTu.value == '16' && FoPcToOneTu.value == '10') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FoPcToTwoTu.value == '18' && FoPcToOneTu.value == '10') {
			document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FoPcToTwoTu.value == 'tom' && FoPcToOneTu.value == '10') {
    	document.getElementById('4pctom2tune').innerHTML = "";
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[23];
      }
    else if (FoPcToTwoTu.value == '12' && FoPcToOneTu.value == '12') {
  	document.getElementById('4pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FoPcToTwoTu.value == '13' && FoPcToOneTu.value == '12') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FoPcToTwoTu.value == '14' && FoPcToOneTu.value == '12') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FoPcToTwoTu.value == '16' && FoPcToOneTu.value == '12') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FoPcToTwoTu.value == '18' && FoPcToOneTu.value == '12') {
			document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FoPcToTwoTu.value == 'tom' && FoPcToOneTu.value == '12') {
    	document.getElementById('4pctom2tune').innerHTML = "";
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[20];
      }
    else if (FoPcToTwoTu.value == '13' && FoPcToOneTu.value == '13') {
  	document.getElementById('4pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FoPcToTwoTu.value == '14' && FoPcToOneTu.value == '13') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FoPcToTwoTu.value == '16' && FoPcToOneTu.value == '13') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FoPcToTwoTu.value == '18' && FoPcToOneTu.value == '13') {
			document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FoPcToTwoTu.value == 'tom' && FoPcToOneTu.value == '13') {
    	document.getElementById('4pctom2tune').innerHTML = "";
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[17];
      }
    else if (FoPcToTwoTu.value == '14' && FoPcToOneTu.value == '14') {
  	document.getElementById('4pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FoPcToTwoTu.value == '16' && FoPcToOneTu.value == '14') {
      document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FoPcToTwoTu.value == '18' && FoPcToOneTu.value == '14') {
			document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FoPcToTwoTu.value == 'tom' && FoPcToOneTu.value == '14') {
    	document.getElementById('4pctom2tune').innerHTML = "";
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[15];
      }
    else if (FoPcToTwoTu.value == '16' && FoPcToOneTu.value == '16') {
  	document.getElementById('4pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FoPcToTwoTu.value == '18' && FoPcToOneTu.value == '16') {
			document.getElementById('4pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FoPcToTwoTu.value == 'tom' && FoPcToOneTu.value == '16') {
    	document.getElementById('4pctom2tune').innerHTML = "";
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[12];
      }
    else if (FoPcToTwoTu.value == '18' && FoPcToOneTu.value == '18') {
  	document.getElementById('4pctom2tune').innerHTML = "This tuning pair isn't possible, a larger drum cannot be selected.";
    }
    else if (FoPcToTwoTu.value == 'tom' && FoPcToOneTu.value == '18') {
    	document.getElementById('4pctom2tune').innerHTML = "";
      document.getElementById('4pctom1tune').innerHTML = "The Tuning is " + tunings[9];
      }
    else {
      document.getElementById('4pctom2tune').innerHTML = ""
    }
}


/* five piece kit tuning */

	/* kick function tuning */

function fivepckickTun (slction) {
  let FiPcKiTu = document.getElementById('5pckick');
  if (FiPcKiTu.value == '18') {
  	document.getElementById('5pckicktune').innerHTML = "The Tuning is " + tunings[7];
    }
  else if (FiPcKiTu.value == '20') {
  	document.getElementById('5pckicktune').innerHTML = "The Tuning is " + tunings[6];
    }
  else if (FiPcKiTu.value == '22') {
  	document.getElementById('5pckicktune').innerHTML = "The Tuning is " + tunings[4];
    }
  else if (FiPcKiTu.value == '24') {
  	document.getElementById('5pckicktune').innerHTML = "The Tuning is " + tunings[2];
    }
  else {
  	document.getElementById('5pckicktune').innerHTML = ""
  }
}

	/* snare function tuning */

function fivepcsnTun (slction) {
	let FiPcSnTu = document.getElementById('5pcsn');
  if (FiPcSnTu.value == '10') {
  	document.getElementById('5pcsntune').innerHTML = "The Tuning is " + tunings[33];
    }
  else if (FiPcSnTu.value == '12') {
  	document.getElementById('5pcsntune').innerHTML = "The Tuning is " + tunings[31];
    }
  else if (FiPcSnTu.value == '13') {
  	document.getElementById('5pcsntune').innerHTML = "The Tuning is " + tunings[29];
    }
  else if (FiPcSnTu.value == '14') {
  	document.getElementById('5pcsntune').innerHTML = "The Tuning is " + tunings[28];
    }
  else {
  	document.getElementById('5pcsntune').innerHTML = ""
  }
}

	/* 1 tom function tuning */

function fivepctomoneTun (slction) {
	let FiPcToOneTu = document.getElementById('5pctom1');
  if (FiPcToOneTu.value == '8') {
  	document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
    }
  else if (FiPcToOneTu.value == '10') {
  	document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];
    }  
  else if (FiPcToOneTu.value == '12') {
  	document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[20];
    }
  else if (FiPcToOneTu.value == '13') {
  	document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[17];
    }
  else if (FiPcToOneTu.value == '14') {
  	document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[15];
    }
  else if (FiPcToOneTu.value == '16') {
  	document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[12];
    }
  else if (FiPcToOneTu.value == '18') {
  	document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[9];
    }
  else {
  	document.getElementById('5pctom1tune').innerHTML = ""
  }
}

	/* 2 tom function tuning */

function fivepctomtwoTun (slction) {
		let FiPcToOneTu = document.getElementById('5pctom1');
  	let FiPcToTwoTu = document.getElementById('5pctom2');
		if (FiPcToTwoTu.value == '8' && FiPcToOneTu.value == '8') {
  	document.getElementById('5pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '8') {
     	document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[26];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[33];
      }  
    else if (FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[22];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '8') {
			document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FiPcToTwoTu.value == 'tom' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom2tune').innerHTML = "";
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '10') {
  	document.getElementById('5pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[22];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '10') {
			document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FiPcToTwoTu.value == 'tom' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom2tune').innerHTML = "";
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];
      }
    else if (FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '12') {
  	document.getElementById('5pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '12') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '12') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '12') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '12') {
			document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FiPcToTwoTu.value == 'tom' && FiPcToOneTu.value == '12') {
    	document.getElementById('5pctom2tune').innerHTML = "";
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[20];
      }
    else if (FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '13') {
  	document.getElementById('5pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '13') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '13') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '13') {
			document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FiPcToTwoTu.value == 'tom' && FiPcToOneTu.value == '13') {
    	document.getElementById('5pctom2tune').innerHTML = "";
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[17];
      }
    else if (FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '14') {
  	document.getElementById('5pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '14') {
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '14') {
			document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FiPcToTwoTu.value == 'tom' && FiPcToOneTu.value == '14') {
    	document.getElementById('5pctom2tune').innerHTML = "";
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[15];
      }
    else if (FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '16') {
  	document.getElementById('5pctom2tune').innerHTML = "This tuning pair isn't possible, please select a larger drum.";
    }
    else if (FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '16') {
			document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];      }
    else if (FiPcToTwoTu.value == 'tom' && FiPcToOneTu.value == '16') {
    	document.getElementById('5pctom2tune').innerHTML = "";
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[12];
      }
    else if (FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '18') {
  	document.getElementById('5pctom2tune').innerHTML = "This tuning pair isn't possible, a larger drum cannot be selected.";
    }
    else if (FiPcToTwoTu.value == 'tom' && FiPcToOneTu.value == '18') {
    	document.getElementById('5pctom2tune').innerHTML = "";
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[9];
      }
    else {
      document.getElementById('5pctom2tune').innerHTML = ""
    }
}

	/* 3 tom function tuning */

function fivepctomthreeTun (slction) {
		let FiPcToOneTu = document.getElementById('5pctom1');
  	let FiPcToTwoTu = document.getElementById('5pctom2');
    let FiPcToThrTu = document.getElementById('5pctom3');
    /* 8 inch smallest tom tuning */
		if (FiPcToThrTu.value == '8' && FiPcToTwoTu.value == '8' && FiPcToOneTu.value == '8') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '10' && FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '8') {
     	document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
      }  
    else if (FiPcToThrTu.value == '12' && FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[22];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[26];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToThrTu.value == '13' && FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[23];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[21];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[25];
      }
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '8') {
			document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[6];
			document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[16];      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[26];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[33];
      }
    else if (FiPcToThrTu.value == '12' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '8') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '13' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[23];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[21];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[25];
      }
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[22];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToThrTu.value == '13' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '8') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[21];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[25];
      }
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
		else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '8') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '8') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '8') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '8') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, this is the largest drum.";
    	}
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '8') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];
      }
    /* 10 inch smallest tom tuning */
   	else if (FiPcToThrTu.value == '10' && FiPcToTwoTu.value == '10' && FiPcToOneTu.value == '10') {
  	document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    }
    else if (FiPcToThrTu.value == '12' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '10') {
     	document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
      }  
    else if (FiPcToThrTu.value == '13' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[23];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[21];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[22];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[29];
      }
    else if (FiPcToThrTu.value == '13' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '10') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[21];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '10') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '10') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
		else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '10') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '10') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, this is the largest drum.";
    	}
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '10') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];
      }
      
    /* 12 inch smallest tom tuning */
    
    else if (FiPcToThrTu.value == '12' && FiPcToTwoTu.value == '12' && FiPcToOneTu.value == '12') {
  	document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    }
    else if (FiPcToThrTu.value == '13' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '12') {
     	document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
      }  
    else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '12') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[21];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '12') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[18];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[22];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '12') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '12') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[19];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
    else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '12') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '12') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[18];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[22];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '12') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '12') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '12') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '12') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[16];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '12') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[26];
      }
		else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '12') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, this is the largest drum.";
    	}
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '12') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];
      }
      
    /* 13 inch smallest tom tuning */
    else if (FiPcToThrTu.value == '13' && FiPcToTwoTu.value == '13' && FiPcToOneTu.value == '13') {
  	document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    }
    else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '13') {
     	document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
      }  
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '13') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[18];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '13') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[15];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[19];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '13') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[17];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[24];
      }
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '13') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '13') {
    	document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[15];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[19];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '13') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '13') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, this is the largest drum.";
    	}
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '13') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[23];
      }
      
      
    /* 14 inch smallest tom tuning */
   	else if (FiPcToThrTu.value == '14' && FiPcToTwoTu.value == '14' && FiPcToOneTu.value == '14') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
    	}
    else if (FiPcToThrTu.value == '16' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '14') {
     	document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, please select a larger drum.";
      }  
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '14') {
      document.getElementById('5pctom3tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[15];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[18];
      }
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '16' && FiPcToOneTu.value == '14') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[14];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[21];
      }
    else if (FiPcToThrTu.value == '18' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '14') {
  		document.getElementById('5pctom3tune').innerHTML = "This tuning isn't possible, this is the largest drum.";
    	}
    else if (FiPcToThrTu.value == 'tom' && FiPcToTwoTu.value == '18' && FiPcToOneTu.value == '14') {
    	document.getElementById('5pctom3tune').innerHTML = "";
      document.getElementById('5pctom2tune').innerHTML = "The Tuning is " + tunings[11];
      document.getElementById('5pctom1tune').innerHTML = "The Tuning is " + tunings[18];
      }
    else {
      document.getElementById('5pctom3tune').innerHTML = ""
    }
}
