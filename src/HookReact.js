// useState la hook dung de la viec voi cac state ma ko can thong qua cac class cpn 
// trong function ko ho tro life cycel nen can su dung useEffect, khi mot bien thay doi thi uf cung thuc thi
// useEffect dung de thay the cho cac ham life cycle cua react, moi thay doi cua cac gia tri se dc bat boi useEffect
// useContext dung de lay ve gia tri cua context moi khi gia tri cua context do thay doi const giaTriCuaContext = useContext(TenContext);
// useReducer dung de su ly cac state phuc tap va chia se cac state giua cac cpn
import React,{useState} from "react";
export default  function useClock(){
    const {time,setTime}=useState("");
    const {ampm,setampm}=useState("");
     const updateTime= function(){
        const timeInfor=new Date();
        let hour=0;
        let minute=0;
        let second=0;
        if(time.getHours()>12){
            hour=time.getHours()-12;
        }
        else{
             hour=time.getHours();
        }
        if(time.getMinutes<10){
             minute="0"+ time.getMinutes();
        }
        else{
            
             minute=time.getMinutes();
        }
        if(time.getSeconds()<10){
             second="0"+ time.getSeconds();
        }
        else{
             second=time.getSeconds();
        }
        if(time.getHours()>12){
            let ampm="PM";
        }else {
            let ampm="AM";
        }
        setampm(ampm);
        setTime(`${hour}:${minute}:${second}`);
    }
    setInterval(() => {
        updateTime();
    }, 1000);
    return [time,ampm];

}