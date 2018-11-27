
		var onPress = document.querySelector('.button');
		var uField = document.querySelector('input');
		var pLink = document.querySelector('.profile-link');
		var insertImg = document.querySelectorAll("img");
		var userName;
    onPress.addEventListener('click', getUrl);
		function key(e) {
			if(e.which === 13) {
				getUrl();
			}
		}
    function getUrl() {
			userName = uField.value;
			userName = userName.toLowerCase();
			var request = new XMLHttpRequest();
			request.addEventListener("load", function(evt){
				document.querySelector('span').style.display = 'block';
				 var create = document.createElement('img');
				 var s320, firstSlice, jpg, portionOne, secondSlice, scont;
    		 s320 = this.responseText.indexOf('s320x320');
         firstSlice = this.responseText.slice(s320, );
    jpg = firstSlice.indexOf('.jpg') + 4;
    portionOne = firstSlice.slice(0, jpg);
		secondSlice = this.responseText.slice(0, s320);
    secondSlice = secondSlice.split("").reverse().join("");
    scont = secondSlice.slice(0,secondSlice.indexOf('sptth'));
    scont = scont.split("").reverse().join("");
    var imgURL = 'https' + scont + portionOne;
					insertImg[2].style.display = "block";
					insertImg[2].src = imgURL;
					insertImg[1].src = imgURL;
					thumb.appendChild(create);
					replaceStr = thumb.querySelectorAll('img');
					var len = replaceStr.length - 1;
					replaceStr[len].src = imgURL;
					replaceStr[len].alt = userName;
					pLink.href = "https://www.instagram.com/" + userName;
					pLink.textContent = userName;
					replaceStr[len].addEventListener('click', someFunction);

			}, false);
			request.open('GET', 'https://www.instagram.com/' + userName, true);
			request.send();
		}

		function someFunction() {
			insertImg[2].src = this.src;
			insertImg[1].src = this.src;
			pLink.href = "https://www.instagram.com/" + this.alt;
			pLink.textContent = this.alt;
		}
