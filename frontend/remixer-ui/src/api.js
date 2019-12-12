export function processRemix(remixType, data) {
    const formData = new FormData()
    formData.append('file', data);
    return fetch(`http://localhost:8000/remix/${remixType}`, {
        method: 'POST',
        body: formData,
        mode: 'cors',
    }).then(response => response.json());
}
