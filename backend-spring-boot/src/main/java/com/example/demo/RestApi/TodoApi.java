package com.example.demo.RestApi;

import com.example.demo.Entity.Todo;
import com.example.demo.IBusiness.ITodoBusiness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/todo")
@CrossOrigin
public class TodoApi {
    private ITodoBusiness todoService;

    @Autowired
    public TodoApi(ITodoBusiness todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/list")
    public List<Todo> get(){
        return this.todoService.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Todo> getById(@PathVariable String id){
        return this.todoService.getById(id);
    }

    @DeleteMapping("/delete")
    public void delete(@RequestBody Todo todo){
        this.todoService.delete(todo);
    }

    @PostMapping("/add")
    public void add(@RequestBody Todo todo){
        this.todoService.add(todo);
    }

    @PostMapping("/update")
    public void update(@RequestBody Todo todo){
        this.todoService.update(todo);
    }



}
