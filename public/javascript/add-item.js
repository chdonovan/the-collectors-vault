//async 
const form = document.getElementById("form");

function newFormHandler(event) {
    event.preventDefault();

    const item_name = document.querySelector('input[name="item-title"]')//.value;
    const item_description = document.querySelector('input[name="item-text"]')//.value;
    const inventory = document.querySelector('input[name="item-inventory"]')//.value;
    // const user_id = req.session.user_id;
    const category_id = document.querySelector('input[name="category"]')//.value;
    if (isNaN(category_id))
    {
        alert("Category ID must be a number reference Categories Page");
        return false;
    }
    const files = document.getElementById("files");

    // var path = document.querySelector('input[name="avatar"]').value
    // const item_image = path.replace(/^.*\\/, "");
    // .split('/')[
    //     document.querySelector('input[name="avatar"]').value.split('/').length - 1
    // ];

    const formData = new FormData();
    formData.append("item_name", item_name.value);
    formData.append("item_description", item_description.value);
    formData.append("inventory", inventory.value);
    formData.append("category_id", category_id.value);
    for (let i = 0; i < files.files.length; i++) {
        formData.append("item_image", files.files[0]);
    }
    // formData.append("item_image", files.filename);
<<<<<<< HEAD
    
console.log(category_id.value);
=======

    console.log(category_id.value);
>>>>>>> develop
    console.log(files.files[0]);
    // const response =  
    fetch(`/api/items`, {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'multipart/form-data'
        // },
        body: formData
        // JSON.stringify({ 
        //     item_name,
        //     item_description,
        //     inventory,
        //     // user_id: req.session.user_id,
        //     category_name,
        //     item_image
        // })        
    })
        .then((res) => {
            console.log(res)
            if (res.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(res.statusText);
            }
<<<<<<< HEAD
        }) 
        .catch((err) => ("Error occured", err));

    
=======
        })
        .catch((err) => ("Error occured", err));


>>>>>>> develop
}

form.addEventListener('submit', newFormHandler);
