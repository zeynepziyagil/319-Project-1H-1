package com.example.demo;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

@Repository
public class Users_RepositoryImpl extends Users_Repository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Users> findAll() {
        return entityManager.createQuery("from Users", Users.class).getResultList();
    }

    @Override
    public Optional<Users> findById(Long id) {
        Users user = entityManager.find(Users.class, id);
        return Optional.ofNullable(user);

    }

    @Override
    public List<Users> findUsersByUserName(String userName) {
        List<Users> userList = entityManager.createQuery("from Owner o where lower(o.name) like :ownerName").setParameter("ownerName", ownerName.toLowerCase() + '%').getResultList();
        return ownerList;
    }

    @Override
    public boolean existEmail(String email) {
        Query query = entityManager.createQuery("from Owner o where o.mail = : email");
        boolean isEmpty = query.setParameter("email", email).getResultList().isEmpty();
        return !isEmpty;
    }

    @Override
    public Long totalOwners() {
        return entityManager.createQuery("select count(*) from Owner", Long.class).getSingleResult();
    }

    @Override
    public void save(Owner owner) {
        entityManager.persist(owner);
    }

    @Override
    public Owner update(Owner owner) {
        return entityManager.merge(owner);
    }

    @Override
    public void delete(Long id) {
        entityManager.remove(entityManager.getReference(Owner.class, id));
    }

}
