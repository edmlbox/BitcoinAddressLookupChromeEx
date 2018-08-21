



document.body.addEventListener('click', function (x) {




    if (x.altKey) {
        x.preventDefault()
        var reg = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

        var t1 = x.target.innerHTML;
        var t2 = window.getSelection().toString();



        var testAddress = t1.match(reg) ? t1.match(reg) : false || t2.match(reg) ? t2.match(reg) : false;


        console.log(testAddress)


        if (testAddress) {
            var responseData = 'ttt';
            var sendThis = testAddress.toString();
            console.log(testAddress)
            function sendMSG(a,fn){
                chrome.runtime.sendMessage({ greeting: a }, async function (response) {
                    responseData = await JSON.parse(response.helloWorld);
                         
                         fn(responseData,x);
                             
                     });
            }
     
            sendMSG(sendThis,function(location,x){
                var responded = location;
                console.log(responded)
            
                var t2 = document.createElement('div');
                t2.setAttribute('class','divmaincont')
                var dragEl = document.createElement('span');
                dragEl.setAttribute('class', 'dragelClass');
                dragEl.style.cursor = 'grab';
                t2.appendChild(dragEl);
                dragEl.style.flex = "1 0 77%";
             
                var t3 = x.pageX;
                t2.style.zIndex = 100;
                var t4 = x.pageY;
    
                t2.style.position = 'absolute';
                t2.style.display = 'flex';
                t2.style.top = t4 + 'px';
                t2.style.left = t3 + 'px';
             
              
                t2.style.flexWrap = 'wrap';
    
    
                t2.style.opacity = 1;
                t2.style.boxShadow = '0 0 5px gray';
                t2.style.alignItems = 'flex-start';
    
                var t5 = document.createElement('span');
                t5.setAttribute('class', 'closePopup');
                t5.style.display = 'flex';
               
                t5.style.cursor = 'pointer';
           
             
             
    
                t5.innerHTML = 'X';
                t2.appendChild(t5);
                var sp1 = document.createElement('span')
                sp1.id = 'addressID';
                sp1.innerHTML = '<span class="curent_bal"></span>'+'<span class="classData">'+responded.address+'</span>';
                sp1.style.flex = '1 0 100%';
                var sp2 = document.createElement('span')
                sp2.id = 'finalBal';
                sp2.style.flex = '1 0 100%';
                sp2.innerHTML = '<span class="curent_bal">Current balance:</span>'+'<span class="classData">'+responded.final_balance/100000000+'</span>';
                var sp3 = document.createElement('span')
                sp3.id = 'N_tx';
                sp3.style.flex = '1 0 100%';
                sp3.innerHTML = '<span class="curent_bal">Total received:</span>'+'<span class="classData">'+responded.total_received/100000000+'</span>';
                var sp4 = document.createElement('span')
                sp4.id = 'totalReceived';
                sp4.style.flex = '1 0 100%';
                sp4.innerHTML = '<span class="curent_bal">Total sent:</span>'+'<span class="classData">'+responded.total_sent/100000000+'</span>';
                var sp5 = document.createElement('span')
                sp5.id = 'totalSent';
                sp5.style.flex = '1 0 100%';
                sp5.innerHTML = '<span class="curent_bal">Number of tx:</span>'+'<span class="classData">'+responded.n_tx+'</span>';
    
                t2.appendChild(sp1); t2.appendChild(sp2); t2.appendChild(sp3); t2.appendChild(sp4); t2.appendChild(sp5)
    
                //Make the DIV element draggagle:
    
    
    
    
    
    
    
                document.body.appendChild(t2);
    
                var dragelClass = document.getElementsByClassName('dragelClass');
    
                for (var ii = 0; ii < dragelClass.length; ii++) {
                    try {
                        dragelClass[ii].addEventListener('mousedown', function (f) {
    
    
    
    
    
                            dragElement(event.target.parentNode);
    
                            function dragElement(elmnt) {
    
                                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    
    
                                elmnt.onmousedown = dragMouseDown;
    
    
    
                                function dragMouseDown(e) {
    
                                    e = e || window.event;
                                    e.preventDefault();
                                    // get the mouse cursor position at startup:
                                    pos3 = e.clientX;
    
                                    pos4 = e.clientY;
    
                                    document.onmouseup = closeDragElement;
    
                                    document.onmousemove = elementDrag;
                                }
    
                                function elementDrag(e) {
                                    e = e || window.event;
                                    e.preventDefault();
    
                                    pos1 = pos3 - e.clientX;
    
                                    pos2 = pos4 - e.clientY;
    
                                    pos3 = e.clientX;
    
                                    pos4 = e.clientY;
    
    
                                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                                }
    
                                function closeDragElement() {
    
                                    document.onmouseup = null;
                                    document.onmousemove = null;
                                }
                            }
                        })
                    } catch (err) { console.log(err) }
    
                }
                var closePopupClass = document.getElementsByClassName('closePopup');
                for (var i = 0; i < closePopupClass.length; i++) {
                    closePopupClass[i].onclick = () => {
                        event.target.parentNode.style.display = 'none';
                    }
                }
            
            
            
            })
         






            

        }




    }



})


/*
var bd = document.getElementsByTagName('body')[0];


bd.addEventListener('click', fax);




function fax(x) {
   
   

}

*/