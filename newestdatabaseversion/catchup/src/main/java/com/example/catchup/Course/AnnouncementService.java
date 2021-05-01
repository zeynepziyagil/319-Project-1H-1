package com.example.catchup.Course;

import java.util.Date;
import java.util.List;
import java.util.Optional;
public interface AnnouncementService {
    List<Announcement> findAll();

    Optional<Announcement> findById(Long id);

    void save(Announcement annnouncement);

    void delete(Long id);

    void updateAnnouncement(String title, String description, Date date, Long id);

    int getTotalAnnouncementNum();
}
