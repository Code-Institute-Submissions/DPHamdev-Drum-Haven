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
    let kitsize = document.getElementById('options');
    if (kitsize.value == '3pc') {
        emailjs.send('Gmail', '3pcTuning', {
            "from_name": contactForm.tunefuName.value,
            "from_email": contactForm.tuneEmail.value,
            "kitsize": contactForm.options.value,
            "3pcbassdrum": contactForm.threepckick.value,
            "3pcsnaredrum": contactForm.threepcsn.value,
            "3pctom": contactForm.threepctom.value,
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
        let threepctunedisplay = document.getElementsByClassName("3pctune");
        threepctunedisplay.style.display = "none"
        return false;  // To block from loading a new page
    }
    if (kitsize.value == '4pc') {
        emailjs.send('Gmail', 'Tuning', {
            "from_name": contactForm.tunefuName.value,
            "from_email": contactForm.tuneEmail.value,
            "kitsize": contactForm.options.value,
            "4pcbassdrum": contactForm.fourpckick.value,
            "4pcsnaredrum": contactForm.fourpcsn.value,
            "4pctomone": contactForm.fourpctomone.value,
            "4pctomtwo": contactForm.fourpctomtwo.value,
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
        let fourpctunedisplay = document.getElementsByClassName("4pctune");
        fourpctunedisplay.style.display = "none"
        return false;  // To block from loading a new page
    }
    if (kitsize.value == '5pc') {
        emailjs.send('Gmail', 'Tuning', {
            "from_name": contactForm.tunefuName.value,
            "from_email": contactForm.tuneEmail.value,
            "kitsize": contactForm.options.value,
            "5pcbassdrum": contactForm.fivepckick.value,
            "5pcsnaredrum": contactForm.fivepcsn.value,
            "5pctomone": contactForm.fivepctomone.value,
            "5pctomtwo": contactForm.fivepctomtwo.value,
            "5pctomthree": contactForm.fivepctomthree.value,
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
        let fivepctunedisplay = document.getElementsByClassName("5pctune");
        fivepctunedisplay.style.display = "none"
        return false;  // To block from loading a new page
    }
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
