#include <iostream>
#include <stdio.h>
using namespace std;

int main()
{
    cout << "Pattern 1:\n";
    pattern1();
    int num;

    cout << "\nPattern 2:\n";
    pattern2();
    rightHalfTriangle();
    floydTriangle();
    leftHalfTriangle();
    invertedLeftHalfTriangle();
    fullPyramid();
    customNumericPattern();
    customAlphabeticPattern();
}

void rightHalfTriangle()
{
    int i, j;

    printf("Q1: Right Half Triangle\n");
    for (i = 1; i <= 5; i++)
    {
        for (j = 41; j <= 40 + i; j++)
        {
            printf("%d ", j);
        }
        printf("\n");
    }
}

void floydTriangle()
{
    int i, j, num = 11;

    printf("\nQ2: Floyd's Triangle\n");
    for (i = 1; i <= 4; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%d ", num++);
        }
        printf("\n");
    }
}

void leftHalfTriangle()
{
    int i, j, space;

    printf("\nQ3: Left Half Triangle\n");
    for (i = 1; i <= 5; i++)
    {

        for (space = 1; space <= 5 - i; space++)
        {
            printf(" ");
        }

        for (j = 6 - i; j <= 5; j++)
        {
            printf("%d ", j);
        }

        printf("\n");
    }
}

void invertedLeftHalfTriangle()
{
    int i, j, space;

    printf("\nQ4: Inverted Left Half Triangle\n");

    for (i = 5; i >= 1; i--)
    {

        for (space = 1; space <= 5 - i; space++)
        {
            printf(" ");
        }

        for (j = 1; j <= i; j++)
        {
            printf("%d ", (j % 2 == 1) ? 1 : 0);
        }

        printf("\n");
    }
}
void fullPyramid()
{
    int i, j;

    printf("Q5: Full Pyramid\n");

    for (i = 1; i <= 5; i++)
    {

        // Left ascending part
        for (j = 6 - i; j <= 5; j++)
        {
            printf("%d ", j);
        }

        // Right descending part
        for (j = 4; j >= 6 - i; j--)
        {
            printf("%d ", j);
        }

        printf("\n");
    }
}

void customNumericPattern()
{
    int i, j;

    printf("\nQ6: Custom Numeric Pattern\n");

    for (i = 1; i <= 5; i++)
    {

        // Left side
        for (j = 1; j <= i; j++)
        {
            printf("%d ", j);
        }

        // Middle spaces
        for (j = 1; j <= (6 - i) * 2; j++)
        {
            printf(" ");
        }

        // Right side
        for (j = i; j >= 1; j--)
        {
            printf("%d ", j);
        }

        printf("\n");
    }
}

void customAlphabeticPattern()
{
    int i, j;

    printf("\nQ7: Custom Alphabetic Pattern\n");

    for (i = 1; i <= 3; i++)
    {

        for (j = 1; j <= 5; j++)
        {

            if (i == 1 || i == 3 || j == 1 || j == 5)
                printf("* ");
            else
                printf("  ");
        }

        printf("\n");
    }
}

void pattern1()
{
    for (int row = 1; row <= 5; row++)
    {
        for (int number = row; number <= 5; number++)
        {
            cout << number << " ";
        }
        cout << endl;
    }
}

void pattern2()
{
    for (int row = 5; row >= 1; row--)
    {

        for (int space = 1; space < row; space++)
        {
            cout << "  ";
        }

        for (int number = row; number <= 5; number++)
        {
            cout << number << " ";
        }

        cout << endl;
    }
}