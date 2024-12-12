function viewCarDetails(carId) {
    alert(`Вы выбрали автомобиль: ${carId}`);
    // Здесь вы можете добавить логику для перехода на страницу карточки автомобиля.
}
document.getElementById("search-icon").addEventListener("click", function () {
    const searchInput = document.getElementById("search-input");
    searchInput.focus(); // Фокусируем на строку
    searchInput.style.width = "300px"; // Увеличиваем ширину
});


