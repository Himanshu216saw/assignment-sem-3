function getUser(callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback(null, { id: 1, name: "Himanshu" });
    }, 1000);
}

function getOrders(user, callback) {
    setTimeout(() => {
        console.log("Orders fetched for", user.name);
        callback(null, ["Order 1", "Order 2"]);
    }, 1000);
}

function getPayment(orders, callback) {
    setTimeout(() => {
        console.log("Payment processed");
        callback(null, { status: "Success" });
    }, 1000);
}

function getDelivery(payment, callback) {
    setTimeout(() => {
        console.log("Delivery scheduled");
        callback(null, { status: "Delivered" });
    }, 1000);
}



function handleUser(err, user) {
    if (err) return console.log("Error getting user:", err);

    getOrders(user, handleOrders);
}

function handleOrders(err, orders) {
    if (err) return console.log("Error getting orders:", err);

    getPayment(orders, handlePayment);
}

function handlePayment(err, payment) {
    if (err) return console.log("Error processing payment:", err);

    getDelivery(payment, handleDelivery);
}

function handleDelivery(err, delivery) {
    if (err) return console.log("Error scheduling delivery:", err);

    console.log("Final result:", delivery);
}
getUser(handleUser);