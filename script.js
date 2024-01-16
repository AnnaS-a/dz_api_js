const btnOldImg = document.querySelector('.old-img');
const btnLastImg = document.querySelector('.last-img');
const container = document.querySelector('.container');
const currentImage = document.querySelector('.current-image');

let index1 = 1;

btnLastImg.addEventListener("click", () => {
   if (index1 === container.children.length) {
      index1 = 1;
   } else {
      index1++;
   }
   showImg(index1 - 1);
})

btnOldImg.addEventListener("click", () => {
   if (index1 === 1) {
      index1 = container.children.length;
   } else {
      index1--;
   }
   showImg(index1 - 1);
})

const showImg = (indexImg) => {
   container.children.item(indexImg).style.display = "block";
   for (let i = 0; i < container.children.length; i++) {
      if (i !== indexImg) {
         container.children.item(i).style.display = "none";
      }
   }
   showActivItem(currentImage.children.item(indexImg));
}

currentImage.addEventListener("click", (element) => {
   index1 = Number.parseInt(element.target.textContent);
   showImg(index1 - 1);
   showActivItem(element.target);
})

const showActivItem = (element) => {
   if (element.classList[0] !== "current-image") {
      element.classList.add("active");
      if (element.classList.contains('active')) {
         document.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
         element.classList.add('active');
      }
   }
}

showActivItem(currentImage.children.item(index1 - 1));