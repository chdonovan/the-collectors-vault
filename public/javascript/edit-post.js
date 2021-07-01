async function editFormHandler(event) {
    event.preventDefault();
  
    const item_name = document.querySelector('input[name="item-title"]').value.trim();
    const item_description = document.querySelector('input[name="item-text"]').value.trim();
    const inventory = document.querySelector('input[name="item-inventory"]').value.trim();

    const response = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        item_name,
        item_description,
        inventory
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-item-form').addEventListener('submit', editFormHandler)