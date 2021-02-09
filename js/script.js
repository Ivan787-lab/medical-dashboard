let all_links = document.querySelectorAll('.all-links__link')

for (let i = 0; i < all_links.length; i++) {
    all_links[i].addEventListener('click', function () {
        let all_links_active = document.querySelectorAll('.all-links__link_active')
        if (all_links_active.length > 0) {
            for (let j = 0; j < all_links_active.length; j++) {
                all_links_active[j].classList.remove('all-links__link_active')
            }
        }
        if (event.target.classList.contains('all-links__link__icon')) {
            event.target.classList.remove('all-links__link_active')
        } else {
            event.target.classList.add('all-links__link_active')
        }
    })
}
let select_month = document.querySelector('.select-month__select-month')
let all_p_with_month = document.querySelectorAll('.chart__bottom-line__p')

select_month.onchange = function () {
    if (select_month.value != 'none-select') {
        let select_value = select_month.value;
        for (let i = 0; i < all_p_with_month.length; i++) {
            if (select_value == all_p_with_month[i].innerHTML) {
                let all_p_with_month_active = document.querySelectorAll('.chart__bottom-line__p_active')
                console.log(all_p_with_month_active);
                if (all_p_with_month_active.length > 0) {
                    for (let i = 0; i < all_p_with_month_active.length; i++) {
                        all_p_with_month_active[i].classList.remove('chart__bottom-line__p_active')
                    }
                }
                all_p_with_month[i].classList.add('chart__bottom-line__p_active')
                for (let i = 0; i < all_columns_light.length; i++) {
                    all_columns_light[i].style.height = get_random_height(21, 60) + 'px'
                }

                for (let i = 0; i < all_columns_dark.length; i++) {
                    all_columns_dark[i].style.height = get_random_height(21, 60) + 'px'
                }


            }
        }

    }
}

let all_columns_light = document.querySelectorAll('.one-graphic-element__graphic-element_light')
let all_columns_dark = document.querySelectorAll('.one-graphic-element__graphic-element_dark')

function get_random_height(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

for (let i = 0; i < all_columns_light.length; i++) {
    all_columns_light[i].style.height = get_random_height(21, 60) + 'px'
}

for (let i = 0; i < all_columns_dark.length; i++) {
    all_columns_dark[i].style.height = get_random_height(21, 60) + 'px'
}


$(document).ready(function () {
    $('.hospital-information__the-best-hospitals-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
    });
})

let all_categoris_p = document.querySelectorAll('.one-event__category-of-event')
for (let i = 0; i < all_categoris_p.length; i++) {
    if (all_categoris_p[i].innerText == 'Healthy') {
        all_categoris_p[i].classList.add('one-event__category-of-event_healthy')
    } else if (all_categoris_p[i].innerText == 'Charity') {
        all_categoris_p[i].classList.add('one-event__category-of-event_charity')
    }
}