async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="item-title"]').value;
    const item_description = document.querySelector('input[name="item-text"]').value;
    const inventory = document.querySelector('input[name="item-inventory"]').value;

    const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            item_description,
            inventory
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