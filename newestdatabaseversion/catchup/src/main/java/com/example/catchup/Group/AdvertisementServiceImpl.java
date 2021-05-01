package com.example.catchup.Group;
import com.example.catchup.User.User;
import com.example.catchup.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;

import java.util.List;
import java.util.Optional;


public class AdvertisementServiceImpl implements AdvertisementService {
    //properties
    private AdvertisementRepository advertisementRepository;
    @Autowired
    public void setAdvertisementRepository(AdvertisementRepository advertisementRepository) {
        this.advertisementRepository = advertisementRepository;
    }

    @Override
    public List<Advertisement> findAll(){
        return advertisementRepository.findAll();
    }

    @Override
    public Optional<Advertisement> findById(Long id){
        return advertisementRepository.findById(id);
    }

    @Override
    public void save(Advertisement advertisement){
        advertisementRepository.save(advertisement);
    }

    @Override
    public void updateAdvertisement(String title,String description,Long id) {
        advertisementRepository.updateAdvertisement(title,description,id);
    }

    @Override
    public int getTotalAdvertisementNum() {
        return advertisementRepository.getTotalAdvertisementNum();
    }

    @Override
    @Secured(value = "ROLE_ADMIN")
    public void delete(Long id){
        advertisementRepository.deleteAdvertisement(id);
    }
}
