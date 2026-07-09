#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node *next;
};

Node *head = NULL;

int main()
{
    int choice;
    int arr[100], n = 0;

    do
    {
        cout << "\n===== MAIN MENU =====\n";
        cout << "1. Linked List\n";
        cout << "2. Sorting\n";
        cout << "3. Binary Search\n";
        cout << "4. Exit\n";
        cout << "Choice: ";
        cin >> choice;

        switch (choice)
        {

        case 1:
        {
            int ch;
            do
            {
                cout << "\n--- Linked List Menu ---\n";
                cout << "1. Insert\n";
                cout << "2. Delete\n";
                cout << "3. Update\n";
                cout << "4. Display\n";
                cout << "5. Back\n";
                cin >> ch;

                if (ch == 1)
                {
                    int x;
                    cout << "Enter value: ";
                    cin >> x;
                    insert(x);
                }
                else if (ch == 2)
                {
                    int x;
                    cout << "Delete value: ";
                    cin >> x;
                    deleteNode(x);
                }
                else if (ch == 3)
                {
                    int oldVal, newVal;
                    cout << "Old value: ";
                    cin >> oldVal;
                    cout << "New value: ";
                    cin >> newVal;
                    updateNode(oldVal, newVal);
                }
                else if (ch == 4)
                {
                    displayList();
                }

            } while (ch != 5);

            break;
        }

        case 2:
        {
            cout << "Enter number of elements: ";
            cin >> n;

            cout << "Enter elements:\n";
            for (int i = 0; i < n; i++)
                cin >> arr[i];

            int type;
            cout << "1. Merge Sort\n2. Quick Sort\n";
            cin >> type;

            if (type == 1)
                mergeSort(arr, 0, n - 1);
            else
                quickSort(arr, 0, n - 1);

            cout << "Sorted Array:\n";
            for (int i = 0; i < n; i++)
                cout << arr[i] << " ";
            cout << endl;

            break;
        }

        case 3:
        {
            if (n == 0)
            {
                cout << "Please sort an array first.\n";
                break;
            }

            int target;
            cout << "Enter value to search: ";
            cin >> target;

            int index = binarySearch(arr, 0, n - 1, target);

            if (index != -1)
                cout << "Found at index " << index << endl;
            else
                cout << "Not found.\n";

            break;
        }

        case 4:
            cout << "Program terminated.\n";
            break;

        default:
            cout << "Invalid choice.\n";
        }

    } while (choice != 4);

    return 0;
}

void insert(int value)
{
    Node *newNode = new Node();
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL)
    {
        head = newNode;
        return;
    }

    Node *temp = head;
    while (temp->next != NULL)
        temp = temp->next;

    temp->next = newNode;
}

void displayList()
{
    if (head == NULL)
    {
        cout << "List is empty.\n";
        return;
    }

    Node *temp = head;
    while (temp != NULL)
    {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL\n";
}

void deleteNode(int value)
{
    if (head == NULL)
        return;

    if (head->data == value)
    {
        Node *temp = head;
        head = head->next;
        delete temp;
        return;
    }

    Node *current = head;
    while (current->next != NULL && current->next->data != value)
        current = current->next;

    if (current->next != NULL)
    {
        Node *temp = current->next;
        current->next = temp->next;
        delete temp;
    }
}

void updateNode(int oldValue, int newValue)
{
    Node *temp = head;

    while (temp != NULL)
    {
        if (temp->data == oldValue)
        {
            temp->data = newValue;
            return;
        }
        temp = temp->next;
    }

    cout << "Value not found.\n";
}

void merge(int arr[], int left, int mid, int right)
{
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int L[n1], R[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];

    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    while (i < n1)
        arr[k++] = L[i++];

    while (j < n2)
        arr[k++] = R[j++];
}

void mergeSort(int arr[], int left, int right)
{
    if (left < right)
    {
        int mid = (left + right) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

int partition(int arr[], int low, int high)
{
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++)
    {
        if (arr[j] < pivot)
        {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high)
{
    if (low < high)
    {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int binarySearch(int arr[], int left, int right, int target)
{
    while (left <= right)
    {
        int mid = (left + right) / 2;

        if (arr[mid] == target)
            return mid;

        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return -1;
}