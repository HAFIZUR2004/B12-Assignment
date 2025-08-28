// জাতীয় জরুরি সেবা

count =0 ;


document.getElementById("heart-logo")
.addEventListener("click",function(){
    count++;
    document.getElementById("heart-number").innerText = count;
    
    
})

// পুলিশ

document.getElementById("heart-logo-02")
.addEventListener("click",function(){
    count++;
    document.getElementById("heart-number").innerText = count;
    
    
})
// ফায়ার সার্ভিস
document.getElementById("heart-logo-03")
.addEventListener("click",function(){
    count++;
    document.getElementById("heart-number").innerText = count;
    
    
})
// অ্যাম্বুলেন্স
document.getElementById("heart-logo04")
.addEventListener("click",function(){
    count++;
    document.getElementById("heart-number").innerText = count;
})
// নারী ও শিশু সহায়তা
document.getElementById("heart-logo-05")
.addEventListener("click",function(){
    count++;
    document.getElementById("heart-number").innerText = count;
})

// দুদক
document.getElementById("heart-logo-06")
.addEventListener("click",function(){
    count++;
    document.getElementById("heart-number").innerText = count;
})
// বিদ্যুৎ বিভ্রাট

document.getElementById("heart-logo-07")
.addEventListener("click",function(){
    count++;
    document.getElementById("heart-number").innerText = count;
})
// ব্র্যাক

document.getElementById("heart-logo-08")
.addEventListener("click",function(){
    count++;
    document.getElementById("heart-number").innerText = count;
})
// বাংলাদেশ রেলওয়ে
document.getElementById("heart-logo-09")
.addEventListener("click",function(){
    count++;
    document.getElementById("heart-number").innerText = count;
})



//coin
let coin =100;
document.getElementById("call-button").addEventListener("click",function(e){
   if( coin < 20){
        alert("❌আপনার পর্যাপ্ত কয়েন ! নেই কল করার জন্য কমপক্ষে ২০ টি কয়েন লাগবে")
        return;

    }
     coin -=20;
    

    document.getElementById("coin").innerText =coin;
    alert("Calling National Emergency Service 999..");


    const data = {
      name:"জাতীয় জরুরি সেবা",
      date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData);
    

});
// police
document.getElementById("police-call-button").addEventListener("click",function(e){
    if( coin < 20){
        alert("❌আপনার পর্যাপ্ত কয়েন ! নেই কল করার জন্য কমপক্ষে ২০ টি কয়েন লাগবে")
        return;

    }
     coin -=20;
    

    document.getElementById("coin").innerText =coin;
    alert("Calling Police Service 999..");



    const data = {
      name:"পুলিশ",
      date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData);
    
});
// Fire Service
document.getElementById("fire-call-button").addEventListener("click",function(e){
  if( coin < 20){
        alert("❌আপনার পর্যাপ্ত কয়েন ! নেই কল করার জন্য কমপক্ষে ২০ টি কয়েন লাগবে")
        return;

    }
     coin -=20;
    

    document.getElementById("coin").innerText =coin;
    alert("Calling Fire Service Service 999..");
    



    const data = {
      name:"ফায়ার সার্ভিস",
      date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData);
});
//Ambulance


document.getElementById("ambulance-call-button").addEventListener("click",function(e){
   
    if( coin < 20){
        alert("❌আপনার পর্যাপ্ত কয়েন ! নেই কল করার জন্য কমপক্ষে ২০ টি কয়েন লাগবে")
        return;

    }
     coin -=20;
    

    document.getElementById("coin").innerText =coin;
    alert("Calling Ambulance Service 1994-999999..");
   



     const data = {
      name:"অ্যাম্বুলেন্স",
      date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData);
    
});
// Women

document.getElementById("women-call-button").addEventListener("click",function(e){
    if( coin < 20){
        alert("❌আপনার পর্যাপ্ত কয়েন ! নেই কল করার জন্য কমপক্ষে ২০ টি কয়েন লাগবে")
        return;

    }
     coin -=20;
    

    document.getElementById("coin").innerText =coin;
    alert("Calling Women & Child Helpline Service 109..");



    const data = {
      name:"নারী ও শিশু সহায়তা",
      date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData);
    
});

