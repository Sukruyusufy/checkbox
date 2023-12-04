function kaydet() {
    var alan = document.getElementById("checkboxForm");

    var checkboxlar = alan.querySelectorAll('input[type="checkbox"]');

    var alan = [];

    checkboxlar.forEach(function (checkbox) {
        if (checkbox.checked) {
            alan.push(checkbox.name);
        }
    });

    var sonucalan = document.getElementById("sonuc");
    sonucalan.innerHTML = "" + alan.join(", ");
}