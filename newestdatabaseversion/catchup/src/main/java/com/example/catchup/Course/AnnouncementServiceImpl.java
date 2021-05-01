package com.example.catchup.Course;
import com.example.catchup.Assignment.Assignment;
import com.example.catchup.Assignment.AssignmentRepository;
import com.example.catchup.Course.Course;
import com.example.catchup.User.User;
import com.example.catchup.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;

import java.util.Date;
import java.util.List;
import java.util.Optional;
public class AnnouncementServiceImpl implements AnnouncementService {
    //properties
    private AnnouncementRepository announcementRepository;
    @Autowired
    public void setAnnouncementRepository(AnnouncementRepository announcementRepository) {
        this.announcementRepository = announcementRepository;
    }

    @Override
    public List<Announcement> findAll(){
        return announcementRepository.findAll();
    }

    @Override
    public Optional<Announcement> findById(Long id){
        return announcementRepository.findById(id);
    }

    @Override
    public void save(Announcement announcement){
        announcementRepository.save(announcement);
    }

    @Override
    public void updateAnnouncement(String title, String description, Date date,Long id) {
        announcementRepository.updateAnnouncement(title,description,date, id);
    }

    @Override
    public int getTotalAnnouncementNum() {
        return announcementRepository.getTotalAnnouncementNum();
    }

    @Override
    @Secured(value = "ROLE_ADMIN")
    public void delete(Long id){
        announcementRepository.deleteAnnouncement(id);
    }

}
