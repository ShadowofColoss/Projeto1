let cont_for_Changecards_3 = 0; 
let cont_todo = 0;
let cont_AUX_3 = 0;
let listaButton_3 =[];
let listaButton_ForChange_3 = [];
let contforbuttonx_3 = "";
let contforDivCenter_3 = "";
let listButtontChange_3 = [];   
let listButtontChangeX_3 = [];
let contforbuttontChangeB_3 = "";
let listaButton_aux_3 = 0;
let cont_elementC_3 ="";
let list_r_3 = []; 
let list_r_cont_3 = "";
let lforchange_3 = [];
let value1_3 = 0;
let text_p_3 = 0;
let listOfElement_C_3 = [];
let todo_boleano = false;
let cont_AUX_change_card = 0;
let cont_AUX_change_card_AUX = 0;
let removeCardOFtodo_aux = 0;
let listOfChangeCards3 = [];
let contTdelCards_3 = 0;
function todo_aux(){            
    if(cont_AUX_change_card_AUX ==1){
        if(removeCardOFtodo_aux == 0){
            removeCardOFtodo_aux++;
            cont_AUX_change_card++;
        };
    }
};
function a(){
    return new Promise((resolve)=>{
        resolve(cont_AUX_3++,cont_for_Changecards_2 = 0,
            cont_for_Changecards_3 = 0);

    });
};

async function awaitofItems(){
    await a();

};

function awaitOftodoFalse(){
    return new Promise((resolve,rejeita)=>{
        resolve(todo_boleano = false);
        rejeita(console.log("ele rejeitou ;-;"))});
};

function b(){
    return new Promise((resolve)=>{
        // resolve(cont_doing_aux_t_todo++,cont_AUX_3++);
        resolve(cont_AUX_3++,cont_for_Changecards_3 = 0,
            cont_forChangecarddone = 0);
    });
};
async function awaitOfItems2(){
    await b();
};

async function await_todo_aux(){
    await awaitOftodoFalse();
};
function allListnone(){
    for(numbers in listOfChangeCards){
        listOfChangeCards[numbers].style.display = "none";
    };
    for(numbers in listOfChangeCards2){
        listOfChangeCards2[numbers].style.display = "none";
    };
    for(numbers in listOfChangeCards3){
        listOfChangeCards3[numbers].style.display = "none";
    };
};
function returndisplay_3(){
    let a = 0;
    let b = 0;
    for(numbers in listOfChangeCards3){
        listOfChangeCards3[numbers].style.display = "block";
        if(numbers == listOfChangeCards3.length-1){
            a = listOfChangeCards3[numbers].id;
            listOfChangeCards3[numbers].style.display = "none";
        };
        if(numbers == listOfChangeCards3.length-2){
            b = listOfChangeCards3[numbers].id;
            listOfChangeCards3[numbers].style.display = "none";
        };
    };
    a = document.getElementById(a);
    b = document.getElementById(b);
    document.getElementById("cards").removeChild(a);
    document.getElementById("cards").removeChild(b);
    listOfChangeCards3.splice(-1,1);
    listOfChangeCards3.splice(-1,1);
};

