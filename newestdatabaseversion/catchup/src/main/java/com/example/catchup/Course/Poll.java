package com.example.catchup.Course;

import com.vladmihalcea.hibernate.type.array.ListArrayType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@TypeDef(
        name = "list-array",
        typeClass = ListArrayType.class
)
public class Poll {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //properties
    @Type(type = "list-array")
    @Column(
            name = "questions",
            columnDefinition = "bigInt[]"
    )
    private List<Long> questionId;


    public Poll() {
    }
}
