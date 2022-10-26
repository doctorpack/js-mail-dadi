
let emails = [ "enrico@gmail.com" , "luca@gmail.com" , "franco@gmail.com"];//EMAIL VALIDE
let button = document.querySelector("button");
let output = document.querySelector("h1")

button.addEventListener( "click" , function(){
    let userEmail = document.getElementById("email").value;
    let Outputend = "";
    console.log(userEmail);
    // controllo presenza  mail nell'arrey
    for(let i = 0 ; i < emails.length ; i++){
        if(userEmail === emails[i]){
            // SE VERO
            Outputend = `<h1 class="">La tua email è presente </h1>`
            console.log(output);
            break;
        }else if(userEmail != emails[i] && i === emails.length - 1){
            // SE FALSO
            Outputend = `<h1 class="">email non presente</h1>`
            console.log(output);
        }
    }
    document.getElementById("output").innerHTML = Outputend
}
);