// Anti
document.getElementById("anti-call-button").addEventListener("click",function(e){
    if( coin < 20){
        alert("❌আপনার পর্যাপ্ত কয়েন ! নেই কল করার জন্য কমপক্ষে ২০ টি কয়েন লাগবে")
        return;

    }
     coin -=20;
    

    document.getElementById("coin").innerText =coin;
    alert("Calling Ambulance Service 106..");


    const data = {
      name:"দুদক",
      date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData);
    
});

// Electricity
document.getElementById("electricity-call-button").addEventListener("click",function(e){
    if( coin < 20){
        alert("❌আপনার পর্যাপ্ত কয়েন ! নেই কল করার জন্য কমপক্ষে ২০ টি কয়েন লাগবে")
        return;

    }
     coin -=20;
    

    document.getElementById("coin").innerText =coin;
    alert("Calling Electricity Outage Service 16216..");

    const data = {
      name:"বিদ্যুৎ বিভ্রাট",
      date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData);
    
});
// Brac
document.getElementById("brac-call-button").addEventListener("click",function(e){
    if( coin < 20){
        alert("❌আপনার পর্যাপ্ত কয়েন ! নেই কল করার জন্য কমপক্ষে ২০ টি কয়েন লাগবে")
        return;

    }
     coin -=20;
    

    document.getElementById("coin").innerText =coin;
    alert("Calling Brac Service 16445..");

    const data = {
      name:"ব্র্যাক",
      date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData);
    
});
// Bangladesh
document.getElementById("bangladesh").addEventListener("click",function(e){
     if( coin < 20){
        alert("❌আপনার পর্যাপ্ত কয়েন ! নেই কল করার জন্য কমপক্ষে ২০ টি কয়েন লাগবে")
        return;

    }
     coin -=20;
    

    document.getElementById("coin").innerText =coin;
    alert("Calling Bangladesh Railway Service 163..");

const data = {
      name:"বাংলাদেশ রেলওয়ে",
      date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData);
    
    
});






// copy
count =0 ;

// জাতীয় জরুরি সেবা

document.getElementById("copy-01")
.addEventListener("click",function(){
    count++;
    document.getElementById("coppy-number").innerText = count;

    const text = document.getElementById("textToCopy").innerText;
    navigator.clipboard.writeText(text).then(function() {
     alert("Copied to clipboard: " + text);

      }).catch(function(err) {

      console.error("Failed to copy: ", err);
      });

    


});
// পুলিশ
document.getElementById("copy-02")
.addEventListener("click",function(){
    count++;
    document.getElementById("coppy-number").innerText = count;

    const text = document.getElementById("textToCopy-02").innerText;
    navigator.clipboard.writeText(text).then(function() {
     alert("Copied to clipboard: " + text);

      }).catch(function(err) {

      console.error("Failed to copy: ", err);
      });
});
// ফায়ার সার্ভিস

document.getElementById("copy-03")
.addEventListener("click",function(){
    count++;
    document.getElementById("coppy-number").innerText = count;

    const text = document.getElementById("textToCopy-03").innerText;
    navigator.clipboard.writeText(text).then(function() {
     alert("Copied to clipboard: " + text);

      }).catch(function(err) {

      console.error("Failed to copy: ", err);
      });
});
// অ্যাম্বুলেন্স
document.getElementById("copy-04")
.addEventListener("click",function(){
    count++;
    document.getElementById("coppy-number").innerText = count;

    const text = document.getElementById("textToCopy-04").innerText;
    navigator.clipboard.writeText(text).then(function() {
     alert("Copied to clipboard: " + text);

      }).catch(function(err) {

      console.error("Failed to copy: ", err);
      });
});
// নারী ও শিশু সহায়তা

