
var   col1=[ 0 , 1 , 1 , 0 ];
var   col2=[ 1 , 0 , 1 , 0 ]; 
var   col3=[ 0 , 1 , 0 , 0 ];
var   col4=[ 0 , 1 , 1 , 1 ];
var r=0
var c=0



var arrey=[col1,col2,col3,col4];

function bg_color( x, y , z) {
   
    if(arrey[x][y]===1){
        document.getElementById(z).style.backgroundColor="red";
        var sum =0 
        var str
        
            if((x<=3 && x >0)    &&  (y<=3 && y>0)){
                if(arrey[x-1][y]===1){

                sum += 1;  
                                    
            }
           }
           if((x<=3 && x>=0)    &&  (y<=3 && y>0)){
                 if(arrey[x][y+1]===1){

                sum += 1;  
                                    
                 }
           }
            if((x<3 && x>=0)    &&  (y<=3 && y>0) ){
                if(arrey[x+1][y]===1){

                sum += 1;  
                                    
                }
            }
            if((x<=3 && x>=0)    &&  (y<=3 && y>0)){
                if(arrey[x][y-1]===1){

               sum += 1;  
                                   
                }
          }

        
            // console.log(sum);
            
        document.getElementById(z).value=sum;
    }
    

}
