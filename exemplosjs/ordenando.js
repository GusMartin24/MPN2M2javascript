
const swap = (arr, x, y) => {
    [arr[x], arr[y]] = [arr[y], arr[x]];
};

const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        let j = Math.floor(Math.random() * arr.length);
        swap(arr, j, Math.floor(Math.random() * arr.length));
    }
};

const bubbleSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
};

const partition = (arr, left, right) => {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j <= right - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right);
    return i + 1;
};
