package com.example.catchup.Course;
import com.example.catchup.Assignment.Assignment;
import com.example.catchup.Assignment.AssignmentRepository;
import com.example.catchup.Course.Course;
import com.example.catchup.User.User;
import com.example.catchup.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
@Service
public class QuestionServiceImpl implements QuestionService{
    //properties
    private QuestionRepository questionRepository;

    private QuestionStrategyFactor strategyFactory;

    public void findSome(){

        // Now get the strategy by passing the name
        QuestionStrategy strategy =
                strategyFactory.findStrategy(Question.StrategyName.MultipleChoice);
        // you can now call the methods defined in strategy.
        strategy.setQuestionType();
    }

    @Autowired
    public void setQuestionStrategyFactor(QuestionStrategyFactor strategyFactory) {
        this.strategyFactory = strategyFactory;
    }

    @Autowired
    public void setQuestionRepository(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<Question> findAll(){
        return questionRepository.findAll();
    }

    @Override
    public Optional<Question> findById(Long id){
        return questionRepository.findById(id);
    }

    @Override
    public void save(Question question){
        questionRepository.save(question);
    }

    @Override
    public void updateQuestion(String questionText, QuestionStrategy questionStrategy, List<Integer> distribution, List<String> answerText, Long id) {
        questionRepository.updateQuestion(questionText,questionStrategy,distribution,answerText,id);
    }

    @Override
    public List<String> getAnswerTexts(Long id) {
        return questionRepository.getAnswerTexts(id);
    }

    @Override
    public List<Integer> getDistribution(Long id) {
        return questionRepository.getDistribution(id);
    }

    @Override
    @Secured(value = "ROLE_ADMIN")
    public void delete(Long id){
        questionRepository.deleteQuestion(id);
    }
}
