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
public class Question {
    //Unique ID for each question generated by the system
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //properties
    private String questionText;
    private StrategyName questionType;

    public enum StrategyName{
        MultipleChoice,
        OpenEnded
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pollId", referencedColumnName = "id")
    private Poll poll;
    //lists
    @Type(type = "list-array")
    @Column(
            name = "distribution",
            columnDefinition = "integer[]"
    )
    private List<Integer> distribution;

    @Type(type = "list-array")
    @Column(
            name = "answerText",
            columnDefinition = "text[]"
    )
    private List<String> answerText;

    public Question() {
    }

    public Question(String questionText, List<String> answerText,Poll poll) {
        this.questionText = questionText;
        this.answerText = answerText;
        this.distribution = new ArrayList<>(0);
        this.poll = poll;
    }

    public Long getId() {
        return id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public Poll getPoll() {
        return poll;
    }

    public StrategyName getQuestionType() {
        return questionType;
    }

    public List<Integer> getDistribution() {
        return distribution;
    }

    public List<String> getAnswerText() {
        return answerText;
    }

    public void setQuestionType(StrategyName sName){
        questionType = sName;
    }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", questionText='" + questionText + '\'' +
                ", questionType='" + questionType + '\'' +
                ", poll=" + poll +
                ", distribution=" + distribution +
                ", answerText=" + answerText +
                '}';
    }
}
