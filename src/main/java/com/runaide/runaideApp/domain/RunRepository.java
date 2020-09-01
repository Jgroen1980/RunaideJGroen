package com.runaide.runaideApp.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RunRepository extends CrudRepository<Run, Long> {
}