document.getElementById("copy-05")
.addEventListener("click",function(){
    count++;
    document.getElementById("coppy-number").innerText = count;

    const text = document.getElementById("textToCopy-05").innerText;
    navigator.clipboard.writeText(text).then(function() {
     alert("Copied to clipboard: " + text);

      }).catch(function(err) {

      console.error("Failed to copy: ", err);
      });
});
// দুদক
document.getElementById("copy-06")
.addEventListener("click",function(){
    count++;
    document.getElementById("coppy-number").innerText = count;

    const text = document.getElementById("textToCopy-06").innerText;
    navigator.clipboard.writeText(text).then(function() {
     alert("Copied to clipboard: " + text);

      }).catch(function(err) {

      console.error("Failed to copy: ", err);
      });
});
// বিদ্যুৎ বিভ্রাট

document.getElementById("copy-07")
.addEventListener("click",function(){
    count++;
    document.getElementById("coppy-number").innerText = count;

    const text = document.getElementById("textToCopy-07").innerText;
    navigator.clipboard.writeText(text).then(function() {
     alert("Copied to clipboard: " + text);

      }).catch(function(err) {

      console.error("Failed to copy: ", err);
      });
});
// ব্র্যাক

document.getElementById("copy-08")
.addEventListener("click",function(){
    count++;
    document.getElementById("coppy-number").innerText = count;

    const text = document.getElementById("textToCopy-08").innerText;
    navigator.clipboard.writeText(text).then(function() {
     alert("Copied to clipboard: " + text);

      }).catch(function(err) {

      console.error("Failed to copy: ", err);
      });

});
// বাংলাদেশ রেলওয়ে

document.getElementById("copy-09")
.addEventListener("click",function(){
    count++;
    document.getElementById("coppy-number").innerText = count;

    const text = document.getElementById("textToCopy-09").innerText;
    navigator.clipboard.writeText(text).then(function() {
     alert("Copied to clipboard: " + text);

      }).catch(function(err) {

      console.error("Failed to copy: ", err);
      });
});

   



const historyData =[]

// বাংলাদেশ রেলওয়ে
document.getElementById("bangladesh").addEventListener("click",function(){
    const historyContainer =document.getElementById("history-div")
    historyContainer.innerText = ""
    for(const history of historyData){
        const div = document.createElement("div")
        div.innerHTML=` 
        <div class="bg-gray-50 flex justify-between p-[16px] rounded-[8px]  mt-[10px]">
                <div>
                <h1  class="text-[18px] font-bold"> ${history.name} </h1>
                <p class="text-[18px] ">163</p>
            </div>
            <div>
                <p class="text-[18px] font-bold">${ history.date }</p>
            </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }
    
    
})

// ব্র্যাক
document.getElementById("brac-call-button").addEventListener("click",function(){
    const historyContainer =document.getElementById("history-div")
    historyContainer.innerText = ""

    for(const history of historyData){
        const div = document.createElement("div")
        div.innerHTML=` 
        <div class="bg-gray-50 flex justify-between p-[16px] rounded-[8px]  mt-[10px]">
                <div>
                <h1  class="text-[18px] font-bold"> ${history.name} </h1>
                <p class="text-[18px] ">16445</p>
            </div>
            <div>
                <p class="text-[18px] font-bold">${ history.date }</p>
            </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }
    
    
})

// বিদ্যুৎ বিভ্রাট
document.getElementById("electricity-call-button").addEventListener("click",function(){
    const historyContainer =document.getElementById("history-div")
    historyContainer.innerText = ""

    for(const history of historyData){
        const div = document.createElement("div")
        div.innerHTML=` 
        <div class="bg-gray-50 flex justify-between p-[16px] rounded-[8px]  mt-[10px]">
                <div>
                <h1  class="text-[18px] font-bold"> ${history.name} </h1>
                <p class="text-[18px] ">16216</p>
            </div>
            <div>
                <p class="text-[18px] font-bold">${ history.date }</p>
            </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }
    
    
})

// দুদক

document.getElementById("anti-call-button").addEventListener("click",function(){
    const historyContainer =document.getElementById("history-div")
    historyContainer.innerText = ""

    for(const history of historyData){
        const div = document.createElement("div")
        div.innerHTML=` 
        <div class="bg-gray-50 flex justify-between p-[16px] rounded-[8px]  mt-[10px]">
                <div>
                <h1  class="text-[18px] font-bold"> ${history.name} </h1>
                <p class="text-[18px] ">106</p>
            </div>
            <div>
                <p class="text-[18px] font-bold">${ history.date }</p>
            </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }
    
    
})

