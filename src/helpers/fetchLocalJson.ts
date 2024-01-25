export async function fetchLocalJson() {
    try {
        const response = await fetch('/db/cuttedProducts.json'); // Укажите путь к вашему JSON-файлу
        if (!response.ok) {
            throw new Error('Ошибка загрузки файла .json');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

