
        let currentPosition = 0;
        const track = document.getElementById('carouselTrack-c');
        const cards = document.querySelectorAll('.product-card-c');
        const cardWidth = cards[0].offsetWidth + 16; 
        const maxPosition = (cards.length - Math.floor(track.offsetWidth / cardWidth)) * cardWidth;

        function moveCarousel(direction) {
            currentPosition -= direction * cardWidth;
            

            if (currentPosition < 0) currentPosition = 0;
            if (currentPosition > maxPosition) currentPosition = maxPosition;
            
            track.style.transform = `translateX(-${currentPosition}px)`;
        }

        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        track.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                moveCarousel(1);
            } else if (touchStartX - touchEndX < -50) {
                moveCarousel(-1);
            }
        });

        function searchProducts() {
        
            const searchText = document.getElementById('search').value.toLowerCase();
            const products = document.getElementsByClassName('product-card-pro');

        
            for (let product of products) {
                const productName = product.getElementsByTagName('h3')[0].textContent.toLowerCase();
                const productClasses = product.className.toLowerCase();
                
                if (productClasses.includes(searchText) || productName.includes(searchText)) {
                    product.style.display = "";  
                } else {
                    product.style.display = "none"; 
                }
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('input', function(e) {
        if (e.target.value === '') {
            const products = document.getElementsByClassName('product-card-pro');
            for (let product of products) {
                product.style.display = "";
                }
            }
        });
    });
