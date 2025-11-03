// Commission calculation module

function calculateProgressiveCommission(amount, rate) {
    // TODO: implement progressive rates
    if (amount < 100) {
        return amount * rate;
    } else if (amount < 1000) {
        return amount * rate + 10;
    } else {
        return amount * rate + 100;
    }


module.exports = { calculateCommission };
