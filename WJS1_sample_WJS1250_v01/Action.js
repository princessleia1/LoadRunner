//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Tue Apr 05 13:15:10 2016
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action(){
    var rc=0;
   
    WJS1_Config_print_trace();
    lr.outputMessage(">> Action Iteration=" + lr.evalString("{pIteration}") +".");
    wi_msg_print_reset();

    rc=WJS1_Access_loop();
    if( rc != 0 ){ return rc; }

    return rc;
}

