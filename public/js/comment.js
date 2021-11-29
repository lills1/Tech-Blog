// const newFormHandler = async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('#post-title').value.trim();
//     const content = document.querySelector('#post-content').value.trim();

//     if (title && content) {
//         const response = await fetch(`/api/comment`, {
//             method: 'POST',
//             body: JSON.stringify({ title, content }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             document.location.replace('/comment');
//         } else {
//             alert('Failed to create comment');
//         }
//     }
// };

// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/comment/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.replace('/profile');
//         } else {
//             alert('Failed to delete post');
//         }
//     }
// };

// const UpdateButtonHandler = async (event) => {
//     alert.console("running updateNuttonJa:")
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/comment/${id}`, {
//             method: 'PUT',
//         });

//         if (response.ok) {
//             document.location.replace('/comment');
//         } else {
//             alert('Failed to update post');
//         }
//     }
// };

// document
//     .querySelector('.post-comment')
//     .addEventListener('submit', newFormHandler);

