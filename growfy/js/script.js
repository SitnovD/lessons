"use script"

document.addEventListener('click',documentClick);
function documentClick(e) {
  const targetitem = e.target;
  if(targetitem.closest('.icon-menu')){
    document.documentElement.classList.toggle('menu-open');
    
  }
}