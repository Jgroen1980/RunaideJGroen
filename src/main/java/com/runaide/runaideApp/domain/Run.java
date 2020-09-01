package com.runaide.runaideApp.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;

@Data
@Entity
@Getter
@Setter
public class Run {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long runId;

    @NotNull
    @Max(value = 559, message = "An average total must be under the 10 minutes and under the 60 seconds")
    @Min(value = 1, message = "Your average, theoretical, must be at least 1 second")
    private int average;

    @NotNull
    @Digits(integer = 1, fraction = 0)
    @Max(value = 4, message = "Amount af alcohol must be between 0 and 4")
    private int alcohol;

    @NotNull
    private boolean nutrition;

    @NotNull
    @Pattern(regexp = "[a-z]+", message = "Only characters are allowed")
    @Size(min = 6, max = 9, message = "moment of the day must be between 6 and 9 characters")
    private String momentOfDay;

    @NotNull
    private boolean activity;

    @NotNull
    @Digits(integer = 4, fraction = 0)
    @Max(value = 1439, message = "You can only sleep a maximum of 24 hours in a day")
    private int sleep;

    protected  Run(){}

    public Run(int average, int alcohol, boolean nutrition, String momentOfDay, boolean activity,  int sleep) {
        this.average = average;
        this.alcohol = alcohol;
        this.nutrition = nutrition;
        this.momentOfDay = momentOfDay;
        this.activity = activity;
        this.sleep = sleep;
    }
}
