package com.example.catchup.Course;

import org.springframework.stereotype.Component;

@Component("MultipleChoice")
public class MultipleChoiceStrategy implements QuestionStrategy{

    @Override
    public Question.StrategyName setQuestionType() {
           return getStrategyName();
    }

    @Override
    public Question.StrategyName getStrategyName() {
        return Question.StrategyName.MultipleChoice;
    }
}
