package com.runaide.runaideApp.controllers;

import com.runaide.runaideApp.domain.Run;
import com.runaide.runaideApp.domain.RunRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RunController {

    private final RunRepository runRepository;

    @Autowired
    public RunController(RunRepository runRepository) {
        this.runRepository = runRepository;
    }

    @GetMapping("/api/run")
    public Iterable<Run> getRun() {
        return runRepository.findAll();
    }

    @GetMapping("/api/run/{id}")
    public Optional<Run> getRun(@PathVariable Long id) {
        return runRepository.findById(id);
    }

    @DeleteMapping("/api/run/{id}")
    public void deleteRun(@PathVariable Long id) {
        runRepository.deleteById(id);
    }

    @PutMapping("/api/run")
    public void updateRun(@Valid @RequestBody Run run) {
        runRepository.save(run);
    }

    @PostMapping("/api/run")
    public void addUser(@Valid @RequestBody Run run) { runRepository.save(run);}

}
