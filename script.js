
        let currentPosition = 0;
        const track = document.getElementById('carouselTrack-c');
        const cards = document.querySelectorAll('.product-card-c');
        const cardWidth = cards[0].offsetWidth + 16; // Including gap
        const maxPosition = (cards.length - Math.floor(track.offsetWidth / cardWidth)) * cardWidth;

        function moveCarousel(direction) {
            currentPosition -= direction * cardWidth;
            
            // Prevent scrolling past the ends
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