// নারী ও শিশু সহায়তা

document.getElementById("women-call-button").addEventListener("click",function(){
    const historyContainer =document.getElementById("history-div")
    historyContainer.innerText = ""

    for(const history of historyData){
        const div = document.createElement("div")
        div.innerHTML=` 
        <div class="bg-gray-50 flex justify-between p-[16px] rounded-[8px]  mt-[10px]">
                <div>
                <h1  class="text-[18px] font-bold"> ${history.name} </h1>
                <p class="text-[18px] ">109</p>
            </div>
            <div>
                <p class="text-[18px] font-bold">${ history.date }</p>
            </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }
    
    
})




// ফায়ার সার্ভিস
document.getElementById("fire-call-button").addEventListener("click",function(){
    const historyContainer =document.getElementById("history-div")
    historyContainer.innerText = ""

    for(const history of historyData){
        const div = document.createElement("div")
        div.innerHTML=` 
        <div class="bg-gray-50 flex justify-between p-[16px] rounded-[8px]  mt-[10px]">
                <div>
                <h1  class="text-[18px] font-bold"> ${history.name} </h1>
                <p class="text-[18px] ">999</p>
            </div>
            <div>
                <p class="text-[18px] font-bold">${ history.date }</p>
            </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }
    
    
})


// অ্যাম্বুলেন্স

document.getElementById("ambulance-call-button").addEventListener("click",function(){
    const historyContainer =document.getElementById("history-div")
    historyContainer.innerText = ""

    for(const history of historyData){
        const div = document.createElement("div")
        div.innerHTML=` 
        <div class="bg-gray-50 flex justify-between p-[16px] rounded-[8px]  mt-[10px]">
                <div>
                <h1  class="text-[18px] font-bold"> ${history.name} </h1>
                <p class="text-[18px] ">1994-999999</p>
            </div>
            <div>
                <p class="text-[18px] font-bold">${ history.date }</p>
            </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }
    
    
})


// পুলিশ

document.getElementById("police-call-button").addEventListener("click",function(){
    const historyContainer =document.getElementById("history-div")
    historyContainer.innerText = ""

    for(const history of historyData){
        const div = document.createElement("div")
        div.innerHTML=` 
        <div class="bg-gray-50 flex justify-between p-[16px] rounded-[8px]  mt-[10px]">
                <div>
                <h1  class="text-[18px] font-bold"> ${history.name} </h1>
                <p class="text-[18px] ">999</p>
            </div>
            <div>
                <p class="text-[18px] font-bold">${ history.date }</p>
            </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }
    
    
})

// জাতীয় জরুরি সেবা

document.getElementById("call-button").addEventListener("click",function(){
    const historyContainer =document.getElementById("history-div")
    historyContainer.innerText = ""

    for(const history of historyData){
        const div = document.createElement("div")
        div.innerHTML=` 
        <div class="bg-gray-50 flex justify-between p-[16px] rounded-[8px]  mt-[10px]">
                <div>
                <h1  class="text-[18px] font-bold"> ${history.name} </h1>
                <p class="text-[18px] ">999</p>
            </div>
            <div>
                <p class="text-[18px] font-bold">${ history.date }</p>
            </div>
            </div>
        `;
        historyContainer.appendChild(div);
    }
    
    
})



// clear-button
document.getElementById("clear-button").addEventListener("click",function(){
    const historyDiv =document.getElementById("history-div");
    historyDiv.innerHTML = "";
    historydata= [];
    alert("আপনি কি সব হিস্টরি ডিলিট করতে চাচ্ছেন?");
})