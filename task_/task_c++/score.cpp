#include <iostream>
#include <stdio.h>
using namespace std;

int main() {
    assignScore()
          
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