
  
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js";
import "https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.1/marked.js";
import "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js";
import aPages from "../pages/index.js";
import aItems from "../items/index.js";

class Page {
    constructor(){
        console.log("test");
        this.sName = "Shannon Halycz";
        this.sURLToEmailer = "https://tranquil-badlands-69388.herokuapp.com/send";
        const sBase = document.location.pathname;
        if(sBase[sBase.length - 1] == "/"){
            this.sBase = sBase.substr(0, sBase.length -1);
        }else{
            const sFile = '/' + document.location.pathname.split('/').pop();
            this.sBase = sBase.substr(0, sBase.length - sFile.length); 
        }
    }
}