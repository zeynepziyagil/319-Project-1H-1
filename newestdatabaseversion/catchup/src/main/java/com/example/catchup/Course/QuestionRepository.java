package com.example.catchup.Course;
import com.example.catchup.Assignment.Assignment;
import com.example.catchup.Course.Course;
import com.example.catchup.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
@Transactional
public interface QuestionRepository extends JpaRepository<Question,Long>{
    @Modifying
    @Query("update Question q set q.questionText = :questionText, q.questionStrategy = :questionStrategy, q.distribution = :distribution, q.answerText = : answerText where q.id = :id")
    void updateQuestion(@Param("questionText") String questionText, @Param("questionStrategy") QuestionStrategy questionStrategy,  @Param("distribution") List<Integer> distribution,@Param("answerText") List<String> answerText,@Param("id") Long id);

    @Modifying
    @Query("delete from Question q where q.id = :id")
    void deleteQuestion(@Param("id") Long id);

    @Query("select answerText from Question ")
    List<String> getAnswerTexts(Long id);

    @Query("select distribution from Question ")
    List<Integer> getDistribution(Long id);

}
