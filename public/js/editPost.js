const UpdateButtonHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#edit-post-title').value.trim();
    const content = document.querySelector('#edit-post-title').value.trim();
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to update post');
    }
};

const delButtonHandler = async (event) => {
    event.preventDefault()
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector('.edit-blog-form')
    .addEventListener('submit', UpdateButtonHandler);

document
    .querySelector('#deleteButton')
    .addEventListener('click', delButtonHandler);