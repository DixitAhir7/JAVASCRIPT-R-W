#include <iostream>
using namespace std;

int main()
{
    Stack s;

    s.push(10);
    s.push(20);
    s.push(30);

    cout << "Top element: " << s.top() << endl;

    s.pop();

    cout << "Top element after pop: " << s.top() << endl;

    if (s.isEmpty())
    {
        cout << "Stack is empty" << endl;
    }
    else
    {
        cout << "Stack is not empty" << endl;
    }

    return 0;
}

class Stack
{
private:
    int arr[5];
    int topIndex;

public:
    Stack()
    {
        topIndex = -1;
    }

    void push(int value)
    {
        if (isFull())
        {
            cout << "Stack Overflow!" << endl;
            return;
        }

        topIndex++;
        arr[topIndex] = value;

        cout << value << " pushed into stack." << endl;
    }

    void pop()
    {
        if (isEmpty())
        {
            cout << "Stack Underflow!" << endl;
            return;
        }

        cout << arr[topIndex] << " removed from stack." << endl;
        topIndex--;
    }

    int top()
    {
        if (isEmpty())
        {
            cout << "Stack is empty!" << endl;
            return -1;
        }

        return arr[topIndex];
    }

    bool isEmpty()
    {
        return topIndex == -1;
    }

    bool isFull()
    {
        return topIndex == 4;
    }
};