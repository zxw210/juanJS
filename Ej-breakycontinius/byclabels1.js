//break y continue
//labels
{
    let units = 0;
    let decenas = 0;
    
    while(true){
        console.log("El num actual es: ", decenas, units);
        while(true){
            units++;
            if(units === 10){
                units = 0;
                break;
            }
        }
        decenas++;
        if(decenas === 2){
            console.log("El num actual es: ", decenas, units);
            break;
    }
    }
    }
    /*
    //labels
    
    let units=0;
    let decenas=0;
    
    bucledecenas: while(true){
        console.log('El num actual es:  ${decenas}${units}');
       bucleunidades: while(true){
            units++;
            if(units === 10){
                units = 0;
                break bucleunidades;
            }
        }
        decenas++;
        if(decenas === 2){
            break bucledecenas;
    }
    }*/