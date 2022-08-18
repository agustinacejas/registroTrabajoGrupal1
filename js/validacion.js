function ingresar() {
    let campos = document.getElementsByClassName("form-label").value;
    let contra = document.getElementById("password1").value;
    let repetirContraseña = document.getElementById("password2").value;
    let check = document.getElementById("terminos")

    

  if (campos != "" && contra.length >= 6 && (contra == repetirContraseña) && check.checked) {
        showAlertSuccess()

    }else{
        showAlertError()  
    }

}


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("regBtn").addEventListener("click", () => {
        ingresar()

    })
});