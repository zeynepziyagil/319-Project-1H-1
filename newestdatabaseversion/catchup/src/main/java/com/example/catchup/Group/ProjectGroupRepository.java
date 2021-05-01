package com.example.catchup.Group;
import com.example.catchup.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface ProjectGroupRepository extends JpaRepository<ProjectGroup,Long>  {
    @Modifying
    @Query("update ProjectGroup pg set pg.name = :name, pg.team = :team where pg.id = :id")
    void updateProjectGroupStudent(@Param("name") String name, @Param("team") List<Long> team, @Param("id")  long id);

    @Modifying
    @Query("update ProjectGroup pg set pg.name = :name, pg.maxMemberNum = :maxMemberNum where pg.id = :id")
    void updateProjectGroupTA(@Param("name") String name, @Param("maxMemberNum") int maxMemberNum, @Param("id")  long id);

    @Query("select count (id) from ProjectGroup")
    int getTotalProjectGroupNum();

    @Modifying
    @Query("delete from ProjectGroup pg where pg.id = :id")
    void deleteProjectGroup(@Param("id") Long id);

    @Query("select team from ProjectGroup")
    List<Long>  getAllStudents(Long id);
}
