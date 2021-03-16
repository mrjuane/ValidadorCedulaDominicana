
function ValidateDocumentID(cedula){

    const valDecimal = 10;
    const multi = [1,2,1,2,1,2,1,2,1,2];

    var digito = 0;
    var acum = 0;
 
    if(cedula.length != 11) 
        return false;

    if(parseInt(cedula.substring(0, 3)) != 402 && parseInt(cedula.substring(0, 3)) > 121 && parseInt(cedula.substring(0, 3)) < 1) 
        return false;
    
   
    for(let i=0; i < cedula.length-1; i++)
    {
        digito = cedula[i] * multi[i];
        
        acum += (digito >= valDecimal ?  parseInt(digito.toString()[0]) + parseInt(digito.toString()[1]) : digito); 
        
    }

    verif1 =  acum.toString()[0] + '0';
    
    verif2 = (parseFloat(verif1) / valDecimal) * valDecimal;
    
    verif2 = (verif2 < acum ? (verif2 + valDecimal) - acum: verif2 - acum);

    var result = (cedula[10] == verif2 ? 'valid': 'invalid');

    alert(result);
}
      
       