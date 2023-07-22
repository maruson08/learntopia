$(document).ready(function(){
    let category = new URLSearchParams(window.location.search).get('category');
    $("logo").html(`<h1>${category}</h1>`);
    db.collection('Data').doc(category).get().then((result)=>{
        data = result.data()
        Object.keys(data).forEach((key)=>{
            let video = `
            <div class='video'>
            <h2>${key}</h2>
            <iframe width="560" height="315" src=${data[key]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            `
            $('#container').append(video);
        })
        
    })
})
$(document).ready(function(){
    $("a").click((e)=>{
        $('#container').html('');
        let category = $(e.target).get(0).id;
        console.log(category)
        $("logo").html(`<h1>${category}</h1>`);
        db.collection('Data').doc(category).get().then((result)=>{
            data = result.data()
            Object.keys(data).forEach((key)=>{
                let video = `
                <div class='video'>
                <h2>${key}</h2>
                <iframe width="560" height="315" src=${data[key]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                `
                $('#container').append(video);
            })
            
        })
    })
})
