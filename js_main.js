let canvas = document.createElement('canvas');
document.body.appendChild(canvas); 
// adds the canvas to the body element 

function disableElement() {
	document.getElementById("disableMe").disabled = true;
	document.getElementById("disableLable").style.cursor = "not-allowed"
	
}




var pixelData, writeable, realWrite;


 function runDecypher() {
	 
	 for (let i = 0; i < pixelData.length; i+=4) {
		 let r = pixelData[i]; 
		 let g = pixelData[i + 1]; 
		 let b = pixelData[i + 2]; 
		 let a = pixelData[i + 3]; 
		 realWrite += (r===255) ? 0 : 1;
	}
	
	
		 // var deleteMeParent = document.getElementById('look').contentDocument;
		 
		 
		 
		 document.getElementById('printf').innerHTML = realWrite;
		 disableElement()
		 document.getElementById("decode").disabled = false;
		 // deleteMeParent.removeChild(deleteMe);
		 
 }



//---------------------------------------------------------

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img'); 
          img.src = URL.createObjectURL(this.files[0]); 
          img.onload = imageIsLoaded; 
      }
  });
});

function imageIsLoaded(e) {
	 let ctx = canvas.getContext('2d');
	 let img = document.getElementById('myImg');
	 canvas.style.position = "sticky"
	 canvas.style.display = "block"
	 canvas.style.width = "200px"
	 canvas.style.marginLeft = "auto"
	 canvas.style.marginRight = "auto"
	
	 canvas.width = img.clientWidth; 
	 canvas.height = img.clientHeight; 
	 ctx.drawImage(img, 0, 0); 
	 img.style.visibility = 'hidden'; 
	 img.style.float = "right"
	 img.style.width = "0%"
	 
	 
	 realWrite = ""; 
	 pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height).data; 
	 runDecypher()
}










































