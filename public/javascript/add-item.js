



    async function newFormHandler(event) {
    event.preventDefault();

    const item_name = document.querySelector('input[name="item-title"]').value;
    const item_description = document.querySelector('input[name="item-text"]').value;
    const inventory = document.querySelector('input[name="item-inventory"]').value;
    // const user_id = req.session.user_id;
    const category_name = document.querySelector('select[name="category"]').value;
    

    const response = await fetch(`/api/items`, {
        method: 'POST',
        body: JSON.stringify({
            item_name,
            item_description,
            inventory,
            // user_id: req.session.user_id,
            category_name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}



document.querySelector('.new-item-form').addEventListener('submit', newFormHandler);
