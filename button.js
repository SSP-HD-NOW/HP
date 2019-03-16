document.getElementById("decode").disabled = true;


const binaryAgent = str => str.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join(""); 

function decodeFunction(){
	console.log("hello")
	let binaryIn = document.getElementById("printf").textContent;
	binaryIn = binaryIn.replace(/(\d{8})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
	document.getElementById('printg').innerHTML = binaryAgent(binaryIn);
	console.log(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100'));
	if (isBase64(document.getElementById('printg').innerHTML) == true){
		console.log("u r smert")
		base64Detected()
	};

};
function isBase64(str) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
};
function base64Detected(){
	newText = document.createElement('textarea')
	newButton = document.createElement('button')
	t = document.createTextNode("Base64 detected! Double Decode?");
	document.getElementById('buttonDiv').appendChild(newButton);
	newButton.appendChild(t);
	newButton.onclick = function() { document.getElementById('areatextDiv').appendChild(newText);
	newText.readOnly = true;
	newText.innerHTML = atob(document.getElementById('printg').innerHTML);
	document.getElementById('stylish').style.height = "850px";
	};
}

