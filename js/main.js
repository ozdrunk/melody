$(document).ready(function () {
        let currentFloor = 2; // переменная, где хранится текущий этаж
        let FloorPath = $(".home-image path"); // каждый отельный этаж в SVG
        let counterUp = $(".counter-up");// кнопка увеличения этажа
        let counterDown = $(".counter-down");//  кнопка уменьшения этажа
        let modal = $(".modal");
        let modalCloseButton = $(".modal-close-button");
        let viewFlatsBatton = $(".view-flats");
        

        // Функция при наведении мышкой на этаж
        FloorPath.on("mouseover", function () {
            FloorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            currentFloor = $(this).attr("data-floor"); // получаем значения текущего этажа
            $(".counter").text(currentFloor); // записываем значения этажа в счетчик с права
        });

        FloorPath.on("click", toggleModal);// при клике на этаж, вызывает окно
        modalCloseButton.on("click", toggleModal); // при клик на кнопку закрыть, убирает окно
        viewFlatsBatton.on("click", toggleModal);

    

        // отслеживаем клик по кнопке вверх
        counterUp.on("click", function () {
            // проверяем значение этажа, оно не должно быть больше 18
            if (currentFloor < 18) {
                currentFloor++; //прибавляем один этаж
                usCurrentFloor = currentFloor.toLocaleString("en-Us", {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                }); // форматируем переменную с этажом, что бы было 01 а не 1
                $(".counter").text(usCurrentFloor); // записываем значения этажа в счетчик с права
                FloorPath.removeClass("current-floor");// удаляем активный класс у этажей
                $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");// подсвечиваем текущий этаж
            }
        });
        // отслеживаем клик по кнопке вниз
        counterDown.on("click", function () {
            // проверяем значение этажа, оно не должно быть меньше 2
            if (currentFloor > 2) {
                // уменьшаем один этаж
                currentFloor--;
                usCurrentFloor = currentFloor.toLocaleString("en-Us", {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                });// форматируем переменную с этажом, что бы было 01 а не 1
                $(".counter").text(usCurrentFloor);// записываем значения этажа в счетчик с права
                FloorPath.removeClass("current-floor");// удаляем активный класс у этажей
                $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");// подсвечиваем текущий этаж
            }
        })
    function toggleModal () { // функия открыть, закрыть окно
        modal.toggleClass("is-open");
    }
    
        });