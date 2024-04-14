export function bubbleSort(arr, key) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j][key] > arr[j + 1][key]) {
                // Intercambiar elementos si están en el orden incorrecto
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

export function toArray(lista) {
    const arr = [];
    let current = lista.head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }
    return arr;
}