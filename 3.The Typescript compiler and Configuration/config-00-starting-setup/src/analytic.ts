console.log('Sending...');

let logged;
function sendAnalytics(data: string) { //here function is defined before we call
    console.log(data);
    logged = true;
    console.log(logged);
    
}

sendAnalytics('The data'); 