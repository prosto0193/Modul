(function ($) {
    $(document).ready(function() {
        $(window).load(function() {

        	var cars = ['S500 Cabriolet AMG', 'Cayenne 400', 'GLC 250D 4MATIC', 'CLA SB Standard'],
			counter = 0;

            $("body").on('click', '#choose_1', function(event){
                counter = 0;
                $('.col_img').empty();
                $('.col_img').append('<img src="https://testdrive.andersenlab.com/img/1493300397-Mercedes-S500-Cabriolet-AMG.png" class="img-fluid">');
                $('.headline_start').empty();
                $('.headline_start').append('<a href="#" id="go_to_step_2">Продолжить</a>');
            });

            $("body").on('click', '#choose_2', function(event){
                counter = 1;
                $('.col_img').empty();
                $('.col_img').append('<img src="https://testdrive.andersenlab.com/img/mercedes-2015-cayenne-400.png" class="img-fluid">');
                $('.headline_start').empty();
                $('.headline_start').append('<a href="#" id="go_to_step_2">Продолжить</a>');
            });
            $("body").on('click', '#choose_3', function(event){
                counter = 2;
                $('.col_img').empty();
                $('.col_img').append('<img src="https://testdrive.andersenlab.com/img/1486985670-Large-Mercedes-GLC-250d-4MATIC-AMGline-auto.png" class="img-fluid">');
                $('.headline_start').empty();
                $('.headline_start').append('<a href="#" id="go_to_step_2">Продолжить</a>');
            });
            $("body").on('click', '#choose_4', function(event){
                counter = 3;
                $('.col_img').empty();
                $('.col_img').append('<img src="https://testdrive.andersenlab.com/img/cla_sb_standard-cirrushvid.png" class="img-fluid">');
                $('.headline_start').empty();
                $('.headline_start').append('<a href="#" id="go_to_step_2">Продолжить</a>');
            });    
            

            $("body").on('click', '#go_to_step_2', function(event){
                event.preventDefault();
				$('#title').html('<span class="number">2</span> Технические характеристики ' + cars[counter]);
				$('#step_1').fadeOut(0);
				$('#step_2').fadeIn(500);

				switch(counter){
                    case 0:
                        $('#engine').html('<option>Бензиновый 3.0</option><option>Бензиновый 3.5</option>');
                        $('#transmission').html('<option>Автоматическая</option>');
                        break;
                    case 1:
                        $('#engine').html('<option>Бензиновый 1.9</option><option>Дизельный 1.3</option>');
                        $('#transmission').html('<option>Автоматическая</option><option>Механическая</option>');
                        break;
                    case 2:
                        $('#engine').html('<option>Бензиновый 2.2</option><option>Бензиновый 2.5</option><option>Дизельный 1.9</option><option>OutOfMemoryError</option>');
                        $('#transmission').html('<option>Автоматическая</option><option>Механическая</option>');
                        break;
                    case 3:
                        $('#engine').html('<option>Бензиновый 2.0</option><option>Дизельный 2.0</option>');
                        $('#transmission').html('<option>Автоматическая</option><option>Механическая</option>');
                        break;
                }
            });

            $("body").on('click', '#go_to_step_3', function(event){
                event.preventDefault();
				$('#title').html('<span class="number">4</span> Контактные данные');
				$('#step_2').fadeOut(0);
				$('#step_3').fadeIn(500);

                $('#step_4_car').text(cars[counter]);
                var transmission = $("#transmission option:selected").text();
                var engine = $("#engine option:selected").text();
                if(engine === 'OutOfMemoryError'){
                    engine = '{transmission}';
                }
                $('#step_4_equipment').text('Двигатель ' + engine + ', ' + transmission + ' трансмиссия');
            });

            var firstName, lastName,middleName, age, phone;

            $("body").on('click', '#go_to_step_4', function(event){
                event.preventDefault();
                firstName = $("#form_first_name").val();
				lastName = $("#form_last_name").val();
				middleName = $("#form_middle_name").val();
				age = $("#form_age").val();
				phone = $("#form_phone").val();
                if(firstName === '' || phone === '' || lastName === '' || middleName === '' || age === ''){
                    $('#title').html('<span class="number" style="color: red;">4</span> Поля не заполнены');
                }
                else{
                    $('#title').html('<span class="number">5</span> Подтверждение данных');
				    $('#step_3').fadeOut(0);
				    $('#step_4').fadeIn(500);
                    $('#step_4_name').text(lastName + ' ' + firstName + ' ' + middleName);
                    $('#step_4_age').text(age);
                    $('#step_4_phone').text(phone);
                };
            });

            $("body").on('click', '#finish', function(event){
                event.preventDefault();
				$('#title').html('Благодарим за запись на тест драйв!');
				$('#step_4').fadeOut(0);
				$('#step_5').fadeIn(500);
            });

        });
    });
}(jQuery));
