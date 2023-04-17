function Cancel(){
    cont_doing = 0;
    cont_done = 0;
    document.querySelector("#Palavras").value = "";
    setOriginalOpacity();
    document.querySelector("#note-text").style.display = "none"; 
};

function Confirm(){    
    setOriginalOpacity();
    console.log("cont_done",cont_done, "cont_todo", cont_todo, "cont_Doing", cont_doing);
    if(cont_done == 1 ){
            cont_done--;
            addText();
    };
    if(cont_done ==2)  {
            cont_done = 0;
            lforchange[value1-1].innerHTML = document.getElementById("Palavras").value;
    
    };
    if(cont_doing ==1 ){
            cont_doing--;
            addTextinDoing();
    }
    if (cont_doing == 2) {
            cont_doing = 0;
            lforchange_2[value1_2-1].innerHTML = document.getElementById("Palavras").value;
    };
    if(cont_todo ==1){
            cont_todo--;
            addTextinTo_do();
    };
    if(cont_todo ==2){
            cont_todo =0;
            lforchange_3[value1_3-1].innerHTML = document.getElementById("Palavras").value;
    };
    Cancel();

};

function sentupOpacity(){
    document.getElementById("note-text").style.display ="block";
    document.body.style.backgroundColor = "grey";
    to_do.style.opacity = 0.8;
    doing.style.opacity = 0.8;
    done.style.opacity = 0.8;
    header.style.opacity = 0.8;
};

function setOriginalOpacity(){
    document.body.style.backgroundColor = "#121212";
    to_do.style.opacity = 1;
    doing.style.opacity = 1;
    done.style.opacity = 1;
    header.style.opacity = 1;
};