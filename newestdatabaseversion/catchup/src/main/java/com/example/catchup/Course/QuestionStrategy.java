package com.example.catchup.Course;

public interface QuestionStrategy {
    Question.StrategyName setQuestionType();

    Question.StrategyName getStrategyName();
}
