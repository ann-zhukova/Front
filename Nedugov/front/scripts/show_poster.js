const modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal
    const img = document.getElementById("myImage");
    const modalImg = document.getElementById("img01");

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Set the source of the modal image to the clicked image
    }

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close-img")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking anywhere outside of the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }