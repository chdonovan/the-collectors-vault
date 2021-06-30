
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="item-title"]').value;
    const item_description = document.querySelector('input[name="item-text"]').value;
    const inventory = document.querySelector('input[name="item-inventory"]').value;
    // const user_id = req.session.user_id;
    const category_id = document.querySelector('select[name="category"]').value.toString().split('/')[0];

    const response = await fetch(`/api/categories`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            item_description,
            inventory,
            user_id: req.session.user_id,
            category_id
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
