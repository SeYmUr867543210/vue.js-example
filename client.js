// Сделайте на vue какой-то пример для демонстрации. Например, вывод списка заказов с просмотром заказов и изменением статусов. Используйте заглушки для получения данных и обработки запросов.

// Заказ имеет статус типа Новый, В работе, Ожидает оплаты, Оплачен, Выполнен
// В заказе есть покупатель и состав
// Можно зайти в заказ, посмотреть его содержимое, изменить статус

import { orders } from "./orders.js"


new Vue({
    el: "#orderList",
    data: {
        orderList: orders,
        orderInfo: [
            { name: "", task: "", status: "", orderTime: "", tg: "", skype: "", mail: "" },
        ],
        showInfo: false,
        index: -1,
    },
    methods: {
        checkInfo: function (event) {
            let elem = event[0];

            this.showInfo = !this.showInfo;
            this.showInfo = true;




            for (let i = 0; i < elem.parentElement.children.length; i++) {
                if (elem.parentElement.children[i].getAttribute("id") == "avaPlace") {
                    this.orderInfo.name = elem.parentElement.children[i].innerHTML;
                } else if (elem.parentElement.children[i].getAttribute("id") == "task") {
                    this.orderInfo.task = elem.parentElement.children[i].innerHTML;
                } else if (elem.parentElement.children[i].getAttribute("id") == "status") {
                    this.orderInfo.status = elem.parentElement.children[i].value
                } else if (elem.parentElement.children[i].getAttribute("id") == "time") {
                    this.orderInfo.orderTime = elem.parentElement.children[i].innerHTML;
                } else if (elem.parentElement.children[i].getAttribute("id") == "tg") {
                    this.orderInfo.tg = elem.parentElement.children[i].innerHTML;
                } else if (elem.parentElement.children[i].getAttribute("id") == "skype") {
                    this.orderInfo.skype = elem.parentElement.children[i].innerHTML;
                } else if (elem.parentElement.children[i].getAttribute("id") == "mail") {
                    this.orderInfo.mail = elem.parentElement.children[i].innerHTML;
                }

                this.index = event[1];
            }

        },
        closeOrderInfo: function(event){
            this.showInfo = false
        }

    }
})