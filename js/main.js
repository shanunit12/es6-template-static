
  
i

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