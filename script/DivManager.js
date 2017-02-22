/**
 *@author Gabriele Lombari gabriele.lombari@gmail.com */

function DivManager() {
    this.text = document.getElementById("vocal_assistant_text"); this.image =
    document.getElementById("vocal_assistant_image");
}

DivManager.prototype.setText = function(testo) {
        this.text.innerHTML = testo;
}

DivManager.prototype.addText = function(testo){
    this.text.innerHTML += " " + testo;
    }

DivManager.prototype.clear = function(){
    this.text.innerHTML = "";
    }

DivManager.prototype.getText = function(){
    return this.text.innerHTML;
    }
DivManager.prototype.startTalk = function(){
    this.image.src = base + "image.gif";
    }

DivManager.prototype.stopTalk = function(){
    this.image.src = base + "icon16.png";
    }