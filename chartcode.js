function ToTable(data, region){
    const newDiv=document.createElement("div");
    var il;
    for(let i = 0; i < data.length; i++){
        if(data[i].City === region){
            il = i;
        }
    }
    for(let i = 0; i < data.length; i++){
        if(data[i].City === region){
            const newLine = document.createElement("div");
            const newEl = document.createElement("div");
            const textName = document.createElement("div");
            const textGrade = document.createElement("div");
            textGrade.setAttribute("id", "grade");
            if(i !== il){
                textGrade.setAttribute("style", "margin-bottom:50px");
            }
            textName.textContent = data[i].Name;
            textGrade.textContent = data[i].Grade;
            newEl.appendChild(textName);
            newEl.appendChild(textGrade);
            newLine.appendChild(newEl);
            newLine.setAttribute("id", "line");
            newDiv.appendChild(newLine);
        }
    }
    newDiv.setAttribute("id", "table");
    document.getElementById("table").replaceWith(newDiv);
}

am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    var colors = am5.ColorSet.new(root, {});
    var data_per_regions = [
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "8-В",
            "City": "Москва"
        },
        {
            "Name": "Яков",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Эмиль",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Московская обл"
        },
        {
            "Name": "Амир",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Арсений",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Платон",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Варвара",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Давид",
            "Gender": "М",
            "Grade": "9-ЭМ",
            "City": "Черногория"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Алтайский край"
        },
        {
            "Name": "Денис",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Алтайский край"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Алтайский край"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Алтайский край"
        },
        {
            "Name": "Виолетта",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Астраханская обл"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Астраханская обл"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Астраханская обл"
        },
        {
            "Name": "Алексей",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Белгородская обл"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Белгородская обл"
        },
        {
            "Name": "Вероника",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Белгородская обл"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Белгородская обл"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Белгородская обл"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Белгородская обл"
        },
        {
            "Name": "Иван",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Егор",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Брянская обл"
        },
        {
            "Name": "Владислав",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Волгоградская обл"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Волгоградская обл"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Волгоградская обл"
        },
        {
            "Name": "Степан",
            "Gender": "М",
            "Grade": "9-ЭМ",
            "City": "Вологодская обл"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Вологодская обл"
        },
        {
            "Name": "Марина",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Вологодская обл"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Вологодская обл"
        },
        {
            "Name": "Кирилл",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Вологодская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Вологодская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Вологодская обл"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Вологодская обл"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Воронежская обл"
        },
        {
            "Name": "Кристина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Воронежская обл"
        },
        {
            "Name": "Кирилл",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Воронежская обл"
        },
        {
            "Name": "Тихон",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Воронежская обл"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Элина",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Аглая",
            "Gender": "Ж",
            "Grade": "8-Г",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Лев",
            "Gender": "М",
            "Grade": "11-БХ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Кристина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Оксана",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Диана",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Варвара",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Арсений",
            "Gender": "М",
            "Grade": "8-В",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Вера",
            "Gender": "Ж",
            "Grade": "8-Г",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Юстина",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Артем",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Иван",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Пенза"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Ивановская обл"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Тимофей",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Арсен",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Пермь"
        },
        {
            "Name": "Аника",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Ульяна",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Диана",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Тверская обл"
        },
        {
            "Name": "Владислав",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Тульская обл"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Новосибирская обл"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Вероника",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Амир",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Данил",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Тигран",
            "Gender": "М",
            "Grade": "8-Г",
            "City": "Москва"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Забайкальский край"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Денис",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Ивановская обл"
        },
        {
            "Name": "Яна",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Ивановская обл"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Ивановская обл"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Иркутская обл"
        },
        {
            "Name": "Станислава",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Иркутская обл"
        },
        {
            "Name": "Родион",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Калининградская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Калининградская обл"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "8-Г",
            "City": "Калининградская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Калужская обл"
        },
        {
            "Name": "Юлиана",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Калужская обл"
        },
        {
            "Name": "Ева",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Калужская обл"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Калужская обл"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Калужская обл"
        },
        {
            "Name": "Елена",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Калужская обл"
        },
        {
            "Name": "Марина",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Кировская обл"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Кировская обл"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Костромская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Костромская обл"
        },
        {
            "Name": "Ян",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Костромская обл"
        },
        {
            "Name": "Матвей",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Краснодарский край"
        },
        {
            "Name": "Елисей",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Краснодарский край"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "11-БХ",
            "City": "Краснодарский край"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Краснодарский край"
        },
        {
            "Name": "Ольга",
            "Gender": "Ж",
            "Grade": "10-ИТ",
            "City": "Краснодарский край"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Краснодарский край"
        },
        {
            "Name": "Милан",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Краснодарский край"
        },
        {
            "Name": "Владислава",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Краснодарский край"
        },
        {
            "Name": "Варвара",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Краснодарский край"
        },
        {
            "Name": "Виктор",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Краснодарский край"
        },
        {
            "Name": "Жан",
            "Gender": "М",
            "Grade": "9-БХ",
            "City": "Красноярский край"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Красноярский край"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Красноярский край"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Ленинградская обл"
        },
        {
            "Name": "Илья",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Ленинградская обл"
        },
        {
            "Name": "Владислав",
            "Gender": "М",
            "Grade": "10-ЭМ",
            "City": "Липецкая обл"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Липецкая обл"
        },
        {
            "Name": "Ирина",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Московская обл"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Московская обл"
        },
        {
            "Name": "Борис",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Московская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Ника",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Московская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Московская обл"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Московская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Московская обл"
        },
        {
            "Name": "Ростислав",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Московская обл"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Московская обл"
        },
        {
            "Name": "Таисия",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Московская обл"
        },
        {
            "Name": "Кирилл",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Московская обл"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Артемий",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Кира",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Московская обл"
        },
        {
            "Name": "Глеб",
            "Gender": "М",
            "Grade": "8-Г",
            "City": "Московская обл"
        },
        {
            "Name": "Ульяна",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Московская обл"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "10-ЭМ",
            "City": "Московская обл"
        },
        {
            "Name": "Василиса",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Московская обл"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Московская обл"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Московская обл"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Московская обл"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Московская обл"
        },
        {
            "Name": "Егор",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Московская обл"
        },
        {
            "Name": "Евгений",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Ольга",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Московская обл"
        },
        {
            "Name": "Вера",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Московская обл"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Кирилл",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Валерия",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Московская обл"
        },
        {
            "Name": "Нил",
            "Gender": "М",
            "Grade": "8-В",
            "City": "Московская обл"
        },
        {
            "Name": "Таисия",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Московская обл"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Московская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "10-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Московская обл"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Московская обл"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Московская обл"
        },
        {
            "Name": "Ульяна",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Московская обл"
        },
        {
            "Name": "Лев",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Мурманская обл"
        },
        {
            "Name": "Виктория",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Мурманская обл"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Олеся",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Никита",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Иван",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Кирилл",
            "Gender": "М",
            "Grade": "9-БХ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Вероника",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Надежда",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Игнат",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Сергей",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Надежда",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "11-ИТ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Владислава",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "9-БХ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Нижегородская обл"
        },
        {
            "Name": "Вадим",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Новгородская обл"
        },
        {
            "Name": "Анжелика",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Новосибирская обл"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Новосибирская обл"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Новосибирская обл"
        },
        {
            "Name": "Даниил",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Новосибирская обл"
        },
        {
            "Name": "Сергей",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Орловская обл"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Калужская обл"
        },
        {
            "Name": "Антон",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Липецкая обл"
        },
        {
            "Name": "Даниил",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Московская обл"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Московская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "11-ИТ",
            "City": "Новосибирская обл"
        },
        {
            "Name": "Сергей",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Московская обл"
        },
        {
            "Name": "Злата",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Новосибирская обл"
        },
        {
            "Name": "Алиса",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Саратовская обл"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Омская обл"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "10-СГ",
            "City": "Омская обл"
        },
        {
            "Name": "Арина",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Оренбургская обл"
        },
        {
            "Name": "Ольга",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Пётр",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Матвей",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Сергей",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Олеся",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Пермь"
        },
        {
            "Name": "Владимир",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Пермь"
        },
        {
            "Name": "Ян",
            "Gender": "М",
            "Grade": "9-ЭМ",
            "City": "Пермь"
        },
        {
            "Name": "Марк",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Пермь"
        },
        {
            "Name": "Вячеслав",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Пермь"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Пермь"
        },
        {
            "Name": "Арина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Пермь"
        },
        {
            "Name": "Владимир",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Пермь"
        },
        {
            "Name": "Нгуен-Ньы-Ань",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Александрина",
            "Gender": "Ж",
            "Grade": "8-В",
            "City": "Москва"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Федор",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Вадим",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Марк",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Яков",
            "Gender": "М",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Ольга",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Валерия",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Приморский край"
        },
        {
            "Name": "Владислав",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Приморский край"
        },
        {
            "Name": "Антон",
            "Gender": "М",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "City": "Москва"
        },
        {
            "Name": "Дания",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Артемий",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Яна",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Псковская обл"
        },
        {
            "Name": "Яна",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Адель",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Арианна",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Элина",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Динара",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Злата",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "10-ИТ",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Виктория",
            "Gender": "М",
            "Grade": "9-ЭМ",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Аделия",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Респ Калмыкия"
        },
        {
            "Name": "Ирина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Респ Калмыкия"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "11-БХ",
            "City": "Респ Крым"
        },
        {
            "Name": "Алина",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Артур",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Самат",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Данил",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Салим",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Данил",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Наира",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Карина",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Тимур",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Арсений",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Ильгизар",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Карина",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Амина",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Асиль",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Глеб",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Егор",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Респ Башкортостан"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Респ Калмыкия"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Респ Коми"
        },
        {
            "Name": "Глеб",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Респ Татарстан"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Ростовская обл"
        },
        {
            "Name": "Юлия",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Ростовская обл"
        },
        {
            "Name": "Вероника",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Ростовская обл"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Ростовская обл"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "10-ЭМ",
            "City": "Рублёвское шоссе"
        },
        {
            "Name": "Максим",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Самарская обл"
        },
        {
            "Name": "Федор",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Самарская обл"
        },
        {
            "Name": "Диана",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Самарская обл"
        },
        {
            "Name": "Максим",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Самарская обл"
        },
        {
            "Name": "Арина",
            "Gender": "Ж",
            "Grade": "9-ИТ",
            "City": "Самарская обл"
        },
        {
            "Name": "Алла",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Самарская обл"
        },
        {
            "Name": "Арсений",
            "Gender": "М",
            "Grade": "10-СГ",
            "City": "Самарская обл"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Самарская обл"
        },
        {
            "Name": "Максим",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Самарская обл"
        },
        {
            "Name": "Алиса",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Самарская обл"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Агата",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Кира",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Санкт-Петербург"
        },
        {
            "Name": "Платон",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Саратовская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "8-В",
            "City": "Саратовская обл"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Саратовская обл"
        },
        {
            "Name": "Маргарита",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Камила",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Свердловская обл"
        },
        {
            "Name": "Ульяна",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Ольга",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Ирина",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Свердловская обл"
        },
        {
            "Name": "Богдан",
            "Gender": "М",
            "Grade": "10-СГ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "10-ИТ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Свердловская обл"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Артемий",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Матвей",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Вера",
            "Gender": "Ж",
            "Grade": "8-В",
            "City": "Свердловская обл"
        },
        {
            "Name": "Ариадна",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Свердловская обл"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Севастополь"
        },
        {
            "Name": "Ульяна",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Смоленская обл"
        },
        {
            "Name": "Ульяна",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Смоленская обл"
        },
        {
            "Name": "Максим",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Ставропольский край"
        },
        {
            "Name": "Даниил",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Тверская обл"
        },
        {
            "Name": "Маргарита",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Тульская обл"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Тульская обл"
        },
        {
            "Name": "Георгий",
            "Gender": "М",
            "Grade": "10-СГ",
            "City": "Тульская обл"
        },
        {
            "Name": "Елена",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Тульская обл"
        },
        {
            "Name": "Константин",
            "Gender": "М",
            "Grade": "10-БХ",
            "City": "Тюменская обл"
        },
        {
            "Name": "Данил",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Тюменская обл"
        },
        {
            "Name": "Алиса",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Тюменская обл"
        },
        {
            "Name": "Юрий",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-ИТ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Степан",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Серафим",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Григорий",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Степан",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Удмуртская Респ"
        },
        {
            "Name": "Дарина",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Украина"
        },
        {
            "Name": "Матвей",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Вера",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Алина",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Варвара",
            "Gender": "Ж",
            "Grade": "8-Г",
            "City": "Москва"
        },
        {
            "Name": "Алёна",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Арсений",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Кира",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Марк",
            "Gender": "М",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Ирина",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Алиса",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Бахтиёр",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Алиса",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Москва"
        },
        {
            "Name": "Леонид",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Камилла",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Москва"
        },
        {
            "Name": "Пётр",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Василина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Виктория",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Лев",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Кристиан",
            "Gender": "М",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Вероника",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Константин",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Елена",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Ульяна",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Глеб",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Григорий",
            "Gender": "М",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Никита",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Нонна",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Ульяновская обл"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Ульяновская обл"
        },
        {
            "Name": "Анатолий",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Ульяновская обл"
        },
        {
            "Name": "Альбина",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Ульяновская обл"
        },
        {
            "Name": "Эдуард",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Хабаровский край"
        },
        {
            "Name": "Кирилл",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Хабаровский край"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Хабаровский край"
        },
        {
            "Name": "Тимур",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Ханты-Мансийский АО - Югра"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Алина",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Челябинская обл"
        },
        {
            "Name": "Марианна",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Челябинская обл"
        },
        {
            "Name": "Юлия",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Челябинская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Челябинская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Чувашская респ"
        },
        {
            "Name": "Кирилл",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Чувашская респ"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Чувашская респ"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "11-БХ",
            "City": "Ямало-Ненецкий АО"
        },
        {
            "Name": "Кирилл",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Ярославская обл"
        },
        {
            "Name": "Джинт",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Ярославская обл"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Ярославская обл"
        },
        {
            "Name": "Дарина",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Ярославская обл"
        },
        {
            "Name": "Владимир",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Мирослав",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Армен",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Лара",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Камалия",
            "Gender": "Ж",
            "Grade": "11-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Игорь",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Никита",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Тимур",
            "Gender": "М",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Марат",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Олеся",
            "Gender": "Ж",
            "Grade": "8-В",
            "City": "Москва"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Корней",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Ирина",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Платон",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Яна",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Олег",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Олег",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Максим",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Арина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Тимофей",
            "Gender": "М",
            "Grade": "8-Д",
            "City": "Москва"
        },
        {
            "Name": "Алиса",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Беньямин",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Даниил",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Матвей",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Григорий",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Данил",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Никита",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Владимир",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "11-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Глеб",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Ева",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Иван",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Марк",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Сергей",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Елена",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Яков",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Эмиль",
            "Gender": "М",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Арина",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Стефания",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Платон",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Степан",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Егор",
            "Gender": "М",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Максим",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Роман",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Арсений",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Яна",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Диана",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Яна",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Роман",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Алёна",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Арина",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Максим",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Семен",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Терентий",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Роман",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Сергей",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Илья",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Мирослав",
            "Gender": "М",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Константин",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Людмила",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Марина",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Лина",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Иван",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Москва"
        },
        {
            "Name": "Наталия",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Борис",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Глеб",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Виктор",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Доброслав",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Лев",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Ульяна",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Кира",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Елена",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Тимофей",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Дария",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Марфа",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Лука",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Сергей",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Григорий",
            "Gender": "М",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Кирилл",
            "Gender": "М",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Даниил",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Инесса",
            "Gender": "Ж",
            "Grade": "11-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Ганна",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Надежда",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Арсений",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Егор",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "8-Г",
            "City": "Москва"
        },
        {
            "Name": "Арина",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Макар",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Егор",
            "Gender": "М",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Василиса",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Артемий",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Даниил",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Вероника",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Москва"
        },
        {
            "Name": "Семен",
            "Gender": "М",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Владимир",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Амина",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Евгений",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Фёдор",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Доминика",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Ульяна",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Максим",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Павел",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Алексей",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Артемий",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Диана",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Варвара",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Арсений",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Марк",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Тимур",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Рамина",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Владимир",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Савва",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Петр",
            "Gender": "М",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Ника",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Матвей",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Павел",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Василиса",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Петр",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Алеся",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Фёдор",
            "Gender": "М",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "8-В",
            "City": "Москва"
        },
        {
            "Name": "Ника",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Николай",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Василиса",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Игорь",
            "Gender": "М",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Алексей",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Матвей",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Диана",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Арсений",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Даниил",
            "Gender": "М",
            "Grade": "8-Г",
            "City": "Москва"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Москва"
        },
        {
            "Name": "Клим",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Ксения",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Дмитрий",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Максим",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Арина",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Иван",
            "Gender": "М",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Наталия",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Аглая",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Ирина",
            "Gender": "Ж",
            "Grade": "11-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Артём",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Александр",
            "Gender": "М",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Денис",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Дарья",
            "Gender": "Ж",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Иван",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Ярослав",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Егор",
            "Gender": "М",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "9-БХ",
            "City": "Москва"
        },
        {
            "Name": "Борис",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Агафья",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Николай",
            "Gender": "М",
            "Grade": "11-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Алексей",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Маргарита",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Иван",
            "Gender": "М",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Михаил",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Екатерина",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Алёна",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Данила",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Гаяр",
            "Gender": "М",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Иван",
            "Gender": "М",
            "Grade": "8-Б",
            "City": "Москва"
        },
        {
            "Name": "Глеб",
            "Gender": "М",
            "Grade": "10-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Григорий",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Евгения",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Элина",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Анастасия",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Милолика",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Жанна",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Никита",
            "Gender": "М",
            "Grade": "11-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Галина",
            "Gender": "Ж",
            "Grade": "9-ИТ",
            "City": "Москва"
        },
        {
            "Name": "Виктория",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Ева",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Василиса",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "10-БХ",
            "City": "Москва"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "10-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Елизавета",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Анна",
            "Gender": "Ж",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Александра",
            "Gender": "Ж",
            "Grade": "11-БХ",
            "City": "Москва"
        },
        {
            "Name": "Семён",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Андрей",
            "Gender": "М",
            "Grade": "11-ЭМ",
            "City": "Кипр"
        },
        {
            "Name": "Яков",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Владимир",
            "Gender": "М",
            "Grade": "9-ФМ",
            "City": "Москва"
        },
        {
            "Name": "Снежана",
            "Gender": "Ж",
            "Grade": "11-СГ",
            "City": "Москва"
        },
        {
            "Name": "Софья",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "Татьяна",
            "Gender": "Ж",
            "Grade": "10-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Полина",
            "Gender": "Ж",
            "Grade": "10-СГ",
            "City": "Москва"
        },
        {
            "Name": "Никита",
            "Gender": "М",
            "Grade": "7-А",
            "City": "Москва"
        },
        {
            "Name": "Илья",
            "Gender": "М",
            "Grade": "8-А",
            "City": "Москва"
        },
        {
            "Name": "Мария",
            "Gender": "Ж",
            "Grade": "9-ЭМ",
            "City": "Москва"
        },
        {
            "Name": "Валерия",
            "Gender": "Ж",
            "Grade": "9-СГ",
            "City": "Москва"
        },
        {
            "Name": "София",
            "Gender": "Ж",
            "Grade": "7-А",
            "City": "Москва"
        }
    ]


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoOrthographic()
    }));


