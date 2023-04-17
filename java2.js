let no_card_2  = document.getElementById("no-cardIndoing");
let cont_doing = 0;
let cont_doingAux = 0;

// let text_for_del = [];
let listaButton_aux_2 = 0;

let listaButton_2 =[];
let listaButton_ForChange_2 = [];
let contforbuttonx_2 = "";
let contforDivCenter_2 = "";
let listButtontChange_2 = [];   
let listButtontChangeX_2 = [];
let contforbuttontChangeB_2 = "";
let cont_for_Changecards_2 = 0;
let listOfElement_C_2 = [];
let list_r_2 = [];

let list_r_cont_2 = "";
let lforchange_2 = [];
let value1_2 = 0;
let cont_elementC_2 = "";
let text_2 = 0;
let cont_AUX_2 = 0;
// let cont_doing__done = 1;
let cont_done_aux_t_doing = 1;
let cont_done_AUX = 1;
let cont_todo_aux_t_doing = 1;

let doing_boleano = false;
let testeeee = "pato";
let removeCardOFdoing_aux = 0; 
let cont_test = 0;

let CONT_changecardsTdone_aux2 = "";
let CONT_changecardsTtodo_aux2 = "";
let listOfChangeCards2 = [];
let contTdelCards_2 = 0;
function doing_aux(){            
    if(cont_AUX_change_card_AUX ==1){
        if(removeCardOFdoing_aux == 0){
            removeCardOFdoing_aux++;
            cont_AUX_change_card++;

        };
    }
};

function c(){
    return new Promise((resolve)=>{
        // resolve(cont_done_aux_t_doing++,cont_AUX_2++);
        resolve(cont_AUX_2++,
        cont_for_Changecards_2 = 0,
        cont_AUX_change_card_AUX =0);
    });
};

async function awaitOfItems3(){
    await c();
};

function d(){
    return new Promise((resolve)=>{
        resolve(cont_AUX_2++,
        cont_AUX_2,cont_for_Changecards_2 = 0,
        cont_forChangecarddone = 0);
    });
    
};
async function awaitOFitems4(){
    await d();
};
function awaitOfDoingFalse(){
    return new Promise((resolve,rejeita)=>{
        resolve(doing_boleano = false);
        rejeita();
    });
}
async function await_doing_aux(){
    await awaitOfDoingFalse();
};
function returndisplay_2(){
    let a = 0;
    let b = 0;
    for(numbers in listOfChangeCards2){
        listOfChangeCards2[numbers].style.display = "block";
        if(numbers == listOfChangeCards2.length-1){
            a = listOfChangeCards2[numbers].id ;
            listOfChangeCards2[numbers].style.display = "none";
        };
        if(numbers == listOfChangeCards2.length-2){
            b = listOfChangeCards2[numbers].id ;
            listOfChangeCards2[numbers].style.display = "none";
        };
    };
    a = document.getElementById(a);
    b = document.getElementById(b);
    document.getElementById("cards").removeChild(a);
    document.getElementById("cards").removeChild(b);
    listOfChangeCards2.splice(-1,1);
    listOfChangeCards2.splice(-1,1);
};
function awaitOfdoing(){
    return new  Promise ((resolve,rejeita)=>{
        resolve(
            returndisplay_2(),
            cont_AUX_change_card_AUX++,
            doing_aux(),
            doing_boleano = true,
            cont_for_Changecards_2++,
            removeCardOFtodo_aux = 0,
            removeCardOFdone_aux = 0);
        rejeita(console.log("ele rejeito"));
    });

};
function replace_doing(valorOfC,p){
    document.getElementById("listTchange").style.display = "none";
    text_2 = valorOfC;
    console.log("valorOfC",valorOfC,"text_2",text_2);
    let cont_AUX_change_card_aux = 0;
    if(cont_AUX_change_card >0){
        if(cont_AUX_change_card % 2 == 0){
            if(done_boleano === true){
                done_boleano = false;
                cont_AUX_change_card_aux = 1;
            };
            if(todo_boleano === true){
                todo_boleano = false;
            };
            if(cont_AUX_change_card_aux ==1){
                todo_boleano = true;
            }
            else{
                done_boleano = true;
            };
        };
    };

    if (done_boleano === true){
        if(cont_forChangecarddone <= 1){

            awaitOfItems3(); 
            await_done_aux();
            addTextinDoing();
        }; 
    };
    if(todo_boleano === true){
        if(cont_for_Changecards_3 <= 1){
            cont_AUX_change_card_AUX =0;
            awaitOFitems4();
            await_todo_aux()
            addTextinDoing();

        };
    }; 
};
function functiondel_2(id){
    let peg_elem=listaButton_2[id-1];
    peg_elem.style.display ="none";
    let c = document.getElementById(peg_elem.id);
    document.getElementById("text_2").removeChild(c);
    listaButton_2.splice(id-1,1);
    listaButton_ForChange_2.splice(id-1,1);
    listButtontChange_2.splice(id-1,1);
    listButtontChangeX_2.splice(id-1,1);
    lforchange_2.splice(id-1,1);
    list_r_2.splice(id-1,1);
    listOfElement_C_2.splice(id-1,1);
    console.log("id",id);
    listaButton_aux_2--;

    contforDivCenter_2 = contforDivCenter_2.replace("k2","");
    contforbuttontChangeB_2 = contforbuttontChangeB_2.replace("b2","");
    contforbuttonx_2 = contforbuttonx_2.replace("x2","");
    list_r_cont_2 = list_r_cont_2.replace("r2","");
    cont_elementC_2 = cont_elementC_2.replace("c2","");
    CONT_changecardsTdone_aux2 = CONT_changecardsTdone_aux2.replace("d2","");
    CONT_changecardsTtodo_aux2 = CONT_changecardsTtodo_aux2.replace("t2","");
    if(contTdelCards_2 == 1 ){
        let value = id*2;
        let a = value-1;
        let id_a = listOfChangeCards2[a-1];
        let id_b = listOfChangeCards2[value-1];
        listOfChangeCards2.splice(a-1,2);
        document.getElementById("cards").removeChild(id_a);
        document.getElementById("cards").removeChild(id_b);
        contTdelCards_2 = 0;
    };

    recreateAllid();

    if (listaButton_aux_2 == 0){
            no_card_2.style.display = "block";
    };
};

