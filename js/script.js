
/* -------------------------------------------------------------------------------------------------------*/
/* CODERHOUSE CURSO JAVASCRIPT                                                                            */
/* PRIMERA PRE ENTREGA                                                                                    */
/* GUILLERMO GUARDIA
/*-------------------------------------------------------------------------------------------------------*/

function cambiarClaveCajero(){
   /*Dado que no tenemos una BD con clave de usuarios vamos simplemente a hacer una simulacion de que la primer clave ingresada
   Es correcta siempre y cuando cumpla la condicion de que sean 4 letras y 4 numeros.*/
   
   let claveNueva;

   let claveOriginal = prompt("*** INGRESE SU CLAVE ACTUAL ***\n Recuerde que la clave debe cumplir las siguientes condiciones: \n4 letras y 4 numeros.");
  
   if (claveValida(claveOriginal)){
      
       claveNueva = prompt("*** INGRESE SU NUEVA CLAVE ***\n Recuerde que la clave debe cumplir las siguientes condiciones: \n4 letras y 4 numeros.");
       
       if (claveValida(claveNueva)) alert("SU CLAVE AH SIDO CAMBIADA CON EXITO !!!!");
       else{
            if (confirm("La clave ingresada no es valida. ¿Desea reintentar?")) cambiarClaveCajero();
        else{
            programaPrincipal()
            return 0;
        }
    }
}
   else{
        if (confirm("La clave ingresada no coincide con su clave actual. ¿Desea reintentar?")) cambiarClaveCajero();
        else{
            programaPrincipal()
            return 0;
        }
    }
}

function claveValida(texto){

    //Si contiene 4 letras y 4 numeros entonces es valida.
    const letras = /^[A-Za-z]*$/;  
    const numeros = /^[0-9]*$/;
    let cantLetras=0, cantNumeros=0;

    //Recorro la clave ingresada caracter a caracter y hago recuento de numeros y letras.
    for (let i=0; i<texto.length;i++){
        if (letras.test(texto[i])) cantLetras+=1; 
        if (numeros.test(texto[i])) cantNumeros+=1; 
    }

    //Condiciones y de acuerdo a esto devuelvo false o true.
    if ((cantLetras ===  4) && (cantNumeros === 4) && (texto.length === 8))return true;
    else return false;

}

function esEntero(numero){
    if (numero % 1 === 0) return true;
    else return false;
}

function esNumero(string_ingresado){
    //Comprueba si la cadena es numerica sea o no decimal y de acuerdo a eso devuelve true o false.
    const regex = /^[0-9,]*$/;
    const esCadenaNumerica = regex.test(string_ingresado); 
    return esCadenaNumerica;
}

function esPlazoValido(plazo){
//Ingresa un string y se corrobora que sea un plazo valido entre 30 y 365 dias.
    if (esNumero(plazo) && (Number(plazo)>=30) && (Number(plazo) <=365) && (esEntero(Number(plazo)))){
        return true;
    } 
    else return false;
}

function simularPlazoFijo(){
    
    //Declaro Variables locales a utilizar.
    let plazo,tna,inversion,resultado; 
   

    //Pido datos al usuario y mediante otras funciones compruebo que sean correctos, si lo son continuo el proceso.
   
    do{
        inversion = prompt("Ingresar monto en pesos a invertir: ");
        if(!esNumero(inversion)){
            if (!confirm("Ingrese un valor valido !! ¿Desea continuar?")){
                programaPrincipal();  // Si no son validos los datos pido reingresar y de no querer reingresar vuelvo al programa principal.
                return 0; // Este return lo uso para cuando al terminar la ejecucion de programa principal no vuelva a este procedimiento.
            }
        }
    } while(!esNumero(inversion));

    
    do{
        tna = prompt("Ingresar % TNA: ");
        if(!esNumero(tna)){
            if (!confirm("Ingrese un valor valido !! ¿Desea continuar?")){
                programaPrincipal();
                return 0; //Este return lo utilizo exclusivamente para salir de la funcion y que el programa principal no me devuelva a donde estaba.
            }
        }
    } while(!esNumero(tna)); 
    
    
    do{
        plazo = prompt("Ingrese el plazo expresado en cantidad de dias(Entre 30 y 365 dias): ");
        if(!esPlazoValido(plazo)){
            if (!confirm("Ingrese un valor valido !! ¿Desea continuar?")){
                programaPrincipal();
                return 0; //Este return lo utilizo exclusivamente para salir de la funcion y que el programa principal no me devuelva a donde estaba.
            }
        }
    } while(!esPlazoValido(plazo)); 
    
    
   //YA tenemos todos los datos para calcular y devolver los resultados, primero lo convertimos a numero ya que los usuarios ingresar string.
   inversion = Number(inversion);
   tna = Number(tna);
   plazo = Number(plazo);
   ganancia = (inversion * tna/100 * plazo / 365)
   montoFinal = inversion + ganancia;
   
   //Damos los resultados y mediente el metodo "toFixed" dejamos solo 2 caracteres decimales a los resultados.
   alert("CAPITAL: " + inversion.toFixed(2) + " Ars.\nPLAZO: " + plazo + " Dias.\n" + "GANANCIAS: " + ganancia.toFixed(2) + " ARS.\nMonto Final: " + montoFinal.toFixed(2) + " ARS.");

 
}


function programaPrincipal(){

    let opcion;
    var fin = false;
    
    while (!fin){
        opcion = prompt("BIENVENIDO A BANCO ARGENTINO !! \nSeleccione una opcion:\n1-SIMULAR PLAZO FIJO.\n2-CAMBIO DE CLAVE CAJERO.\n3-SALIR.");

            switch(opcion){
            case '1':
                simularPlazoFijo();
                break;
            case '2':
                cambiarClaveCajero();           
                break;
            case '3':
                fin = true;
                return 0; 
                break;
            default:
                alert("OPCION INVALIDA ! Vuelva a intentarlo...");
        }
    }
}


//PROGRAMA PRINCIPAL---------------------------------------

programaPrincipal()


