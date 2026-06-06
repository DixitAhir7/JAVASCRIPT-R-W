#include <iostream>
using namespace std;

int main() {
    cout << "Pattern 1:\n";
    pattern1();
    int num;

    cout << "\nPattern 2:\n";
    pattern2();

    alphabetSkipper()
    printf("Enter any number: ");
    scanf("%d", &num);

    printf("Total number of digits: %d", countDigits(num));

    return 0;
}

void assignScore() {
int score;
    
    cout << "score: ";
    cin >> score;

    string grade = (score >= 90) ? "A" :
                   (score >= 80) ? "B" :
                   (score >= 70) ? "C" :
                   (score >= 60) ? "D" :
                   (score >= 50) ? "E" :
                   "F";

    cout << "Your grade is " << grade << endl;

    return 0;
}

void pattern1() {
    for(int row = 1; row <= 5; row++) {
        for(int number = row; number <= 5; number++) {
            cout << number << " ";
        }
        cout << endl;
    }
}

void pattern2() {
    for(int row = 5; row >= 1; row--) {

        for(int space = 1; space < row; space++) {
            cout << "  ";
        }

        for(int number = row; number <= 5; number++) {
            cout << number << " ";
        }

        cout << endl;
    }
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