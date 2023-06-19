let conteudo = document.querySelector(".conteudo-secundario")

function aparecerCont(){
     conteudo.style.display = "flex"
     for(var i= 1;i<=3;i++){
          let cori =document.querySelector(`#curi${i}`)  
          setTimeout(function(){
               cori.style.left = "0%" 
          },100)
     }
  
  
    
}
