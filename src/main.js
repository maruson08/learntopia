$(document).ready(function(){
    category = new URLSearchParams(window.location.search).get('category');
    console.log('1st check');
    db.collection('Data').doc(category).get().then((result)=>{
        data = result.data()
        Object.keys(data).forEach((key)=>{
            let video = `
            <h1>${key}</h1>
            <iframe width="560" height="315" src=${data[key]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
            $('#container').append(video);
        })
        
  })
})
