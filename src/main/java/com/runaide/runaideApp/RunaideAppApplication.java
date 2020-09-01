package com.runaide.runaideApp;

import com.runaide.runaideApp.domain.Run;
import com.runaide.runaideApp.domain.RunRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RunaideAppApplication {

	@Autowired
	private RunRepository runRepository;

	public static void main(String[] args) {
		SpringApplication.run(RunaideAppApplication.class, args);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {
//			Save demo data after start


			runRepository.save(new Run(222, 3, true, "evening", false, 420));
			runRepository.save(new Run(222, 2, true, "morning", true, 510));
			runRepository.save(new Run(268, 3, true, "morning", false, 500));
			runRepository.save(new Run(330, 0, false, "midday", true, 440));
			runRepository.save(new Run(310, 1, false, "afternoon", true, 410));
			runRepository.save(new Run(255, 0, true, "morning", false, 610));
			runRepository.save(new Run(276, 4, false, "morning", false, 340));
			runRepository.save(new Run(330, 0, false, "midday", true, 440));
			runRepository.save(new Run(310, 1, false, "afternoon", true, 410));
		};
	}
}
