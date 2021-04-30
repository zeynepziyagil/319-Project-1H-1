package com.example.catchup;
import com.vladmihalcea.hibernate.type.array.ListArrayType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@PrimaryKeyJoinColumn(name = "userId")
@TypeDef(
        name = "list-array",
        typeClass = ListArrayType.class
)
public class Student extends User{

    @Column(unique=true)
    private long studentId;
    //other properties
    int currentSemester;
    String department;
    double averagePeerGrade;

    @Type(type = "list-array")
    @Column(
            name = "groups",
            columnDefinition = "bigInt[]"
    )
    private List<Long> groups;

    @Type(type = "list-array")
    @Column(
            name = "reviews",
            columnDefinition = "bigInt[]"
    )
    private List<Long> reviews;

    //CALENDAR?

    public Student() {
    }

    public Student(String name, String surname, String mail, String password, long studentId, int currentSemester, String department) {
        super(name,surname,mail,password,"student");
        this.studentId = studentId;
        this.currentSemester = currentSemester;
        this.department = department;
        this.averagePeerGrade = 0;
        this.groups = new ArrayList<>(0);
        this.reviews = new ArrayList<>(0);
    }

    public long getStudentId() {
        return studentId;
    }

    public int getCurrentSemester() {
        return currentSemester;
    }

    public String getDepartment() {
        return department;
    }

    public double getAveragePeerGrade() {
        return averagePeerGrade;
    }

    public List<Long> getGroups() {
        return groups;
    }

    public List<Long> getReviews() {
        return reviews;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentId=" + studentId +
                ", currentSemester=" + currentSemester +
                ", department='" + department + '\'' +
                ", averagePeerGrade=" + averagePeerGrade +
                ", groups=" + groups +
                ", reviews=" + reviews +
                '}';
    }
}
