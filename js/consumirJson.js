
let url = "https://dragonball-api.com/api/characters?limit=100";
fetch(url)
.then(response => {
    if (!response.ok){
        throw new Error('Error al obtener el archivo JSON');
    }
    return response.json();
})
.then(data =>{
    console.log('Datos recibidos:', data);
})
.catch(err =>{
    console.error('Error:', err);
})