function awaitOfTodo(){
    return new  Promise((resolve,rejeita)=>{
        resolve(
            returndisplay_3(),
            cont_AUX_change_card_AUX++,
            todo_aux(),
            todo_boleano = true,
            cont_for_Changecards_3++,
            removeCardOFdoing_aux = 0,
            removeCardOFdone_aux = 0);
        rejeita(console.log("PATOAO"));
    });
};
function Fordeletecard_3(id){
    let peg_elem=listaButton_3[id-1];
    let c = document.getElementById(peg_elem.id);
    peg_elem.style.display ="none";
    document.getElementById("text_3").removeChild(c);
    listaButton_3.splice(id-1,1);
    listaButton_ForChange_3.splice(id-1,1);
    listButtontChange_3.splice(id-1,1);
    listButtontChangeX_3.splice(id-1,1);
    lforchange_3.splice(id-1,1);
    list_r_3.splice(id-1,1);
    listOfElement_C_3.splice(id-1,1);
    listaButton_aux_3--;

    contforDivCenter_3 = contforDivCenter_3.replace("k3","");
    cont_elementC_3  = cont_elementC_3.replace("c3","");
    contforbuttontChangeB_3 = contforbuttontChangeB_3.replace("b3","");
    contforbuttonx_3 = contforbuttonx_3.replace("x3","");
    list_r_cont_3 = list_r_cont_3.replace("r3","");
    CONT_changecardsTdoing_aux3 = CONT_changecardsTdoing_aux3.replace("td3","");
    CONT_changecardsTdone_aux3 = CONT_changecardsTdone_aux3.replace("d3","");
    //agora tem que ajeitar a opção de enviar pro topo da lista o card;   
    if(contTdelCards_3 == 1 ){
        let value = id*2;
        let a = value-1;
        // let b = value;
        let id_a = listOfChangeCards3[a-1];
        let id_b = listOfChangeCards3[value-1];
        document.getElementById("cards").removeChild(id_a);
        document.getElementById("cards").removeChild(id_b);
        listOfChangeCards3.splice(a-1,2);
        contTdelCards_3 = 0;
    };
    recreateAllid();

    if (listaButton_aux_3 == 0){
        //ajeitar isso;
        document.getElementById("no-cardInto-do").style.display = "block";
    };
};
function replacetTo_docard(valorOfC,p,a){
 
    document.getElementById("listTchange").style.display = "none";
    text_p_3 = valorOfC;
    let cont_AUX_change_card_aux = 0;
        if(cont_AUX_change_card>0){
            if(cont_AUX_change_card % 2 == 0){
                if(done_boleano === true){
                    done_boleano = false;
                    cont_AUX_change_card_aux = 1;
                };
                if(doing_boleano === true){
                    doing_boleano = false;
                };
                if (cont_AUX_change_card_aux ==1){
                    doing_boleano = true;
                }
                else{
                    done_boleano = true;
                };
            };
        };
    if(done_boleano === true){
        if(cont_forChangecarddone <=  1){
            cont_AUX_change_card_AUX =0; 

            awaitofItems();
            await_done_aux();
            addTextinTo_do();
        }; 
    };
    //ISTO ESTÁ FAZENDO COM QUE SE N FOR O PRIMEIRO VAI SER O 
    
    if(doing_boleano === true){    
         if(cont_for_Changecards_2 <= 1){
            cont_AUX_change_card_AUX = 0;     
            awaitOfItems2();
            await_doing_aux();
            addTextinTo_do();
        }; 
    };

};
function recreateAllinTo_do_id(){
    let contr_aux_3 = ""; 
    let contButtontchange_aux_3 = "";
    let cont_auxtdivcenter_3 = ""; 
    let contforbutton_aux_3 ="";
    let cont_elementc_3 = "";
    let cont_ChangeCards1 = "";
    let cont_ChangeCards2 = "";
    let copy_aux_1 = 1;
    console.log("LAÇO DE FOR BEM AÍ HAAHAHAHA");
    for(copying in cont_ChangeCards1){
        copy_aux_1++;
        console.log("copy_aux_1",copy_aux_1);
        if (copy_aux_1 % 2 == 0){
            cont_ChangeCards1 += "td3";
            
            listOfChangeCards3[copying].id = cont_ChangeCards1;
        }
        else {
            cont_ChangeCards2 += "d3";
            listOfChangeCards3[copying].id = cont_ChangeCards2;
        };
    };
    for (copying in listaButton_ForChange_3){
        contr_aux_3 += "r3";
        contforbutton_aux_3 += "x3";
        contButtontchange_aux_3 +="b3";
        cont_auxtdivcenter_3 += "k3";
        cont_elementc_3 +="c3";
        listaButton_ForChange_3[copying].id = cont_auxtdivcenter_3;
        listaButton_3[copying].id = cont_auxtdivcenter_3;
        listButtontChange_3[copying].id = contButtontchange_aux_3;
        listButtontChangeX_3[copying].id = contforbutton_aux_3;
        list_r_3[copying].id = contr_aux_3;
        listOfElement_C_3[copying].id = cont_elementc_3;
        
        document.querySelector("#text_3").appendChild(listaButton_ForChange_3[copying]);
    };
};

