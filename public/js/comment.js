const CommentButtonHandler = async (event) => {
    //event.preventDefault();
    console.log("called: CommentButtonHandler");
    const comment = document.querySelector('#edit-post-comment').value.trim();
    //const id = event.target.getAttribute('data-id');
    const id = this.getAttribute('data-id');

    const response = await fetch(`/api/comment/${id}`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
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

function postComment(formId) {
    //event.preventDefault();
    console.log("called:postComment");
    let formElem = document.getElementById(formId);
    let comment = formElem.post_comment.value.trim();
    //const id = event.target.getAttribute('data-id');
    let id = formId.substring(5);
    console.log(`id:${id} comment:${comment} id:${id}`);
    const response = fetch('/api/comment/' + id, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok || true) {
        document.location.replace('/');
    }
};

function delComment(id) {
    {
        const response = fetch(`/api/comment/${id}`, {
            method: 'DELETE',
        });

        if (response.ok || true) {
            document.location.replace('/?');
        }
    }
};



document
    .querySelector('.saveComment')
    .addEventListener('submit', CommentButtonHandler);
