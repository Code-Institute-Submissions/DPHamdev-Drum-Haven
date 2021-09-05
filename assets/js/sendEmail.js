function sendForm(contactForm) {
    emailjs.send('Gmail', 'Contact', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.comments.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

/********************* Drum Tuning Form Email Function */

function sendTuneForm(contactForm) {
    emailjs.send('Gmail', 'Tuning', {
        "from_name": contactForm.tunefuName.value,
        "from_email": contactForm.tuneEmail.value,
        "kitsize": contactForm.kitSize.value,
        "bassdrum": contactForm.bDrum.value,
        "snaredrum": contactForm.sDrum.value,
        "tomsizes": contactForm.tomNotes.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    document.getElementById("tuning-form").reset();
    return false;  // To block from loading a new page
}

/********************* Drum Service Form Email Function */

function sendServForm(contactForm) {
    emailjs.send('Gmail', 'drumserv', {
        "from_name": contactForm.servfuName.value,
        "from_email": contactForm.servEmail.value,
        "brand": contactForm.servBrand.value,
        "style": contactForm.servStyle.value,
        "quan": contactForm.servQuan.value,
        "notes": contactForm.servNotes.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    document.getElementById("serviceform").reset();
    return false;  // To block from loading a new page
}

/********************* Cymbal Repair Form Email Function */

function sendCymForm(contactForm) {
    emailjs.send('Gmail', 'cymrep', {
        "from_name": contactForm.cymfuName.value,
        "from_email": contactForm.cymEmail.value,
        "brand": contactForm.cymBrand.value,
        "size": contactForm.cymSize.value,
        "damage": contactForm.cymDam.value,
        "notes": contactForm.cymNotes.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    document.getElementById("cym-form").reset();
    return false;  // To block from loading a new page 
}