function recreateAllinDoing_id(){
    let contr_aux_2 = ""; 
    let contButtontchange_aux_2 = "";
    let cont_auxtdivcenter_2 = ""; 
    let contforbutton_aux_2 ="";
    let cont_c = "";
    for (copying in listaButton_ForChange_2){
        contr_aux_2 += "r2";
        contforbutton_aux_2 += "x2";
        contButtontchange_aux_2 +="b2";
        cont_auxtdivcenter_2 += "k2";
        cont_c += "c2";
        listaButton_ForChange_2[copying].id = cont_auxtdivcenter_2;
        listaButton_2[copying].id = cont_auxtdivcenter_2;
        listButtontChange_2[copying].id = contButtontchange_aux_2;
        listButtontChangeX_2[copying].id = contforbutton_aux_2;
        list_r_2[copying].id = contr_aux_2;
        listOfElement_C_2[copying].id = cont_c;

        document.querySelector("#text_2").appendChild(listaButton_ForChange_2[copying]);
    };
};
function addTextinDoing(){
    contforbuttontChangeB_2 +="b2";        
    contforDivCenter_2 +="k2";
    contforbuttonx_2 += "x2";
    list_r_cont_2 += "r2";
    cont_elementC_2 += "c2";
    CONT_changecardsTdone_aux2 += "d2";
    CONT_changecardsTtodo_aux2 += "t2";
    let value_text = document.querySelector("#Palavras").value;

    let div_text = document.querySelector("#text_2");
    let div_center = document.createElement("div"); 
    div_center.classList.add("div_center");
    div_center.id = contforDivCenter_2;


    no_card_2.style.display ="none"

    document.getElementById("text_2").style.display = "block";
    let element_P = document.createElement("p");

    if(cont_AUX_2 !=1){
        text_2 = document.createTextNode(value_text); 
        element_P.appendChild(text_2);
        div_center.appendChild(element_P);
        lforchange_2.push(element_P);


    }
    else {
        div_center.appendChild(text_2);
        lforchange_2.push(text_2);
    };
    cont_AUX_2= 0;

    let element_b = document.createElement("button");
    element_b.id = contforbuttontChangeB_2;
    element_b.classList.add("buttonToplayUp");
    let element_Div = document.createElement("div");
    element_Div.classList.add("addinOtherCard");

    element_Div.appendChild(element_b);
    div_center.appendChild(element_Div);


    let element_Divx = document.createElement("div");
    element_Divx.classList.add("div-x");

    let element_X = document.createElement("button");
    element_X.id = contforbuttonx_2; 

    element_Divx.appendChild(element_X);
    div_center.appendChild(element_Divx);
    element_X.innerHTML = "x";

    let element_R = document.createElement("button");
    element_R.innerHTML = "R";
    element_R.id = list_r_cont_2;
    
    let element_C = document.createElement("button");
    element_C.classList.add("ButtonTchange");
    element_C.innerHTML ="C";
    element_C.id = cont_elementC_2;

    let changecardsTtodo_aux2 = document.createElement("button");
    changecardsTtodo_aux2.id = CONT_changecardsTtodo_aux2;
    changecardsTtodo_aux2.innerHTML = "to do";
    changecardsTtodo_aux2.classList.add("button1");
    document.getElementById("cards").appendChild(changecardsTtodo_aux2);
    listOfChangeCards2.push(document.getElementById(changecardsTtodo_aux2.id));
    let changecardsTdone_aux2 =  document.createElement("button");
    changecardsTdone_aux2.id = CONT_changecardsTdone_aux2; 
    changecardsTdone_aux2.innerHTML = "done";
    changecardsTdone_aux2.classList.add("button3");
    document.getElementById("cards").appendChild(changecardsTdone_aux2);
    listOfChangeCards2.push(document.getElementById(changecardsTdone_aux2.id));

    let div_elementR = document.createElement("div");
    div_elementR.classList.add("div_elementR");
    div_elementR.appendChild(element_C);
    div_elementR.appendChild(element_R);
    div_center.appendChild(div_elementR);


    div_text.appendChild(div_center);
    listButtontChange_2.push(document.getElementById(element_b.id));
    listButtontChangeX_2.push(document.getElementById(element_X.id));
    listaButton_2.push(document.getElementById(contforDivCenter_2));
    listaButton_ForChange_2.push(document.getElementById(contforDivCenter_2));
    list_r_2.push(document.getElementById(element_R.id));
    listOfElement_C_2.push(document.getElementById(element_C.id));
    listaButton_aux_2 ++;
    
    element_C.addEventListener("click", (a)=>{
        //ele já estava deletando,então vamos ver qual é tamanho da lista para ver se está recebendo algo
        let id = a.target.id;
        id = id.length/2;   
        let valorOfC =  lforchange_2[id-1];
        let p = "OOPPAOT"; 
        let b = id-1; 
        cont_test++; 
        document.getElementById("listTchange").style.display = "block";
        cont_for_Changecards_2 = 0;
        let valor = id*2;
        let num1 = valor-1;
        let num2 = valor;
        let v1 = listOfChangeCards2[num1-1];
        let v2 = listOfChangeCards2[num2-1];
        listOfChangeCards2.splice(num1-1,2);
        allListnone();
        v1.style.display = "block";
        v2.style.display = "block";
        
        listOfChangeCards2.push(v1) ;
        listOfChangeCards2.push(v2) ;

        changecardsTtodo_aux2.addEventListener("click",async ()=> {
            //ver se isso acontece com todos se as vezes q troca com um tamb
            await awaitOfdoing();
            replacetTo_docard(valorOfC,p,b);
            functiondel_2(id);
        });
        
        changecardsTdone_aux2.addEventListener("click",async ()=> {    
            //ver se isso acontece com todos se as vezes q troca com um tamb
            await awaitOfdoing();

            replacetDonecard(valorOfC,p);
            functiondel_2(id);

        });

        cont_for_Changecards_2 =0;

    });
    element_R.addEventListener("click", (a)=>{
        cont_doing = 2;
        let id = a.target.id;
        id = id.length/2;
        sentupOpacity();
        value1_2 = id;
        let value_aux = lforchange_2[id-1];
        document.querySelector("#Palavras").value = value_aux.innerHTML;
    });
    element_X.addEventListener("click", (e)=>{
        let id = e.target.id;
        id = id.length/2;
        contTdelCards_2 = 1;
        functiondel_2(id);
    });


    element_b.addEventListener("click", (e)=>{
        
        let id = e.target.id;
        id = id.length/2;

        let elemDesejado = listaButton_ForChange_2[id-1];
        listaButton_ForChange_2.splice(id-1,1);
        listaButton_ForChange_2.unshift(elemDesejado);

        let elemDesejadotChange = listButtontChange_2[id-1];
        listButtontChange_2.splice(id-1,1);
        listButtontChange_2.unshift(elemDesejadotChange);

        let elemDesejadotChangeX = listButtontChangeX_2[id-1];
        listButtontChangeX_2.splice(id-1,1);
        listButtontChangeX_2.unshift(elemDesejadotChangeX);

        let elemDesejadotlistabutton = listaButton_2[id-1];
        listaButton_2.splice(id-1,1);
        listaButton_2.unshift(elemDesejadotlistabutton);

        let whishElement_r = list_r_2[id-1];
        list_r_2.splice(id-1,1);
        list_r_2.unshift(whishElement_r); 
        
        let wishiElement_r = lforchange_2[id-1];
        lforchange_2.splice(id-1,1);
        lforchange_2.unshift(wishiElement_r);

        let wishiElement_c = listOfElement_C_2[id-1];
        listOfElement_C_2.splice(id-1,1);
        listOfElement_C_2.unshift(wishiElement_c);

        let value = id*2;
        let a = value-1;
        let b = value;
        let wishElement_cards = listOfChangeCards2[a-1];
        let wishElement_cards2 = listOfChangeCards2[b-1];
        listOfChangeCards2.splice(a-1,2); 
        listOfChangeCards2.unshift(wishElement_cards2);
        listOfChangeCards2.unshift(wishElement_cards);

        recreateAllid();
    });
};

function addinDoing(){
        cont_doing++;
        sentupOpacity();
};
