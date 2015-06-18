(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    function n(e, t) {
        var n = e.split("_");
        return 1 === t % 10 && 11 !== t % 100 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }

    function a(e, t, a) {
        var r = {
            mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
        };
        return "m" === a ? t ? "минута" : "минуту" : e + " " + n(r[a], +e)
    }

    function r(e, t) {
        var n = {
            nominative: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_"),
            accusative: "Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря".split("_")
        }, a = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[a][e.month()]
    }

    function i(e, t) {
        var n = {
            nominative: "янв_фев_март_апр_май_Июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            accusative: "янв_фев_мар_апр_мая_Июня_июля_авг_сен_окт_ноя_дек".split("_")
        }, a = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[a][e.month()]
    }

    function s(e, t) {
        var n = {
            nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
        }, a = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
        return n[a][e.day()]
    }

    (t.defineLocale || t.lang).call(t, "ru", {
        months: r,
        monthsShort: i,
        weekdays: s,
        weekdaysShort: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
        weekdaysMin: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
        monthsParse: [/^Янв/i, /^Фев/i, /^Мар/i, /^Апр/i, /^Ма[й|я]/i, /^Июнь/i, /^Июль/i, /^Авг/i, /^Сен/i, /^Окт/i, /^Ноя/i, /^Дек/i],
        longDateFormat: {
            LT: "HH:mm",
            LTS: "LT:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., LT",
            LLLL: "dddd, D MMMM YYYY г., LT"
        },
        calendar: {
            sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function () {
                return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
            }, lastWeek: function (e) {
                if (e.week() === this.week())return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                    case 0:
                        return "[В прошлое] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В прошлый] dddd [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В прошлую] dddd [в] LT"
                }
            }, sameElse: "L"
        },
        relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            m: a,
            mm: a,
            h: "час",
            hh: a,
            d: "день",
            dd: a,
            M: "месяц",
            MM: a,
            y: "год",
            yy: a
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
            return /^(дня|вечера)$/.test(e)
        },
        meridiem: function (e) {
            return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
        },
        ordinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
            switch (t) {
                case"M":
                case"d":
                case"DDD":
                    return e + "-й";
                case"D":
                    return e + "-го";
                case"w":
                case"W":
                    return e + "-я";
                default:
                    return e
            }
        },
        week: {dow: 1, doy: 7}
    }), e.fullCalendar.datepickerLang("ru", "ru", {
        closeText: "Закрыть",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "Сегодня",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), e.fullCalendar.lang("ru", {
        defaultButtonText: {
            month: "Месяц",
            week: "Неделя",
            day: "День",
            list: "Повестка дня"
        }, allDayText: "Весь день", eventLimitText: function (e) {
            return "+ ещё " + e
        }
    })
});