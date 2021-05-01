package com.example.catchup.Course;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
public class QuestionStrategyFactor {
    private Map<Question.StrategyName, QuestionStrategy> strategies;

    @Autowired
    public QuestionStrategyFactor(Set<QuestionStrategy> strategySet) {
        createStrategy(strategySet);
    }

    public QuestionStrategy findStrategy(Question.StrategyName strategyName) {
        return strategies.get(strategyName);
    }

    private void createStrategy(Set<QuestionStrategy> strategySet) {
        strategies = new HashMap<Question.StrategyName, QuestionStrategy>();
        strategySet.forEach(
                strategy ->strategies.put(strategy.getStrategyName(), strategy));
    }
}
