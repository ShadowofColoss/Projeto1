let to_do = document.getElementById("to-do");
let doing = document.getElementById("doing");
let done = document.getElementById("done");
let header = document.getElementById("header");
let no_card  = document.getElementById("no-cardIndone");
let button = document.getElementById("button");
let cards = document.getElementById("cards");
let listTchange = document.getElementById("listTchange"); 
let button1_todo = document.getElementById("button1_to_do");
let cont_done = 0;
let cont_doneAux = 0;
let text = "";
let text_aux = "";
let cont = 0;
let cont_elementC = "";
// let text_for_del = [];
let listaButton_aux = 0;

let cont_todo_aux = 0;
let cont_doing_aux = 0;
let listaButton =[];
let listaButton_ForChange = [];
let contforbuttonx = "";
let contforDivCenter = "";
let listButtontChange = [];   
let listButtontChangeX = [];
let contforbuttontChangeB = "";

let cont_AUX = 0;
let text_p = 0;
let list_r = [];
let list_r_cont = "";
let lforchange = [];

let value1 = 0;
let listOfElement_C = [];
let cont_forChangecarddone =1;

let cont_done__to_do = 1;
let cont_done__doing =1;
let cont_to_do_AUX = 1;
let cont_doing_AUX = 1;
let done_boleano = false;
let removeCardOFdone_aux = 0; 
let listOfChangeCards = [];
let CONT_changecardsTdoing_aux = "";
let CONT_changecardsTtodo_aux = "";
let contTdelCards = 0;
function done_aux(){    
        if(cont_AUX_change_card_AUX ==1){
                if(removeCardOFdone_aux == 0){
                        removeCardOFdone_aux++;
                        cont_AUX_change_card++;
                };
        };
};
async function awaitofItems5(){
        await e();
};
function e(){
        return new Promise((resolver)=>{
                resolver(cont_to_do_AUX++,cont_AUX++,cont_for_Changecards_2 = 0,
                        cont_forChangecarddone = 0);
        });
}; 

function awaitOFDonefFalse(){
        return new Promise((resolve,rejeita)=>{
                resolve(done_boleano = false);
                rejeita();
        });
};
async function await_done_aux(){
        await awaitOFDonefFalse()
    
}; 
function returndisplay(){
        let a = 0;
        let b = 0;
        for(numbers in listOfChangeCards){
                listOfChangeCards[numbers].style.display = "block";
                if(numbers == listOfChangeCards.length-1){
                        a = listOfChangeCards[numbers].id; 
                        listOfChangeCards[numbers].style.display = "none";
                };
                if(numbers == listOfChangeCards.length-2){
                        b = listOfChangeCards[numbers].id;
                        listOfChangeCards[numbers].style.display = "none";
                };
            };
        a = document.getElementById(a);
        b = document.getElementById(b);
        document.getElementById("cards").removeChild(a);
        document.getElementById("cards").removeChild(b);

        listOfChangeCards.splice(-1,1);
        listOfChangeCards.splice(-1,1);
};
function awaitOFDone(){
        return  new Promise((resolve,rejeita)=>{
                resolve(
                        returndisplay(),
                        cont_AUX_change_card_AUX++,
                        done_aux(),
                        done_boleano = true,
                        testeeee =  "galinha",
                        cont_forChangecarddone++,
                        removeCardOFdoing_aux = 0,
                        removeCardOFtodo_aux = 0);
                rejeita(done_boleano = true);
        });
};

async function awaitofItems6(){
        await f();
};
function f(){
        return new Promise((resolver)=>{
                resolver(cont_AUX++,cont_for_Changecards_3 = 0,
                        cont_forChangecarddone = 0);
        });
}; 
function replacetDonecard(valorOfC,p){
        document.getElementById("listTchange").style.display = "none";
        text_p = valorOfC;
        let cont_AUX_change_card_aux = 0;
        if(cont_AUX_change_card>0){
                if(cont_AUX_change_card % 2 == 0){
                        if(todo_boleano === true){
                                todo_boleano = false;
                                cont_AUX_change_card_aux = 1;
                        };
                        if(doing_boleano === true){
                                doing_boleano = false;
                        };
                        if (cont_AUX_change_card_aux ==1){
                                doing_boleano = true;
                        }
                        else{
                                todo_boleano = true;
                        };
                };
        };

        if(todo_boleano === true){

                if(cont_for_Changecards_3 <= 1){
                        cont_AUX_change_card_AUX =0; 
                        awaitofItems5();
                        awaitOftodoFalse();
                        addText();
                };

        };
        if(doing_boleano === true){
                if (cont_for_Changecards_2 <= 1){
                        cont_AUX_change_card_AUX =0; 
                        awaitofItems6();
                        awaitOfDoingFalse();
                        addText();
                }; 
        };
};
function Fordeletecard(id){
        let peg_elem=listaButton[id-1];
        peg_elem.style.display ="none";
        let c = document.getElementById(peg_elem.id);
        document.getElementById("text").removeChild(c);
        listaButton.splice(id-1,1);
        listaButton_ForChange.splice(id-1,1);
        listButtontChange.splice(id-1,1);
        listButtontChangeX.splice(id-1,1);
        lforchange.splice(id-1,1);
        list_r.splice(id-1,1);
        listOfElement_C.splice(id-1,1);
        listaButton_aux--;

        contforDivCenter = contforDivCenter.replace("k","");
        contforbuttontChangeB = contforbuttontChangeB.replace("b","");
        contforbuttonx = contforbuttonx.replace("x","");
        list_r_cont = list_r_cont.replace("r","");
        cont_elementC = cont_elementC.replace("c","");
        CONT_changecardsTdoing_aux = CONT_changecardsTdoing_aux.replace("d","");
        CONT_changecardsTtodo_aux = CONT_changecardsTtodo_aux.replace("t","");
        recreateAllid();
        if(contTdelCards == 1 ){
                let value = id*2;
                let a = value-1;

                let id_a = listOfChangeCards[a-1];
                let id_b = listOfChangeCards[value-1];
                document.getElementById("cards").removeChild(id_a);
                document.getElementById("cards").removeChild(id_b);
                listOfChangeCards.splice(a-1,2);
                contTdelCards = 0;
        };

        if (listaButton_aux == 0){
                no_card.style.display = "block";
        };
};