let CONT_changecardsTdoing_aux3 = "";
let CONT_changecardsTdone_aux3 = "";
function addTextinTo_do() {
    let element_b_3 = document.createElement("button");
    let element_Div_3 = document.createElement("div");
    let element_Divx_3 = document.createElement("div");
    let element_X_3 = document.createElement("button");
    let element_R_3 = document.createElement("button");
    let div_elementR_3 = document.createElement("div");
    let element_P_3 = document.createElement("p");
    let value_text = document.querySelector("#Palavras").value;
    cont_elementC_3 +="c3";
    contforbuttontChangeB_3 +="b3";        
    contforDivCenter_3 +="k3";
    contforbuttonx_3 += "x3";
    list_r_cont_3 += "r3";
    CONT_changecardsTdoing_aux3 += "td3";
    CONT_changecardsTdone_aux3 += "d3";

    console.log("Adicionando")

    let div_text = document.querySelector("#text_3");
    let div_center = document.createElement("div"); 
    div_center.classList.add("div_center");
    div_center.id = contforDivCenter_3;


    document.getElementById("no-cardInto-do").style.display ="none"
    console.log("valuetext",value_text);
    document.getElementById("text_3").style.display = "block";
    if (cont_AUX_3 !=1){
        console.log("AQUI ENTROU NO CONT_AUX != 1");
        text_p_3 = document.createTextNode(value_text); 
        element_P_3.appendChild(text_p_3);
        div_center.appendChild(element_P_3);
        lforchange_3.push(element_P_3);

    }   
    else {
        console.log("texxtp",text_p_3);
        // element_P.appendChild(text_p);
        div_center.appendChild(text_p_3);
        lforchange_3.push(text_p_3);
    };
    cont_AUX_3 = 0;


    // let element_b = document.createElement("button");
    element_b_3.id = contforbuttontChangeB_3;
    element_b_3.classList.add("buttonToplayUp");
    // let element_Div = document.createElement("div");
    element_Div_3.classList.add("addinOtherCard");

    element_Div_3.appendChild(element_b_3);
    div_center.appendChild(element_Div_3);


    element_Divx_3.classList.add("div-x");

    element_X_3.id = contforbuttonx_3; 

    element_Divx_3.appendChild(element_X_3);
    div_center.appendChild(element_Divx_3);
    element_X_3.innerHTML = "x";

    
    let element_C = document.createElement("button");
    element_C.classList.add("ButtonTchange");
    element_C.innerHTML ="C";
    element_C.id = cont_elementC_3;
    element_R_3.innerHTML = "R";
    element_R_3.id = list_r_cont_3;
    
    div_elementR_3.classList.add("div_elementR");
    div_elementR_3.appendChild(element_C);
    div_elementR_3.appendChild(element_R_3);
    div_center.appendChild(div_elementR_3);

    
    let changecardsTdoing_aux3 = document.createElement("button");
    changecardsTdoing_aux3.id = CONT_changecardsTdoing_aux3;
    changecardsTdoing_aux3.innerHTML = "doing";
    changecardsTdoing_aux3.classList.add("button2");
    document.getElementById("cards").appendChild(changecardsTdoing_aux3);
    listOfChangeCards3.push(document.getElementById(changecardsTdoing_aux3.id));
    let changecardsTdone_aux3 =  document.createElement("button");
    changecardsTdone_aux3.id = CONT_changecardsTdone_aux3; 
    changecardsTdone_aux3.innerHTML = "done";
    changecardsTdone_aux3.classList.add("button3");
    document.getElementById("cards").appendChild(changecardsTdone_aux3);
    listOfChangeCards3.push(document.getElementById(changecardsTdone_aux3.id));
    console.log("listOfChangeCards3",listOfChangeCards3);


    div_text.appendChild(div_center);
    listButtontChange_3.push(document.getElementById(element_b_3.id));
    listButtontChangeX_3.push(document.getElementById(element_X_3.id));
    listaButton_3.push(document.getElementById(contforDivCenter_3));
    listaButton_ForChange_3.push(document.getElementById(contforDivCenter_3));
    list_r_3.push(document.getElementById(element_R_3.id));
    listOfElement_C_3.push(document.getElementById(element_C.id));
    listaButton_aux_3++;
    element_C.addEventListener("click", (e)=>{
        let id = e.target.id;
        id = id.length/2;
        let valorOfC = lforchange_3[id-1];
        console.log("AQUI Ò VALOROFC", valorOfC);
        let p = "OOPPAOT";
        document.getElementById("listTchange").style.display = "block";
        cont_for_Changecards_3 = 0;
        let valor = id*2;
        let num1 = valor-1;
        let num2 = valor;
        console.log("valor",valor);
        console.log("num1",num1-1,"num2",num2-1);
        console.log("listofchangecards3.lenght-1",listOfChangeCards3.length-1);
        let v1 = listOfChangeCards3[num1-1];
        let v2 = listOfChangeCards3[num2-1];
        listOfChangeCards3.splice(num1-1,2);
        allListnone();
        console.log("V1 V2",v1,v2);
        v1.style.display = "block";
        v2.style.display = "block";

        console.log("OLHA V1",v1);
        console.log("olha o v2 ",v2);
        console.log("listOfChangeCards3",listOfChangeCards3);

        listOfChangeCards3.push(v1);
        listOfChangeCards3.push(v2);

        changecardsTdone_aux3.addEventListener("click",async ()=> {
            //ver se isso acontece com todos se as vezes q troca com um tamb
            await awaitOfTodo();
            replacetDonecard(valorOfC,p);
            Fordeletecard_3(id);
        });
        changecardsTdoing_aux3.addEventListener("click",async ()=> {
            //ver se isso acontece com todos se as vezes q troca com um tamb
            await awaitOfTodo();
            replace_doing(valorOfC,p);
            Fordeletecard_3(id);
        });

    });

    element_R_3.addEventListener("click", (a)=>{
        cont_todo = 2;
        let id = a.target.id;
        id = id.length/2;
        sentupOpacity();
        console.log("ID DO R", id-1);
        value1_3 = id;

        let value_aux = lforchange_3[id-1];
    
        document.querySelector("#Palavras").value = value_aux.innerHTML;
    });

    element_X_3.addEventListener("click", (e)=>{
        let id = e.target.id;
        console.log("ID X",id);
        id = id.length/2;
        console.log("O ID DO X", id-1);
        contTdelCards_3 = 1;
        Fordeletecard_3(id);
        
    });


    element_b_3.addEventListener("click", (e)=>{
        console.log("ENTRROUUU");
        console.log("OLHA AQUI antes de  ELE SER RETIRADO", listaButton_ForChange_3);


        //revisar laços
        // tem que deletar todos os div_center dps adicionar na nova ordem que foi desejada. Colocando também as id no devido lugar
        
        let id = e.target.id;
        console.log("id,here",id);
        id = id.length/2;
        console.log("id,here",id-1);

        let elemDesejado = listaButton_ForChange_3[id-1];
        listaButton_ForChange_3.splice(id-1,1);
        listaButton_ForChange_3.unshift(elemDesejado);

        let elemDesejadotChange = listButtontChange_3[id-1];
        listButtontChange_3.splice(id-1,1);
        listButtontChange_3.unshift(elemDesejadotChange);

        let elemDesejadotChangeX = listButtontChangeX_3[id-1];
        listButtontChangeX_3.splice(id-1,1);
        listButtontChangeX_3.unshift(elemDesejadotChangeX);

        let elemDesejadotlistabutton = listaButton_3[id-1];
        listaButton_3.splice(id-1,1);
        listaButton_3.unshift(elemDesejadotlistabutton);

        let whishElement_r = list_r_3[id-1];
        list_r_3.splice(id-1,1);
        list_r_3.unshift(whishElement_r); 
        
        let wishiElement_r = lforchange_3[id-1];
        lforchange_3.splice(id-1,1);
        lforchange_3.unshift(wishiElement_r);

        let wishElement_C = listOfElement_C_3[id-1];
        listOfElement_C_3.splice(id-1,1);
        listOfElement_C_3.unshift(wishElement_C);
        
        let value = id*2;
        let a = value-1;
        let b = value;
        let wishElement_cards = listOfChangeCards3[a-1];
        let wishElement_cards2 = listOfChangeCards3[b-1]
        listOfChangeCards3.splice(a-1,2); 
        listOfChangeCards3.unshift(wishElement_cards2);
        listOfChangeCards3.unshift(wishElement_cards);
        recreateAllid();
    });
};
function addinto_do(){
    cont_todo++;
    sentupOpacity();
}