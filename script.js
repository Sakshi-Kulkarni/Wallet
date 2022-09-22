 
const data = {
    "AccountName": "Current Account",
    "BankBalance": "XXXXX",
    "transactionamount" : "15,000",
    "transactiondate": "2022-08-12 15:55",
    "PaymentType": {
        "Id": "X",
        "Name": "Bank to Wallet Transfer",
      },
    "senderDetails" : {
        "sender": "Saurabh Sharma",
        "bank" : "SBI",
        "IFSC": "SBIN016095",
        "accountno": "xxxxxxxxx5736",
        "transactiondate" : "2022-08-12 15:55",
        },
    "recieverDetails" : {
            "reciever": "Saurabh Sharma",
            "wallet" :" Growpital Wallet ",
            "referenceno": "DBTR/222201998174",
            "transactiondate" : "2022-08-12 15:55",
        },
    "paymentmethod": "UPI",
    "transactionId": "DBTR/222201998174",
}
function recieptDetails(data){
document.querySelector("#cost").innerText = "Rs."+data.transactionamount
   document.querySelector("#date").innerText = data.transactiondate
   document.querySelector("#from").innerText = data.senderDetails.sender
   document.querySelector("#to").innerText = data.recieverDetails.reciever
   document.querySelector("#sbi_ifsc").innerText = data.senderDetails.bank+",IFSC "+data.senderDetails.IFSC
   document.querySelector("#acno").innerText = data.senderDetails.accountno
   document.querySelector("#wallet").innerText = data.recieverDetails.wallet
   document.querySelector("#date1").innerText = data.senderDetails.transactiondate
   document.querySelector("#date2").innerText = data.recieverDetails.transactiondate
   document.querySelector("#refno").innerText = "Refno. "+data.recieverDetails.referenceno
   document.querySelector("#paymethod").innerText = "Payment Method: "+data.paymentmethod
   document.querySelector("#transid").innerText = "Transaction ID: "+data.transactionId
}
recieptDetails(data)

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var btnPopup=document.getElementById('btnPopup');


btnPopup.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
function updateInput(){
  var capsules = document.querySelector('#amounts');
  output=capsules.value;
  output =  capsules.options[capsules.selectedIndex].value;
        document.getElementById("am-inp").textContent = output;
}

function toggle(){
  var blur=document.getElementById('blur');
  blur.classList.toggle('active');
}

