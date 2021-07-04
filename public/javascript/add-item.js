const form = document.getElementById("form");

function newFormHandler(event) {
    event.preventDefault();

    const item_name = document.querySelector('input[name="item-title"]')
    const item_description = document.querySelector('input[name="item-text"]')
    const inventory = document.querySelector('input[name="item-inventory"]')
    const category_id = document.querySelector('input[name="category"]')
    const files = document.getElementById("files");


    const formData = new FormData();
    formData.append("item_name", item_name.value);
    formData.append("item_description", item_description.value);
    formData.append("inventory", inventory.value);
    formData.append("category_id", category_id.value);
    for (let i = 0; i < files.files.length; i++) {
        formData.append("item_image", files.files[0]);
    }

    console.log(files.files[0]);
    fetch(`/api/items`, {
        method: 'POST',
        body: formData
    })
        .then((res) => {
            console.log(res)
            if (res.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(res.statusText);
            }
        })
        .catch((err) => ("Error occured", err));
}

form.addEventListener('submit', newFormHandler);
