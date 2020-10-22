$(document).ready(function(){
    window.wirewax.playerId = "wirewax-player-gnth";
    // Detectar si el player esta listo
    window.wirewax.addEventListener(window.wirewax.events.listeners.PLAYER_READY, function(){
        $(window).on("message",function(event){
            if(event.originalEvent.origin=="https://sinergis.com.mx"|| event.originalEvent.origin=="http://sinergis.com.mx"|| event.originalEvent.origin=="https://sinergis.xyz"){
                 switch(event.originalEvent.data){
                    case "op0":
                        console.log("Tema 0 seleccionado");
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.SEEK, 6);
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.CLOSE_WIDGET);
                        break;
                    case "op1":
                        console.log("Tema 1 seleccionado");
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.SEEK, 131);
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.CLOSE_WIDGET);
                        break;
                    case "op2":
                        console.log("Tema 2 seleccionado");
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.SEEK, 332);
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.CLOSE_WIDGET);
                        break;
                    case "op3":
                        console.log("Tema 3 seleccionado");
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.SEEK, 461);
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.CLOSE_WIDGET);
                        break;  
                    case "op4":
                        console.log("Tema 4 seleccionado");
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.SEEK, 555);
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.CLOSE_WIDGET);
                        break;
                    case "op5":
                        console.log("Tema 5 seleccionado");
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.SEEK, 737);
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.CLOSE_WIDGET);
                        break;
                    case "op6":
                        console.log("Tema 6 seleccionado");
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.SEEK, 806);
                            window.wirewax.triggerEvent(window.wirewax.events.triggers.CLOSE_WIDGET);
                        break;

                    default:
                        // Sin contenido
                        console.log("No hay video a reproducir");
                        break;
                }
            }else{
                console.log("Origin-No-Autorizado");
            }
        });
    });            
});