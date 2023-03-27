package com.example.demo.IBusiness;

import com.example.demo.Entity.Todo;

import java.util.List;
import java.util.Optional;

public interface ITodoBusiness {
    void add(Todo todo);
    void update(Todo todo);
    void delete(Todo todo);
    List<Todo> getAll();
    Optional<Todo> getById(String id);
}
