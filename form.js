$(document).ready(function () {
    $("#mySchool").validate({
        rules: {
            // School Information Rules
            schoolname: "required",
            joiningdate: {
                required: true,
                date: true
            },
            graduated: "required"
        },
        messages: {
            // School Information Messages
            schoolname: "Please enter your school name",
            joiningdate: {
                required: "Please enter a date",
                date: "date must be in dd/mm/yyyy format"
            },
            graduated: "Please select yes or no"
        }
    });

    $("#myInfo").validate({
        rules: {
            // Personal Information Rules
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                pattern: /\d{10}/
            },
            zip: {
                required: true,
                pattern: /[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d/
            }
        },
        messages: {
            // Personal Information Messagess
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter a phone number",
                pattern: "Please enter a valid phone number (e.g., 123-456-7890)"
            },
            zip: {
                required: "Please enter a Canadian zip code",
                pattern: "Zip code must be in ANA NAN format"
            }
        }
    });
    $("#myPayment").validate({
        rules: {
            // Payment Information Rules
            ccNumber: {
                required: true,
                pattern: /\d{16}/
            },
            expirationDate: {
                required: true,
                date: true,
            },
            cvv: {
                required: true,
                pattern: /\d{3}/
            }
        },
        messages: {
            // Payment Information Messages
            ccNumber: {
                required: "Please enter CC number",
                pattern: "Please enter a valid CC number"
            },
            expirationDate: {
                required: "Please enter a date",
                date: "Date must be a future date"
            },
            cvv: {
                required: "Please enter CVV number",
                pattern: "CVV should be in 123 format"
            }
        }
    });
    let mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        // spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
});