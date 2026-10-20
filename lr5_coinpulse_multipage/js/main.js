document.addEventListener('DOMContentLoaded', () => {
    // Интерактив для покупки активов
    document.querySelectorAll('.btn-buy-asset').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const assetName = e.target.dataset.name;
            alert(`Заявка на приобретение актива "${assetName}" успешно принята к исполнению!`);
        });
    });

    // Интерактив для быстрых кнопок действий
    document.querySelectorAll('.btn-action').forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`Операция "${btn.innerText.trim()}" успешно инициирована через СБП.`);
        });
    });
});
