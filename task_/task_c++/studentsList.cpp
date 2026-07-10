#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main()
{
    StudentManagementSystem system;
    int choice;

    do
    {
        cout << "1. Add Student\n";
        cout << "2. Display Students\n";
        cout << "3. Remove Student by ID\n";
        cout << "4. Search Student by ID\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";

        cin >> choice;

        switch (choice)
        {
        case 1:
            system.addStudent();
            break;

        case 2:
            system.displayStudents();
            break;

        case 3:
        {
            int id;
            cout << "Enter Student ID to remove: ";
            cin >> id;
            system.removeStudent(id);
            break;
        }

        case 4:
        {
            int id;
            cout << "Enter Student ID to search: ";
            cin >> id;
            system.searchStudent(id);
            break;
        }

        case 5:
            cout << "exited\n";
            break;

        default:
            cout << "invalid choice. try again.\n";
        }

    } while (choice != 5);

    return 0;
}

class Student
{
public:
    int id;
    string name;

    Student(int studentId, string studentName)
    {
        id = studentId;
        name = studentName;
    }
};

class StudentManagementSystem
{
private:
    vector<Student> students;

public:
    void addStudent()
    {
        int id;
        string name;

        cout << "enter student ID: ";
        cin >> id;

        cin.ignore();
        cout << "enter sudent name: ";
        getline(cin, name);

        students.push_back(Student(id, name));

        cout << "student added to list.\n";
    }

    void displayStudents()
    {
        if (students.empty())
        {
            cout << "no students found.\n";
            return;
        }

        cout << "\nstudent list\n";

        for (const Student &student : students)
        {
            cout << "ID: " << student.id
                 << ", Name: " << student.name << endl;
        }
    }

    // 3. Remove student by ID
    void removeStudent(int id)
    {
        for (auto it = students.begin(); it != students.end(); it++)
        {
            if (it->id == id)
            {
                students.erase(it);
                cout << "student removed successfully!\n";
                return;
            }
        }

        cout << "Student not found.\n";
    }

    void searchStudent(int id)
    {
        for (const Student &student : students)
        {
            if (student.id == id)
            {
                cout << "Student found!\n";
                cout << "ID: " << student.id << endl;
                cout << "Name: " << student.name << endl;
                return;
            }
        }

        cout << "Student not found.\n";
    }
};