// Create polygon series for the world map
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["RU"]
    }));

    worldSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color(0xaaaaaa),
        templateField: "polygonSettings"
    });

    worldSeries.mapPolygons.template.states.create("hover", {
        fill: colors.getIndex(9)
    });
//Create series for RU region map
    var polygonSeriesRU = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_russiaLow
    }));

    polygonSeriesRU.mapPolygons.template.setAll({
        toggleKey: "active",
        interactive: true,
    });

    polygonSeriesRU.mapPolygons.template.states.create("hover", {
        fill: colors.getIndex(2)
    });

    var data =  [
        {"id":"RU-PER","name" : "Пермь", "value": 0, polygonTemplate: { fill: colors.getIndex(8) }},
        {"id":"RU-ZAB" , "name" : "Забайкальский край", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-YEV", "name" : "Еврейский автономный округ", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-YAR", "name" : "Ярославская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-YAN", "name" : "Ямало-Ненецкий АО", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-VOR" , "name" : "Воронежская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-VLG" , "name" : "Вологодская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-VGG", "name" : "Волгоградская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-VLA", "name" : "Владимирская обл" , "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-ULY" , "name" : "Ульяновская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-UD", "name" : "Удмуртская Респ", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-TYU" , "name" : "Тюменская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-TVE", "name" : "Тверская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-TY", "name" : "Тыва Респ", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-TUL" , "name" : "Тульская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-TOM", "name" : "Томская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-TA" , "name" : "Респ Татарстан", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-TAM", "name" : "Тамбовская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-SVE", "name" : "Свердловская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-STA", "name" : "Ставропольский край", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-SMO" , "name" : "Смоленская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-SAR", "name" : "Саратовская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-SAM" , "name" : "Самарская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-SAK", "name" : "Сахалинская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-SA" , "name" : "Саха", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-RYA" , "name" : "Рязанская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-ROS" , "name" :"Ростовская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-PSK" , "name" : "Псковская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-PRI", "name" : "Приморский край", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-PNZ", "name" : "Пенза", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-ORE", "name" : "Оренбургская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-ORL", "name" : "Орловская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-OMS" , "name" : "Омская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-NVS", "name" : "Новосибирская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-NGR", "name" : "Новгородская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-SE", "name" : "Осетия", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-NIZ", "name" : "Нижегородская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-NEN", "name" : "Ненецкий окр", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-MUR", "name" : "Мурманская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-MOS", "name" : "Московская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-MOW" , "name" : "Москва", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-MO", "name" : "Мордовия", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-ME", "name" : "Марий-Эл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-MAG", "name" : "Магаданская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-LIP", "name" : "Липецкая обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-LEN", "name" : "Ленинградская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KRS", "name" : "Курская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KGN", "name" : "Курганская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KYA", "name" : "Красноярский край", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KDA", "name" : "Краснодарский край", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KOS", "name" :"Костромская обл" , "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-KO" , "name" : "Респ Коми", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KIR", "name" : "Кировская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KHM", "name" :"Ханты-Мансийский АО - Югра" , "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-KK" , "name" : "Респ Хакассия", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-KHA" , "name" : "Хабаровский край", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KEM", "name" : "Кемеровская обл" , "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KR", "name" : "Респ Карелия", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KC", "name" : "Карачаево-Черкесская респ", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KAM", "name" : "Камчатский край", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KLU", "name" : "Калужская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-KL" , "name" : "Респ Калмыкия", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KGD", "name" : "Калининградская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-KB", "name" : "Кабардино-Балкария респ", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-IVA", "name" : "Ивановская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-IRK", "name" : "Иркутская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-IN", "name" : "Респ Ингушетия", "value":0 , polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-AL", "name" : "Алтайский край", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-DA" , "name" : "Респ Дагестан", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-SPE", "name" : "Санкт-Петербург", "value":0 , polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-CU", "name" : "Чувашская респ", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-CHU", "name" : "Чукотский АО", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-CHE" , "name" : "Челябинская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-CE", "name" : "Чеченская обл" , "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-BU", "name" : "Респ Бурятия", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-BRY", "name" : "Брянская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-BEL" , "name" : "Белгородская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-BA", "name" : "Респ Башкортостан" , "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id":"RU-AST" , "name" : "Астраханская обл" , "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-ARK", "name" : "Архангельска обля", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-AMU", "name" : "Амурская обл", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-ALT", "name" : "Алтайский край", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},
        {"id": "RU-AD", "name" : "Респ Адыгея", "value": 0, polygonTemplate: {fill: colors.getIndex(8)}},]
//Click event
    polygonSeriesRU.mapPolygons.template.events.on("click", (ev) => {
        var dataContext = ev.target.dataItem.dataContext;
        var countryDataItem ={};
        for (var i = 0; i < data.length; i++){
            if(data[i].id === dataContext.id) countryDataItem = data[i];
            console.log(data[i].id);
        }

        //

        var city = countryDataItem.name;
        ToTable(data_per_regions, city);
    })

//Circles function

//background
    var backgroundSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {})
    );

    backgroundSeries.mapPolygons.template.setAll({
        fill: root.interfaceColors.get("alternativeBackground"),
        fillOpacity: 0.1,
        strokeOpacity: 0
    });

    backgroundSeries.data.push({
        geometry:
            am5map.getGeoRectangle(90, 180, -90, -180)
    });

    chart.appear(1000, 100);
}); // end am5.ready()