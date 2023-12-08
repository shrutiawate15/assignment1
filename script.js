function uploadFile() {
    var fileInput = document.getElementById('file');
    var uploadMessage = document.getElementById('upload-message');
    var filesList = document.getElementById('files-list');

    // Simple validation
    if (fileInput.files.length === 0) {
        uploadMessage.innerText = 'Please choose a file.';
        return;
    }

    // Display uploaded file in the list
    var fileName = fileInput.files[0].name;
    var listItem = document.createElement('li');
    listItem.innerText = fileName;
    filesList.appendChild(listItem);

    // Display success message
    uploadMessage.innerText = 'File uploaded successfully';

    // Clear the file input field
    fileInput.value = '';
}
