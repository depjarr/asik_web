function goToProductPage(productPage) {
    window.location.href = productPage;
}


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Initially hide all tab content
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block"; // Show the tab that was clicked
    evt.currentTarget.style.backgroundColor = "#ccc";
}

document.querySelectorAll('.rating .star').forEach(star => {
    star.addEventListener('click', function() {
        let rating = this.dataset.value;
        document.getElementById('ratingValue').value = rating; // Set the value of the hidden input.
        this.parentNode.dataset.rating = rating;
        this.classList.add('active');
        this.previousElementSibling.classList.remove('active');
        this.nextElementSibling.classList.remove('active');
    });

    star.addEventListener('mouseover', function() {
        this.classList.add('hover');
        this.previousElementSibling.classList.add('hover');
    });

    star.addEventListener('mouseout', function() {
        this.classList.remove('hover');
        this.previousElementSibling.classList.remove('hover');
    });
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var rating = document.getElementById('ratingValue').value;
    var review = document.getElementById('review').value;

    var reviewEntry = document.createElement('div');
    reviewEntry.innerHTML = `<p><strong>${username}</strong> - Rating: ${rating} Stars</p><p>${review}</p><hr>`;
    document.getElementById('reviewList').appendChild(reviewEntry);

    // Clear the form after submission
    this.reset();
    document.querySelectorAll('.star.active').forEach(star => star.classList.remove('active'));
});
