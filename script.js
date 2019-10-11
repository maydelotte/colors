
var colorzHex = ["111111", "700000", "777777", "aaaa77", "dddddd"];

function newScheme (event) {
  blockName = event.srcElement.id;
  blockNumber = blockName.substr(-1);
  console.log("blockNumber: " + blockNumber);
  console.log(colorzHex[blockNumber-1]);
  const url = "http://www.thecolorapi.com/scheme?hex=" + colorzHex[blockNumber-1] + "&mode=analogic-complement";
	fetch(url)
		.then(function(response) {
			return response.json();
		}).then(function(json) {

      for (var i = 0; i < json.count; ++i) {
        console.log(i);
        block = document.getElementById("block"+(i+1));
        block.innerHTML = "<p>0x" + json.colors[i].hex.clean + "</p><p>" + json.colors[i].name.value + "</p>";
        console.log(json.colors[i].hex.clean);
        block.style.backgroundColor = json.colors[i].rgb.value;
        colorzHex[i] = json.colors[i].hex.clean;
      }

		});
}

document.getElementById("block1").addEventListener("click", newScheme);
document.getElementById("block2").addEventListener("click", newScheme);
document.getElementById("block3").addEventListener("click", newScheme);
document.getElementById("block4").addEventListener("click", newScheme);
document.getElementById("block5").addEventListener("click", newScheme);
