function Gallery(gallery){
  if(!gallery){
    throw new Error ('No Gallery Found!');
  }
  console.log(gallery);
  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  // console.log(images);
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');

  function showImage(el){
    if(!el){
      console.info('no image to show');
      returnl
    }
    // update the modal with this info
    console.log(el);
  }
}

// use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));





