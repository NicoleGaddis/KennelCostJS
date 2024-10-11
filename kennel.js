document.getElementById("calc").addEventListener("click", function(event){
    event.preventDefault();
    let size= document.getElementById("size").value;
    let days= document.getElementById("days").value;
    let price= parseFloat(size) * parseFloat(days);
    let tax= (price *0.0485);
    let totalCost = price + tax;
    
    document.getElementById("p").textContent= `Price: $` +price.toFixed(2);
    document.getElementById("tax").textContent=`Tax: $`+ tax.toFixed(2);
    document.getElementById("total").textContent=`Total: $` + totalCost.toFixed(2);
    
});