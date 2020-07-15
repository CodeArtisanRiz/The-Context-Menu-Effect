if(document.addEventListener) {
    document.addEventListener('contextmenu', function (e){
        toggleContextMenu ('context-menu-01', e);
        e.preventDefault();
        // window.event.returnValue=false;
    }, false);
}else{
    document.attachEvent('oncontext-menu', function(){
        toggleContextMenu('context-menu-01',e);
        window.event.returnValue=false;
    });
}
function toggleContextMenu(id, e) {
    let menu = document.getElementById(id);
    if(menu.classList.contains('context-open')){
        menu.classList.add('context-insta-close');
        menu.classList.remove('context-open');
        menu.classList.remove(context-insta-close);
    } else {
        menu.style.left = (e.pageX +8)+'px';
        menu.style.top = (e.pageY +8)+ 'px';
        menu.classList.add('context-open');
    }
}