function recreateAllid(){
        let contr_aux = ""; 
        let contButtontchange_aux = "";
        let cont_auxtdivcenter = ""; 
        let contforbutton_aux ="";
        let cont_elementC ="";

        let cont_ChangeCards1 = "";
        let cont_ChangeCards2 = "";
        let copy_aux_1 = 1;
        for(copying in listOfChangeCards){
                copy_aux_1++;
                if (copy_aux_1 % 2 == 0){
                        cont_ChangeCards1 += "t";
                        listOfChangeCards[copying].id = cont_ChangeCards1;
                }
                else {
                        cont_ChangeCards2 += "d";
                        listOfChangeCards[copying].id = cont_ChangeCards2;
                };
        };
        for (copying in listaButton_ForChange){
                cont_elementC += "c";
                contr_aux += "r";
                contforbutton_aux += "x";
                contButtontchange_aux +="b";
                cont_auxtdivcenter += "k";
                listaButton_ForChange[copying].id = cont_auxtdivcenter;
                listaButton[copying].id = cont_auxtdivcenter;
                listButtontChange[copying].id = contButtontchange_aux;
                listButtontChangeX[copying].id = contforbutton_aux;
                list_r[copying].id = contr_aux;
                listOfElement_C[copying].id = cont_elementC;

                document.querySelector("#text").appendChild(listaButton_ForChange[copying]);
        };
        // doing;
        recreateAllinDoing_id();
        recreateAllinTo_do_id();
};

