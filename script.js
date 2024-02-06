let cel=document.getElementById("cel");
        let fah=document.getElementById("fah");
        // console.log(cel);
        // console.log(fah);
        cel.addEventListener("input",function(){
            //console.log("celsius changed...");
            let c=this.value;
            let f=(c * 9/5) + 32;
            if(!Number.isInteger(f)){
                f=f.toFixed(4);
            }
            fah.value=f;
        });
        fah.addEventListener("input",function(){
            //console.log("fahrenheit changed...");
            let f=this.value;
            let c=(5/9)*(f - 32);
            if(!Number.isInteger(c)){
                c=c.toFixed(4);
            }
            cel.value=c;
        }); 
