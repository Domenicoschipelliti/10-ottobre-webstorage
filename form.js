
const localstoragefields="key"


const input=document.getElementById("input-fields")

const buttonFields=document.getElementById("bottone-save")
const buttonDelete=document.getElementById("bottone-delete")


const save= () =>{
    
  const inputFields=input.value
  localStorage.setItem(localstoragefields,inputFields)
  console.log("Nome salvato")
  alert('registrazione effettuata')

}


const delet =() => {
   
    if (confirm("Sei sicuro di eliminare l'account")) {
        input.value=""
        localStorage.removeItem(localstoragefields)
        alert('account eliminato')
    }
    
}


buttonFields.addEventListener('click', save)
buttonDelete.addEventListener('click', delet)