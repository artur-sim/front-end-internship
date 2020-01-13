let imagePreview = document.getElementById('list')
let image = document.querySelector('.image')
let author = document.getElementById('author')
let height = document.getElementById('height')
let width = document.getElementById('width')
fetch('https://picsum.photos/v2/list')
    .then(res => {
        return res.json()
    }).then((imageData) => {
        imageData.forEach(item => {
            let img = document.createElement('img')
            img.className = "imageDiv"
            img.dataset.author = `${item.author}`
            img.dataset.height = `${item.height}`
            img.dataset.width = `${item.width}`
            img.src = `${item.download_url}`
            imagePreview.appendChild(img);
        })

        let images = document.querySelectorAll('.imageDiv')
        images.forEach(image => {
            image.addEventListener('click', enlarge)
        })
    });



function enlarge(e) {
    image.src = e.target.src

    author.innerText = e.target.dataset.author
    height.innerText = e.target.dataset.height
    width.innerText = e.target.dataset.width
}