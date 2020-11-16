on("ready",function()
{
    on("chat:message",function(msg){
        var gmroll = false;
        if(msg.type=="api" && msg.content.indexOf("!step")==0 )
        { 
            gmroll = false;
        }
        else if (msg.type=="api" && msg.content.indexOf("!gmstep")==0 ) 
        {
            gmroll = true;
        }
        else
        {
            return;
        }
        
        var player = msg.who;
            
        var args = msg.content.split(" ");
        var step = Number(args[1])
        if (isNaN(step)) {
            sendChat("API", "Please enter a valid stepnumber");
            return;
        }
        var dice = "1d4-2";
        switch (step) {
            case 1: 
                dice = "1d4!-2";
                break;
            case 2:
                dice = "1d4!-1";
                break;
            case 3:
                dice = "1d4!";
                break;                    
            case 4:
                dice = "1d6!";
                break;                    
            case 5:
                dice = "1d8!";
                break;                    
            case 6:
                dice = "1d10!";
                break;                    
            case 7:
                dice = "1d12!";
                break;                    
            case 8:
                dice = "2d6!";
                break;                    
            case 9:
                dice = "1d8!+1d6!";
                break;                    
            case 10:
                dice = "2d8!";
                break;                    
            case 11:
                dice = "1d10!+1d8!";
                break;                    
            case 12:
                dice = "2d10!";
                break;                    
            case 13:
                dice = "1d12!+1d10!";
                break;                    
            case 14:
                dice = "2d12!";
                break;                    
            case 15:
                dice = "1d12!+2d6!";
                break;                    
            case 16:
                dice = "1d12!+1d8!+1d6!";
                break;                    
            case 17:
                dice = "1d12!+2d8!";
                break;                    
            case 18:
                dice = "1d12!+1d10!+1d8!";
                break;        
            case 19:
                dice = "1d20!+2d6!";
                break;                    
            case 20:
                dice = "1d20!+1d8!+1d6!";
                break;  
            case 21:
                dice = "1d20!+2d8!";
                break;                           
            case 22:
                dice = "1d20!+1d10!+1d8!";
                break;                    
            case 23:
                dice = "1d20!+2d10!";
                break;                      
            case 24:
                dice = "1d20!+1d12!+1d10!";
                break;                      
            case 25:
                dice = "1d20!+2d12!";
                break;                      
            case 26:
                dice = "1d20!+1d12!+2d6!";
                break;                      
            case 27:
                dice = "1d20!+1d12!+1d8!+1d6!";
                break;                      
            case 28:
                dice = "1d20!+1d12!+2d8!";
                break;                      
            case 29:
                dice = "1d20!+1d12!+1d10!+1d8!";
                break;                      
            case 30:
                dice = "2d20!+2d6!";
                break;                      
            case 31:
                dice = "2d20!+1d8!+1d6!";
                break;                      
            case 32:
                dice = "2d20!+2d8!";
                break;                      
            case 33:
                dice = "2d20!+1d10!+1d8!";
                break;                      
            case 34:
                dice = "2d20!+2d10!";
                break;                      
            case 35:
                dice = "2d20!+1d12!+1d10!";
                break;                      
            case 36:
                dice = "2d20!+2d12!";
                break;                      
            case 37:
                dice = "2d20!+2d12!";
                break;                      
            case 38:
                dice = "2d20!+1d12!+1d10!";
                break;                      
            case 39:
                dice = "2d20!+1d12!+2d8!";
                break;                      
            case 40:
                dice = "2d20!+1d12!+1d10!+1d8!";
                break;                      
            case 41:
                dice = "2d20!+d10!+d8!+2d6!";
                break;                      
            case 42:
                dice = "2d20!+d10!+2d8!+d6!";
                break; 
            case 43:
                dice = "2d20!+2d10!+d8!+d6!";
                break;                      
            case 44:
                dice = "2d20!+2d10!+2d8!";
                break;                      
            case 45:
                dice = "2d20!+3d10!+d8!";
                break;                      
            case 46:
                dice = "2d20!+d12!+2d10!+d8!";
                break;                      
            case 47:
                dice = "2d20!+2d10!+2d8!+d4!";
                break;                      
            case 48:
                dice = "2d20!+2d10!+2d8!+d6!";
                break;                      
            case 49:
                dice = "2d20!+2d10!+3d8!";
                break;                                          
            case 50:
                dice = "2d20!+3d10!+2d8!";
                break;    
            case 51:
                dice = "2d20!+d12!+2d10!+2d8!";
                break;        
            case 52:
                dice = "2d20!+2d10!+2d8!+2d6!";
                break;                            
            case 53:
                dice = "2d20!+2d10!+3d8!+d6!";
                break;                      
            case 54:
                dice = "2d20!+3d10!+2d8!+d6!";
                break;                      
            case 55:
                dice = "2d20!+3d10!+3d8!";
                break;                      
            case 56:
                dice = "2d20!+4d10!+2d8!";
                break;                      
            case 57:
                dice = "2d20!+d12!+3d10!+2d8!";
                break;                      
            case 58:
                dice = "3d20!+2d10!+2d8!+d4!";
                break;                      
            case 59:
                dice = "3d20!+2d10!+2d8!+d6!";
                break;                                          
            case 60:
                dice = "3d20!+2d10!+3d8!";
                break;                             
        }
        if (gmroll) {
            sendChat("API ->"+player, "/roll " + " "+dice+ "[Step "+step+"]");
        } else {
            sendChat(player, " [["+dice+ "]] rolling step "+step, {use3d:true});
        }
    });
});
