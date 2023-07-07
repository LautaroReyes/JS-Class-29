class CRectangulo{
    constructor(area) {
        this.area = area;
    }
    
    calcularArea() {
        let largo = parseFloat(prompt("Ingrese el largo del rectángulo"));
        let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo"));
        this.area = largo * ancho;
        return this.area;
    }
    
}
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("Entro al event");
    const largo = parseFloat(document.getElementById('largo').value);
    const ancho = parseFloat(document.getElementById('ancho').value);

    const rectangulo = new CRectangulo(largo * ancho);

    const datos = document.getElementById('datosRectangulo');
    datos.innerHTML = `Área: ${rectangulo.area} <br> Largo: ${largo} <br> Ancho: ${ancho}`;
});
