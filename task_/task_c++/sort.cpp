#include <iostream>
using namespace std;

void selectionSort(int arr[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        int minIndex = i;

        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }

        swap(arr[i], arr[minIndex]);
    }
}

void merge(int arr[], int left, int mid, int right)
{
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int *leftArray = new int[n1];
    int *rightArray = new int[n2];

    for (int i = 0; i < n1; i++)
    {
        leftArray[i] = arr[left + i];
    }

    for (int i = 0; i < n2; i++)
    {
        rightArray[i] = arr[mid + 1 + i];
    }

    int i = 0;
    int j = 0;
    int k = left;

    while (i < n1 && j < n2)
    {
        if (leftArray[i] <= rightArray[j])
        {
            arr[k] = leftArray[i];
            i++;
        }
        else
        {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < n1)
    {
        arr[k++] = leftArray[i++];
    }

    while (j < n2)
    {
        arr[k++] = rightArray[j++];
    }

    delete[] leftArray;
    delete[] rightArray;
}

void mergeSort(int arr[], int left, int right)
{
    if (left < right)
    {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

int linearSearch(int arr[], int n, int target)
{
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == target)
        {
            return i;
        }
    }

    return -1;
}

int binarySearch(int arr[], int n, int target)
{
    int left = 0;
    int right = n - 1;

    while (left <= right)
    {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)
        {
            return mid;
        }

        if (arr[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }

    return -1;
}

void displayArr(int arr[], int n)
{
    cout << "arr: ";

    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }

    cout << endl;
}

int main()
{
    const int MAX_SIZE = 100;
    int arr[MAX_SIZE];
    int n;

    cout << "enter number of elements: ";
    cin >> n;

    if (n <= 0 || n > MAX_SIZE)
    {
        cout << "can't be < 0 or upto 100." << endl;
        return 1;
    }

    cout << "enter " << n << " elements: ";

    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int choice;

    do
    {
        cout << "1. selection sort\n";
        cout << "2. merge sort\n";
        cout << "3. linear search\n";
        cout << "4. binary search\n";
        cout << "5. display array\n";
        cout << "0. exit\n";
        cout << "enter your choice: ";

        cin >> choice;

        switch (choice)
        {
        case 1:
            selectionSort(arr, n);
            cout << "array sorted using selection sort.\n";
            displayArr(arr, n);
            break;

        case 2:
            mergeSort(arr, 0, n - 1);
            cout << "array sorted using merge sort.\n";
            displayArr(arr, n);
            break;

        case 3:
        {
            int target;

            cout << "enter element to search: ";
            cin >> target;

            int index = linearSearch(arr, n, target);

            if (index != -1)
            {
                cout << "element found at index " << index << endl;
            }
            else
            {
                cout << "element not found.\n";
            }

            break;
        }

        case 4:
        {
            int target;
            mergeSort(arr, 0, n - 1);

            cout << "enter element to search: ";
            cin >> target;

            int index = binarySearch(arr, n, target);

            if (index != -1)
            {
                cout << "element found at index " << index << endl;
            }
            else
            {
                cout << "element not found.\n";
            }

            break;
        }

        case 5:
            displayArr(arr, n);
            break;

        case 0:
            cout << "program exited.\n";
            break;

        default:
            cout << "invalid choice. try again.\n";
        }

    } while (choice != 0);

    return 0;
}