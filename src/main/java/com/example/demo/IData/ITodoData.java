package com.example.demo.IData;

import com.example.demo.Entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITodoData extends JpaRepository<Todo, String> {
}
