package com.example.catchup.User;

import com.vladmihalcea.hibernate.type.array.ListArrayType;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;

@Entity
@PrimaryKeyJoinColumn(name = "userId")
@TypeDef(
        name = "list-array",
        typeClass = ListArrayType.class
)
public class TeachingAssistant extends User{

    //properties
    //CALENDAR ?
    private String officeLocation;

    public TeachingAssistant(String name, String surname, String mail, String password, String officeLocation) {
        super(name, surname, mail, password, "teaching assistant");
        this.officeLocation = officeLocation;
    }


    public TeachingAssistant() {
    }


    public String getOfficeLocation() {
        return officeLocation;
    }


    @Override
    public String toString() {
        return "TeachingAssistant{" +
                ", officeLocation='" + officeLocation + '\'' +
                '}';
    }
}
