
const images = document.querySelectorAll('img');
const links = document.querySelectorAll('a');

console.log('\tСписок всех ссылок на странице:\n')
links.forEach((link, index) => {
console.log(`Ссылка ${index + 1}: ${link.href}`);
});

console.log('\n\tСписок всех изображений на странице:')
images.forEach((image, index) => {
console.log(`Изображение ${index + 1}: ${image.src}`);
});

button.onclick=function(){
	alert('klick');
};

function changeImage(){
	const myImg = document.getElementById('myImg');
	myImg.src = "/home/madara/Downloads/images.jpeg";
}
	