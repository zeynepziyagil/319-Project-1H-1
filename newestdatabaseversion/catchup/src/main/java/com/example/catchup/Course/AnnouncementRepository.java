package com.example.catchup.Course;
import com.example.catchup.Course.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
@Transactional
public interface AnnouncementRepository extends JpaRepository<Announcement,Long>{
    @Modifying
    @Query("update Announcement a set a.title = :title, a.description = :description, a.date = :date where a.id = :id")
    void updateAnnouncement(@Param("title") String title, @Param("description") String description , @Param("date") Date date, @Param("id")  Long id);

    @Query("select count (id) from Announcement ")
    int getTotalAnnouncementNum();

    @Modifying
    @Query("delete from Announcement a where a.id = :id")
    void deleteAnnouncement(@Param("id") Long id);
}