function  addText(){
        contforbuttontChangeB +="b";        
        contforDivCenter +="k";
        contforbuttonx += "x";
        list_r_cont += "r";
        cont_elementC +="c";
        CONT_changecardsTdoing_aux += "d";
        CONT_changecardsTtodo_aux += "t";
        let value_text = document.querySelector("#Palavras").value;
        let element_P = document.createElement("p");



        let div_text = document.querySelector("#text");
        let div_center = document.createElement("div"); 
        div_center.classList.add("div_center");
        div_center.id = contforDivCenter;


        no_card.style.display ="none"

        document.getElementById("text").style.display = "block";
        if (cont_AUX !=1){
                text_p = document.createTextNode(value_text); 
                element_P = document.createElement("p");
                element_P.appendChild(text_p);
                div_center.appendChild(element_P);
                lforchange.push(element_P);

        
        }
        else {
                div_center.appendChild(text_p);
                lforchange.push(text_p);
        };
        console.log(lforchange);
        cont_AUX= 0;
        let element_b = document.createElement("button");
        element_b.id = contforbuttontChangeB;
        element_b.classList.add("buttonToplayUp");
        let element_Div = document.createElement("div");
        element_Div.classList.add("addinOtherCard");

        element_Div.appendChild(element_b);
        div_center.appendChild(element_Div);


        let element_Divx = document.createElement("div");
        element_Divx.classList.add("div-x");

        let element_X = document.createElement("button");
        element_X.id = contforbuttonx; 

        element_Divx.appendChild(element_X);
        div_center.appendChild(element_Divx);
        element_X.innerHTML = "X";

        let element_R = document.createElement("button");
        element_R.innerHTML = "R";
        element_R.id = list_r_cont;
        
        let div_elementR = document.createElement("div");
        div_elementR.classList.add("div_elementR");

        let element_C = document.createElement("button");
        element_C.classList.add("ButtonTchange");
        element_C.innerHTML ="C";
        element_C.id = cont_elementC;
        div_elementR.appendChild(element_C);
        div_elementR.appendChild(element_R);
        div_center.appendChild(div_elementR);



        let changecardsTtodo_aux = document.createElement("button");
        changecardsTtodo_aux.id = CONT_changecardsTtodo_aux;
        changecardsTtodo_aux.innerHTML = "to do";
        changecardsTtodo_aux.classList.add("button1");
        document.getElementById("cards").appendChild(changecardsTtodo_aux);
        listOfChangeCards.push(document.getElementById(changecardsTtodo_aux.id));
        let changecardsTdoing_aux =  document.createElement("button");
        changecardsTdoing_aux.id = CONT_changecardsTdoing_aux; 
        changecardsTdoing_aux.innerHTML = "doing";
        changecardsTdoing_aux.classList.add("button2");
        document.getElementById("cards").appendChild(changecardsTdoing_aux);
        listOfChangeCards.push(document.getElementById(changecardsTdoing_aux.id));
        console.log("listOfChangeCards",listOfChangeCards);


        div_text.appendChild(div_center);
        listButtontChange.push(document.getElementById(element_b.id));
        listButtontChangeX.push(document.getElementById(element_X.id));
        listaButton.push(document.getElementById(contforDivCenter));
        listaButton_ForChange.push(document.getElementById(contforDivCenter));
        list_r.push(document.getElementById(element_R.id));
        // lforchange.push(element_P);
        listOfElement_C.push(document.getElementById(element_C.id));
        listaButton_aux ++;
        
        element_C.addEventListener("click", (e)=>{
                cont_forChangecarddone = 0;
                let id = e.target.id;
                id = id.length;
                let valorOfC = lforchange[id-1];
                for(idtest in lforchange){
                        console.log(lforchange[idtest]);
                };
                let p = "OOPPAOT";
                document.getElementById("listTchange").style.display = "block";

                //preciso armazenar o id e multiplicar por dois e dps armazenar o penultimo núm e dps o utlimo
                let valor = id*2;
                let num1 = valor-1;
                let num2 = valor;
                let v1 = listOfChangeCards[num1-1];
                let v2 = listOfChangeCards[num2-1];
                listOfChangeCards.splice(num1-1,2);
                allListnone();
                v1.style.display = "block";
                v2.style.display = "block";
        

                listOfChangeCards.push(v1);
                listOfChangeCards.push(v2);
                

                changecardsTtodo_aux.addEventListener("click", async ()=> {
                        await awaitOFDone();
                        
                        replacetTo_docard(valorOfC,p);
                        Fordeletecard(id);

                });
                changecardsTdoing_aux.addEventListener("click",async ()=>{
                        // cont_doing_aux++;
                        //tenho q deixar armazenado a quantidade q fez pq se ele fazer o contrário ele vai voltar a zero
                        await awaitOFDone();
                        replace_doing(valorOfC,p);
                        Fordeletecard(id);


                });
                cont_forChangecarddone = 0;

        });


        element_R.addEventListener("click", (e)=>{
                cont_done =2;
                let id = e.target.id;
                id = id.length;
                sentupOpacity();
                console.log("ID DO R", id-1);
                value1 = id;
                let value_aux = lforchange[id-1];
                console.log(value_aux);
                document.querySelector("#Palavras").value = value_aux.innerHTML;

                
        });
        element_X.addEventListener("click", (e)=>{
                let id = e.target.id;
                id = id.length;
                console.log("O ID DO X", id-1);
                console.log("OLHA AQUI antes de  ELE SER RETIRADO", listaButton_ForChange);
                contTdelCards = 1;
                Fordeletecard(id);
        });


        element_b.addEventListener("click", (e)=>{

                let id = e.target.id;
                id = id.length;
                let elemDesejado = listaButton_ForChange[id-1];
                listaButton_ForChange.splice(id-1,1);
                listaButton_ForChange.unshift(elemDesejado);
                let elemDesejadotChange = listButtontChange[id-1];
                listButtontChange.splice(id-1,1);
                listButtontChange.unshift(elemDesejadotChange);

                let elemDesejadotChangeX = listButtontChangeX[id-1];
                listButtontChangeX.splice(id-1,1);
                listButtontChangeX.unshift(elemDesejadotChangeX);

                let elemDesejadotlistabutton = listaButton[id-1];
                listaButton.splice(id-1,1);
                listaButton.unshift(elemDesejadotlistabutton);
                let whishElement_r = list_r[id-1];
                list_r.splice(id-1,1);
                list_r.unshift(whishElement_r); 
                
                let wishiElement_r = lforchange[id-1];
                lforchange.splice(id-1,1);
                lforchange.unshift(wishiElement_r);


                let wishiElement_c = listOfElement_C[id-1];
                listOfElement_C.splice(id-1,1);
                listOfElement_C.unshift(wishiElement_c);

                let value = id*2;
                let a = value-1;
                let b = value;
                let wishElement_cards = listOfChangeCards[a-1];
                let wishElement_cards2 = listOfChangeCards[b-1]
                listOfChangeCards.splice(a-1,2); 
                listOfChangeCards.unshift(wishElement_cards2);
                listOfChangeCards.unshift(wishElement_cards);
                recreateAllid();


        });
};


function addInDone(){
        cont_done++;
        sentupOpacity();
};
