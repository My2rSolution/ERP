app.filter('true_false', function () {
    return function (text, length, end) {
        if (text === true) {
            return 'Yes';
        } else {
            return 'No';
        }

    }
});