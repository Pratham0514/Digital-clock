
     
     
     
     function  updatecLock(){
            let date= new Date();
            let hours =date.getHours();
            let minutes = date.getMinutes();    
            let seconds = date.getSeconds();
            if (hours < 12) {
                 document.getElementById('clock').style= "background-color: #748d92; color: #d3d9d4; ";
            } else {
                 document.getElementById('clock').style= "background-color: #124E66; color: #d3d9d4;";
            }

            const time= hours +":"+ minutes +":"+ seconds;
            document.getElementById('time').innerHTML = time;
           
            let day=['Sun','Mon','Tue','Wed','Thuy','Fri','Sat'];
            let month=['January','February','March','April','May','June','July','August','September','October','November','December'];
            
            let days=day[date.getDay()];
            let months=month[date.getMonth()];
            let dates=date.getDate();
            let fulldate=dates +": "+ days + " :"+months;
            
            document.getElementById('date').innerHTML = fulldate;
        }
        setInterval(updatecLock,1000);