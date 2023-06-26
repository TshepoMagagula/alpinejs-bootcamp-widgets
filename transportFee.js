function transportFee(shift){
    if(shift === "morning"){
    return "R20";
    }
    else if(shift === "afternoon"){
      return "R10";
    }
    else{
      return "free";
    }
}

function TransportFee(){
    return{
        shift: '',
        returnMsg: '',
        transportFee(){
            this.returnMsg = transportFee(this.shift);
        }
    }   
}

document.addEventListener('alpine:init', () => {
    Alpine.data('transportFee', TransportFee);
})