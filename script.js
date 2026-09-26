document.getElementById("miBoton").addEventListener("click", function() {
    alert("Parecía que el tiempo no pasaba, pero hoy miramos el calendario y descubrimos que lo que antes veíamos como un futuro lejano, hoy es nuestro precente. El aula quedará vacía, pero nos llevaremos el corazón lleno de risas, aprendisajes y recuerdos que el tiemppo jamas podra borrar. FALTA POCO PARA CRUZAR LA META; ABRACEMOS CADA DIA QUE NOS QUEDA POR QUE ESOS MOMENTOS NO SE PODRAN REPETIR.");
    const colores = ["#ff4757", "#2ed573", "#1e90ff", "#ffa502", "#9b59b6"];
    const colorAzar = colores[Math.floor(Math.random() * colores.length)];

    document.body.style.background = colorAzar;
});