var family_name = ["Amit Nainawati", "Teena Nainawati","Amit Nainawati", "Teena Nainawati","Amit Nainawati", "Teena Nainawati"] 
var family_img = ["father.jpg","mother.jpg","treen.jpg","father.jpg","mother.jpg","treen.jpg"]
var i = 0  
function nextslide(){
document.getElementById("album").src = family_img[i]
i++
document.getElementById("hf").innerHTML = family_name[i]
}
 