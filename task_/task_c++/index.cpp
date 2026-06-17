#include <iostream>
#include <stdio.h>
using namespace std;

int main() {
    alphabetSkipper()
    printf("Enter any number: ");
    scanf("%d", &num);

    printf("Total number of digits: %d", countDigits(num));

    calculator()
    return 0;
}

void alphabetSkipper() {
    char ch = 'a';

    do {
        printf("%c ", ch);
        ch += 4;
    } while (ch <= 'z');
}

int countDigits(int num) {
    int count = 0;

    do {
        count++;
        num = num / 10;
    } while (num != 0);

    return count;
}


int add(int a, int b)
{
    return a + b;
}

int sub(int a, int b)
{
    return a - b;
}

int mul(int a, int b)
{
    return a * b;
}

float divide(int a, int b)
{
    return (float)a / b;
}

int mod(int a, int b)
{
    return a % b;
}


void calculator()
{
    int choice, a, b;
    char ch;

    do
    {
        printf("\nPress 1 for +\n");
        printf("Press 2 for -\n");
        printf("Press 3 for *\n");
        printf("Press 4 for /\n");
        printf("Press 5 for %%\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        printf("Enter first number: ");
        scanf("%d", &a);

        printf("Enter second number: ");
        scanf("%d", &b);

        switch (choice)
        {
            case 1:
                printf("Answer = %d\n", add(a, b));
                break;

            case 2:
                printf("Answer = %d\n", sub(a, b));
                break;

            case 3:
                printf("Answer = %d\n", mul(a, b));
                break;

            case 4:
                if (b == 0)
                    printf("Cannot divide by zero\n");
                else
                    printf("Answer = %.2f\n", divide(a, b));
                break;

            case 5:
                if (b == 0)
                    printf("Cannot perform modulo by zero\n");
                else
                    printf("Answer = %d\n", mod(a, b));
                break;

            default:
                printf("Invalid Choice\n");
        }

        printf("\nPress q to quit or any other key to continue: ");
        scanf(" %c", &ch);

    } while (ch != 'q' && ch != 'Q');
}