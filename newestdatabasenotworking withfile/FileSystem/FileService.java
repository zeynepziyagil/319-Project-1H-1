package com.example.catchup.FileSystem;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface FileService {
    public void save(MultipartFile file) throws IOException;

    public Optional<FileEntity> getFile(String id);

    public List<FileEntity> getAllFiles();
}
