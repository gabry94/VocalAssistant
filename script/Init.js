/**
 *@description Script di inizializzazione del plugin.
 *@author Gabriele Lombari gabriele.lombari@gmail.com
 **/

function Init(){
    
    //Recupero il tag head della pagina per il caricamento dei vari scripts
    this.head = document.getElementsByTagName("head")[0];
    this.body = document.getElementsByTagName("body")[0];
    
    //Inizializzo un'array di scripts da caricare nella pagina
    this.scripts = ["script/DivManager.js","script/InteractionManager.js"];
}

Init.prototype.loadScripts = function(){
    console.debug("Caricamento script in corso...");
    for(var i = 0; i < this.scripts.length; i++){
        var script = document.createElement("script");
        script.src = base + this.scripts[i];
        this.head.appendChild(script);
    }
}
                                
Init.prototype.loadLanguage = function(){
    console.debug("Caricamento lingue in corso...");
    var userLang = navigator.language || navigator.userLanguage;
    switch (userLang) {
        case "it" | "en":
        {
            var script = document.createElement("script");
            script.src = base + "lang/" + userLang + ".js";
            this.head.appendChild(script);
        }
        default :
        {
            var script = document.createElement("script");
            script.src = base + "lang/it.js";
            this.head.appendChild(script);
        }
    }
}

Init.prototype.attachDiv = function(){
    var bodyChilds = this.body.childNodes;
    
    for(var i = 0; i < bodyChilds.length; i++){
        if (bodyChilds[i].nodeName != "#text") {
            bodyChilds[i].style.paddingTop = "210px";
            break;
        }
    }
    console.debug("Inserimento div in corso...");
    var div = document.createElement("div");
    //frame.src = base + "application_div.html";
    div.style.border = "solid 3px red";
    div.style.overflow = "hidden";
    div.style.backgroundColor = "white";

    var my_table =
    "<table style=\"width:100%;\">" +
    "<tbody>"+
    "<tr><td style=\"width: 35px; height: 35px\"><image id=\"vocal_assistant_image\" src=\"" + base + "icon16.png\" height=30 width=30 /></td> <td> <span>VocalAssistant</td></tr>" +
    "<tr><td colspan=\"2\" style=\"width: 100%\"> <div style=\"width: 100%\"><p id=\"vocal_assistant_text\" style=\"overflow: scroll; height: 130px; width: 100%\"></p></td></tr>" +
    "</tbody> </table>";
                                    
    div.innerHTML = my_table;
                                    
    div.style.width = "99%";
    div.style.height= "210px";
    div.style.position = "fixed";
    this.body.insertBefore(div, this.body.firstChild);
    }
 
Init.prototype.loadScript = function(pathScriptFile){
    var script = document.createElement("script");
    script.src = base + pathScriptFile;
    this.head.appendChild(script);
    }