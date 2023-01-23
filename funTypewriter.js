					//----- fun typewriter v1.0-----//

function typeWriter(elementID, text, speed) {
	let parent_h1=document.getElementById(elementID)

	//------------------- append <span> and <i> tags to <h1> tag-------------------//
	let parent_span=document.createElement("span")
	let parent_i=document.createElement("i")
	let cursorText = document.createTextNode('_')
	parent_i.append(cursorText)
	parent_h1.append(parent_span,parent_i)

	// --------------- set timer for letters display-------------------------------//
	let count = 0	
	var text_timer = setInterval(function() {
        let inner_span=document.createElement('span')
        inner_span.innerHTML=text[count]
        inner_span.style.fontSize="25px"
        inner_span.classList.add("blow")
		parent_span.append(inner_span)

		count++;
		if (count >= text.length) {
			clearInterval(text_timer);
		};
	}, speed);

	// -------------------- set timer for blinking cursor--------------------------//
    let opacity=0
    setInterval(function() {
		if (opacity === 0) {
			parent_i.style.opacity = 1;
			opacity = 1;
		} else {
			parent_i.style.opacity = 0;
			opacity = 0;
		}
	}, 300);

    
}
