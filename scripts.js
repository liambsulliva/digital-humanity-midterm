function expandImage() {
    const image = document.getElementById('image');
    console.log('fn!!');
    // Toggle the "expanded" class to expand or shrink the image
    if (image.classList.contains('expanded')) {
        image.classList.remove('expanded');
    } else {
        image.classList.add('expanded');
    }
}
