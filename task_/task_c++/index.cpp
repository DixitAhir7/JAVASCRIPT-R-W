#include <iostream>
using namespace std;

int main() {
     cout << "Pattern 1:\n";
    pattern1();

    cout << "\nPattern 2:\n";
    pattern2();

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