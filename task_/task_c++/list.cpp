#include <iostream>
using namespace std;

// consider list as a linked_list
class Node
{
public:
    int data;
    Node *next;

    Node(int value)
    {
        data = value;
        next = NULL;
    }
};

class LinkedList
{
private:
    Node *head;

public:
    LinkedList()
    {
        head = NULL;
    }

    void append(int value)
    {
        Node *newNode = new Node(value);

        if (head == NULL)
        {
            head = newNode;
            return;
        }

        Node *temp = head;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }

        temp->next = newNode;
    }

    void display()
    {
        if (head == NULL)
        {
            cout << "list is Empty.\n";
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

    void insert(int value)
    {
        Node *newNode = new Node(value);
        newNode->next = head;
        head = newNode;
    }

    void search(int value)
    {
        Node *temp = head;
        int position = 1;

        while (temp != NULL)
        {
            if (temp->data == value)
            {
                cout << "element found at " << position << endl;
                return;
            }
            temp = temp->next;
            position++;
        }

        cout << "Element not found.\n";
    }

    void deleteNode(int value)
    {
        if (head == NULL)
        {
            cout << "list is Empty.\n";
            return;
        }

        if (head->data == value)
        {
            Node *temp = head;
            head = head->next;
            delete temp;
            cout << "Node deleted.\n";
            return;
        }

        Node *current = head;
        Node *previous = NULL;

        while (current != NULL && current->data != value)
        {
            previous = current;
            current = current->next;
        }

        if (current == NULL)
        {
            cout << "not found.\n";
            return;
        }

        previous->next = current->next;
        delete current;

        cout << "node deleted.\n";
    }

    void reverse()
    {
        Node *prev = NULL;
        Node *current = head;
        Node *next = NULL;

        while (current != NULL)
        {
            next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }

        head = prev;

        cout << "List Reversed.\n";
    }
};

int main()
{
    LinkedList list;
    int choice, value;

    do
    {
        cout << "1. append\n";
        cout << "2. display\n";
        cout << "3. insert at first\n";
        cout << "4. search\n";
        cout << "5. to delete enter value\n";
        cout << "6. reverse list\n";
        cout << "7. exit\n";
        cout << "enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "enter value: ";
            cin >> value;
            list.append(value);
            break;

        case 2:
            list.display();
            break;

        case 3:
            cout << "enter value: ";
            cin >> value;
            list.insert(value);
            break;

        case 4:
            cout << "enter value to search: ";
            cin >> value;
            list.search(value);
            break;

        case 5:
            cout << "enter value to delete: ";
            cin >> value;
            list.deleteNode(value);
            break;

        case 6:
            list.reverse();
            break;

        case 7:
            cout << "exiting...\n";
            break;

        default:
            cout << "invalid choice.\n";
        }

    } while (choice != 7);

    return 0;
}