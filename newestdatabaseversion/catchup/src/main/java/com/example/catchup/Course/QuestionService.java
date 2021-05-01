package com.example.catchup.Course;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface QuestionService {
    List<Question> findAll();

    Optional<Question> findById(Long id);

    void save(Question question);

    void delete(Long id);

    void updateQuestion(String questionText, QuestionStrategy questionStrategy,  List<Integer> distribution,List<String> answerText,Long id);

    List<String> getAnswerTexts(Long id);

    List<Integer> getDistribution(Long id);


}
