async function init(){
    let rusApp = null;
    try {
        rusApp = await import('../pkg');
    } catch (error) {
        console.log(e)
        return;
    }
    console.log(rusApp);
    const input = document.getElementById("upload");
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        const base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        )
       let img_data_url = rusApp.grayscale(base64);
       document.getElementById('new-img').setAttribute(
        'src', img_data_url
       );
    }
    input.addEventListener('change', ()=>{
        fileReader.readAsDataURL(input.files[0]);
    })
}
init()