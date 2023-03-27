package com.example.demo.Manager;

import com.example.demo.Entity.Todo;
import com.example.demo.IBusiness.ITodoBusiness;
import com.example.demo.IData.ITodoData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TodoManager implements ITodoBusiness {

    private ITodoData todoData;

    @Autowired
    public TodoManager(ITodoData todoData) {
        this.todoData = todoData;
    }

    @Override
    public void add(Todo todo) {
        this.todoData.save(todo);
    }

    @Override
    @Transactional
    public void update(Todo todo) {
        this.todoData.save(todo);
    }

    @Override
    @Transactional
    public void delete(Todo todo) {
        this.todoData.delete(todo);
    }

    @Override
    @Transactional
    public List<Todo> getAll() {
        return this.todoData.findAll();
    }

    @Override
    @Transactional
    public Optional<Todo> getById(String id) {
        return this.todoData.findById(id);
    }
}
