function fill() {
    for (let i = +$("#FirstNumber").val(); i <= +$("#SecondNumber").val(); i++) {
        optionText = i;
        optionValue = i;
        $('#select1').append(`<option value="${optionValue}">
                               ${optionText}
                          </option>`);
    }
}