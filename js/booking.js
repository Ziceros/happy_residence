document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('contactForm');
    const bookRoomButtons = document.querySelectorAll('.book-btn');
    const bookEventButtons = document.querySelectorAll('.book-event-btn');
    const orderButtons = document.querySelectorAll('.order-btn');
    const whatsappNumber = '22870205959';

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const arrival = document.getElementById('arrival').value;
            const departure = document.getElementById('departure').value;
            const guests = document.getElementById('guests').value;
            const spaceType = document.getElementById('spaceType').value;

            if (!arrival || !departure || !guests || !spaceType) {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }

            const message = encodeURIComponent(
                `Bonjour Happy Résidence,\n\nJe souhaite effectuer une réservation.\n\nVoici mes détails :\n• Espace : ${spaceType}\n• Arrivée : ${arrival}\n• Départ : ${departure}\n• Nombre de personnes : ${guests}\n\nVeuillez me confirmer la disponibilité.\n\nMerci !`
            );

            openWhatsApp(message);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }

            const whatsappMessage = encodeURIComponent(
                `Bonjour Happy Résidence,\n\nNouveau message de contact :\n\n• Nom : ${name}\n• Email : ${email}\n• Sujet : ${subject}\n\nMessage :\n${message}\n\nMerci !`
            );

            openWhatsApp(whatsappMessage);
        });
    }

    bookRoomButtons.forEach(button => {
        button.addEventListener('click', function() {
            const roomType = this.getAttribute('data-room');
            const priceCourt = this.getAttribute('data-price-court');
            const priceLong = this.getAttribute('data-price-long');

            const message = encodeURIComponent(
                `Bonjour Happy Résidence,\n\nJe suis intéressé(e) par la ${roomType}.\n\nTarifs :\n• Court séjour : ${priceCourt} FCFA / nuit\n• Long séjour : ${priceLong} FCFA / nuit\n\nVeuillez me confirmer la disponibilité et m'indiquer les modalités de réservation.\n\nMerci !`
            );

            openWhatsApp(message);
        });
    });

    bookEventButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventType = this.getAttribute('data-event');

            const message = encodeURIComponent(
                `Bonjour Happy Résidence,\n\nJe souhaite obtenir un devis pour l'espace événementiel : "${eventType}".\n\nVeuillez me contacter pour discuter des détails (date, nombre de personnes, besoins spécifiques) et connaître les tarifs.\n\nMerci !`
            );

            openWhatsApp(message);
        });
    });

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platName = this.getAttribute('data-plat');
            const platPrice = this.getAttribute('data-prix');

            const message = encodeURIComponent(
                `Bonjour Happy Résidence,\n\nJe souhaite commander :\n• ${platName}\n• Prix : ${platPrice} FCFA\n\nVeuillez me confirmer la disponibilité et les modalités de livraison ou de retrait.\n\nMerci !`
            );

            openWhatsApp(message);
        });
    });

    function openWhatsApp(message) {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }
});
