var indexclassbtn = document.getElementsByClassName("index-table-btn");
for (let i =0 ; i<indexclassbtn.length; i++)
{
    indexclassbtn[i].onclick=function(){
        //console.log(indexclassbtn);
        let content = this.closest('tr').firstElementChild.innerHTML;
        alert("Has presionado en pedido numero "+content);
    }
}

